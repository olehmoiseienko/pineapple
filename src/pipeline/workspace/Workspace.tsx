import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Node,
  NodeMouseHandler,
  EdgeChange,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import EditPanel from "../edit-panel/EditPanel";
import { supportedNodeTypes } from "./supported-node-types";
import {
  StyledWorkspace,
  StyledWorkspaceWrapper,
} from "../styled/StyledWorkspace";
import { draggableNodeKey } from "../constant";

let id = 0;
const getId = () => ` ${id++}`;

interface Props {
  initialNodes: any;
  initialEdges: any;
  onDeployPipeline: any;
}

// TODO: WIP
const Workspace = ({ initialNodes, initialEdges, onDeployPipeline }: Props) => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
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
    // setSelectedNode(null);
    // @ts-ignore
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault();
      setSelectedNode(null);
      // @ts-ignore
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      // @ts-ignore
      const type = event.dataTransfer.getData(draggableNodeKey);

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      // @ts-ignore
      const position = reactFlowInstance.project({
        // @ts-ignore
        x: event.clientX - reactFlowBounds.left,
        // @ts-ignore
        y: event.clientY - reactFlowBounds.top,
      });
      const id = getId();
      const newNode = {
        id,
        type,
        position,
        data: { label: `${type} ${id} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onEdgesChangeProxy = (edges: EdgeChange[]) => {
    console.log("onEdgesChangeProxy", edges);
    onEdgesChange(edges);
  };

  const onNodeClick: NodeMouseHandler = (event, node) => {
    console.log(node);
    setSelectedNode(node);
  };

  const onNodeDragStop = (
    event: React.MouseEvent,
    node: Node,
    nodes: Node[]
  ) => {
    console.log(node);
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
    console.log(newNode);
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

  return (
    <StyledWorkspace>
      <ReactFlowProvider>
        <StyledWorkspaceWrapper ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={supportedNodeTypes}
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
          </ReactFlow>
        </StyledWorkspaceWrapper>

        {selectedNode && (
          <EditPanel
            editableNode={selectedNode}
            onNodeChange={onNodeChange}
            onNodeDelete={onNodeDelete}
          />
        )}
      </ReactFlowProvider>
    </StyledWorkspace>
  );
};

export default Workspace;
