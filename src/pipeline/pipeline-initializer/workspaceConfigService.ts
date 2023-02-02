import type { WorkspaceConfig, GetConfigOptions } from "./types";
import staticConfigs from "../pipeline-configs/staticConfigs";
import Config from "../pipeline-configs/Config";

const defaultConfig = staticConfigs.default;
const defaultInitWorkspaceConfig: WorkspaceConfig = {
  initialNodes: defaultConfig.initNodes,
  initialEdges: defaultConfig.initEdges,
  nodeTypeComponentMap: defaultConfig.nodeTypeComponentMap,
  editPanelComponent: defaultConfig.editPanelComponent,
  nodeCreator: defaultConfig.nodeCreator,
  pipelinePreferences: defaultConfig.pipelinePreferences,
};

class WorkspaceConfigService {
  private options: {};
  private config: Config;

  constructor(options = {}) {
    this.options = options;
    this.config = new Config();
  }

  async getWorkspaceConfig(
    options: GetConfigOptions
  ): Promise<WorkspaceConfig> {
    await this._pause(1000);

    if (options && options.configName) {
      const config = this.config.getStaticConfig(options.configName);
      const workspaceConfig: WorkspaceConfig = {
        initialNodes: config.initNodes,
        initialEdges: config.initEdges,
        nodeTypeComponentMap: config.nodeTypeComponentMap,
        editPanelComponent: config.editPanelComponent,
        nodeCreator: config.nodeCreator,
        pipelinePreferences: config.pipelinePreferences,
      };
      return { ...workspaceConfig } || { ...defaultInitWorkspaceConfig };
    }

    return { ...defaultInitWorkspaceConfig };
  }

  // Just for Demo purpose
  _pause(delay: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(null), delay);
    });
  }
}

export default WorkspaceConfigService;
