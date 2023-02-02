import PaletteService from "./paletteService";
import WorkspaceConfigService from "./workspaceConfigService";
import type {
  PipelineConfig,
  InitializerOptions,
  GetConfigOptions,
} from "./types";

class PipelineInitializer {
  private options: {};
  private paletteService: PaletteService;
  private workspaceService: WorkspaceConfigService;

  constructor(options: InitializerOptions = {}) {
    this.options = options;
    this.paletteService = new PaletteService();
    this.workspaceService = new WorkspaceConfigService();
  }

  async getPipelineConfig(options: GetConfigOptions): Promise<PipelineConfig> {
    const paletteNodes = await this.paletteService.getPaletteData(options);
    const workspaceConfig = await this.workspaceService.getWorkspaceConfig(
      options
    );

    return {
      paletteNodes,
      workspaceConfig,
    };
  }
}

export default PipelineInitializer;
