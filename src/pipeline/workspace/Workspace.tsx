import React, {useCallback, useEffect, useRef, useState} from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  Panel,
  Edge,
  EdgeChange,
  Node,
  NodeMouseHandler,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import {StyledWorkspace, StyledWorkspaceWrapper,} from "../styled/StyledWorkspace";
import {draggableNodeKey} from "../constant";
import type {WorkspaceConfig} from "../pipeline-initializer/types";
import StyledButton, {ButtonType} from "../../shared/StyledButton";

let id = 10;
const getId = () => ` ${id++}`;

interface Props {
  workspaceConfig: WorkspaceConfig;
  onDeployPipeline: (pipeline: any) => void;
}

const Workspace = ({ workspaceConfig, onDeployPipeline }: Props) => {
  const reactFlowWrapper = useRef<HTMLInputElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(
    workspaceConfig.initialNodes
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    workspaceConfig.initialEdges
  );
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  useEffect(() => {
    console.log("onEdge", edges);
  }, [edges]);

  const onConnect = useCallback((params: any) => {
    console.log("onConnect", params);
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onDragOver = useCallback((event: any) => {
    event.preventDefault();
    setSelectedNode(null);
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();
      setSelectedNode(null);

      const type = event.dataTransfer.getData(draggableNodeKey);
      // TODO: add type guard
      if (!type || !reactFlowWrapper.current) {
        return;
      }

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = workspaceConfig.nodeCreator({
        id: getId(),
        type,
        position,
      })

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onEdgesChangeProxy = (edges: EdgeChange[]) => {
    console.log("onEdgesChangeProxy", edges);
    onEdgesChange(edges);
  };

  const onNodeClick: NodeMouseHandler = (event, node) => {
    setSelectedNode(node);
  };

  const onNodeDragStop = (
    event: React.MouseEvent,
    node: Node,
    nodes: Node[]
  ) => {
    // setSelectedNode(null);
  };

  const onEdgeClick = (event: React.MouseEvent, edge: Edge) => {
    console.log(edge);
    setSelectedNode(null);
  };

  const onPaneClick = (event: React.MouseEvent) => {
    console.log(event);
    setSelectedNode(null);
  };

  const onNodeChange = (newNode: Node) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === newNode?.id) {
          return {
            ...newNode,
          };
        }

        return node;
      })
    );
  };

  const onNodeDelete = (deletedNode: Node) => {
    setNodes((nds) => nds.filter((node) => node.id !== deletedNode.id));
    setSelectedNode(null);
  };

  const onDeployPipelineHandler = () => {
    const pipeline = {
      nodes,
      edges
    }
    onDeployPipeline(pipeline);
  }

  return (
    <StyledWorkspace>
      <ReactFlowProvider>
        <StyledWorkspaceWrapper ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={workspaceConfig.nodeTypeComponentMap}
            onNodeClick={onNodeClick}
            onNodeDragStop={onNodeDragStop}
            onEdgeClick={onEdgeClick}
            onPaneClick={onPaneClick}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChangeProxy}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Background />
            <Controls />
            <Panel position="top-left">
              <StyledButton onClick={onDeployPipelineHandler} buttonType={ButtonType.DEFAULT}>Deploy</StyledButton>
            </Panel>

          </ReactFlow>
        </StyledWorkspaceWrapper>

        {selectedNode && (
          <workspaceConfig.editPanelComponent
            editableNode={selectedNode}
            onNodeChange={onNodeChange}
            onNodeDelete={onNodeDelete}
            pipelinePreferences={workspaceConfig.pipelinePreferences}
          />
        )}
      </ReactFlowProvider>
    </StyledWorkspace>
  );
};

export default Workspace;
