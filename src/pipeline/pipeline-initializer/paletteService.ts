import { paletteNodes } from "../pipeline-configs/default/index";

import type { PaletteNodes } from "./types";

interface Options {}

const defaultInitPaletteNodes: PaletteNodes = paletteNodes;

class PaletteService {
  private options: {};

  constructor(options = {}) {
    this.options = options;
  }

  async getPaletteData(options?: Options): Promise<PaletteNodes> {
    await this._pause(1000);

    if (options) {
      // TODO: resolve way of getting custom data
      return defaultInitPaletteNodes;
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
