import React, { useEffect, useState } from "react";
import Workspace from "./workspace/Workspace";
import PaletteSidebar from "./palette-sidebar/PaletteSidebar";
import { predefinedNodes } from "../mocks/predefinedNodes";
import { initNodes, initEdges } from "../mocks/initPipeline";

const PipelineContainer = () => {
  const [paletteList, setPaletteList] = useState<any>([]);

  useEffect(() => {
    getPalette();
  }, []);

  const getPalette = () => {
    setPaletteList(predefinedNodes);
  };

  const deployPipeline = (pipeline: any) => {
    // TODO
    console.log(pipeline);
  };

  return (
    <>
      <PaletteSidebar paletteNodeList={paletteList} />

      <Workspace
        initialNodes={initNodes}
        initialEdges={initEdges}
        onDeployPipeline={deployPipeline}
      />
    </>
  );
};

export default PipelineContainer;
