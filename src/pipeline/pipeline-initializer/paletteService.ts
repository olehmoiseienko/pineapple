import staticConfigs from "../pipeline-configs/staticConfigs";
import Config from "../pipeline-configs/Config";
import type { PaletteNodes, GetConfigOptions } from "./types";

const defaultInitPaletteNodes: PaletteNodes = staticConfigs.default;

class PaletteService {
  private options: {};
  private config: Config;

  constructor(options = {}) {
    this.options = options;
    this.config = new Config();
  }

  async getPaletteData(options: GetConfigOptions): Promise<PaletteNodes> {
    await this._pause(1000);

    if (options && options.configName) {
      const config = this.config.getStaticConfig(options.configName);
      const paletteNodes: PaletteNodes = config.paletteNodes;
      return paletteNodes || defaultInitPaletteNodes;
    }

    return defaultInitPaletteNodes;
  }

  // Just for Demo purpose
  _pause(delay: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(null), delay);
    });
  }
}

export default PaletteService;

// TODO: use in validation
// type SupportedNodeTypes = keyof typeof  nodeTypeComponentMap
// interface CurrentPaletteNode extends Omit<BasePaletteNode, "type"> {
//   type: SupportedNodeTypes;
// }
