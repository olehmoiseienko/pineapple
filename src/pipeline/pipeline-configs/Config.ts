import staticConfigs, { registeredAllowedConfigsNames } from "./staticConfigs";

class Config {
  getStaticConfig(configName: registeredAllowedConfigsNames) {
    return staticConfigs[configName];
  }
}

export default Config;
