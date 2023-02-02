import staticConfigs, { registeredAllowedConfigsNames } from "./staticConfigs";

class Config {

  // TODO: Need to think about how improve providing custom config based on the Default config.
  getStaticConfig(configName: registeredAllowedConfigsNames) {
    return staticConfigs[configName];
  }
}

export default Config;
