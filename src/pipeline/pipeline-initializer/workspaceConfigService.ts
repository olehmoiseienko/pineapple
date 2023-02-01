import {
  initNodes,
  initEdges,
  nodeTypeComponentMap,
  editPanelComponent, nodeCreator
} from "../pipeline-configs/default/index";
import type { WorkspaceConfig } from "./types";

interface Options {}

const defaultInitWorkspaceConfig: WorkspaceConfig = {
  initialNodes: initNodes,
  initialEdges: initEdges,
  nodeTypeComponentMap: nodeTypeComponentMap,
  editPanelComponent,
  nodeCreator: nodeCreator,
};

class WorkspaceConfigService {
  private options: {};

  constructor(options = {}) {
    this.options = options;
  }

  async getWorkspaceConfig(options?: Options): Promise<WorkspaceConfig> {
    await this._pause(1000);

    if (options) {
      // TODO: resolve way of getting custom data
      return { ...defaultInitWorkspaceConfig };
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
