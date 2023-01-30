import React, { useEffect, useState } from "react";
import Workspace from "./workspace/Workspace";
import PaletteSidebar from "./palette-sidebar/PaletteSidebar";
import { predefinedNodes } from "../mocks/predefinedNodes";
import { initNodes, initEdges } from "../mocks/initPipeline";
import {StyledProgress} from "./styled/StyledProgress";

const fetchSet = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(predefinedNodes), 1000);
  })
}

const PipelineContainer = () => {
  const [initialized, setInitialized] = useState<any>(false);
  const [paletteList, setPaletteList] = useState<any>([]);

  useEffect(() => {
    getPalette();
  }, []);

  const getPalette = async () => {
    const predefinedNodes = await fetchSet();
    setPaletteList(predefinedNodes);
    setInitialized(true);
  };

  const deployPipeline = (pipeline: any) => {
    // TODO
    console.log(pipeline);
  };

  return (
    <>
    {!initialized && <StyledProgress>Workspace initialization...</StyledProgress>}
    {initialized &&
    <>
      <PaletteSidebar paletteNodeList={paletteList} />

      <Workspace
        initialNodes={initNodes}
        initialEdges={initEdges}
        onDeployPipeline={deployPipeline}
      />
    </>
    }
    </>
  );
};

export default PipelineContainer;
