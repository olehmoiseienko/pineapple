import React, { useEffect, useState } from "react";
import Workspace from "./workspace/Workspace";
import PaletteSidebar from "./palette-sidebar/PaletteSidebar";
import { StyledProgress } from "./styled/StyledProgress";
import PipelineInitializer from "./pipeline-initializer/pipelineInitializer";
import exportData from "./utils/downloadFile";
import type { PipelineConfig } from "./pipeline-initializer/types";
import {DeployedPipeline} from "./models/DeployedPipeline";


const PipelineContainer = () => {
  const [initialized, setInitialized] = useState<any>(false);
  const [initializationConfigError, setInitializationConfigError] =
    useState<any>(null);

  const [pipelineConfig, setPipelineConfig] = useState<PipelineConfig | null>(
    null
  );

  useEffect(() => {
    initPipeline();
  }, []);

  const initPipeline = async () => {
    try {
      const pipelineInitializer = new PipelineInitializer();
      const pipelineConfig: PipelineConfig =
        await pipelineInitializer.getPipelineConfig();

      // TODO: add config validation here
      if (!pipelineConfig) {
        throw new Error("Config is missing :-(");
      }

      setPipelineConfig(pipelineConfig);
      setInitialized(true);
    } catch (e) {
      setInitializationConfigError(e);
    }
  };


  const deployPipeline = (pipeline: DeployedPipeline): void => {
    console.log(pipeline);
    exportData(pipeline);
  };

  return (
    <>
      {initializationConfigError && (
        <StyledProgress>Pipeline config is missing :-( </StyledProgress>
      )}
      {!initialized && !initializationConfigError && (
        <StyledProgress>Workspace initialization...</StyledProgress>
      )}
      {initialized && pipelineConfig && (
        <>
          <PaletteSidebar paletteNodes={pipelineConfig.paletteNodes} />

          <Workspace
            workspaceConfig={pipelineConfig.workspaceConfig}
            onDeployPipeline={deployPipeline}
          />
        </>
      )}
    </>
  );
};

export default PipelineContainer;
