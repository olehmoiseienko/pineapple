// This is the place where a new config should be registered

export enum registeredAllowedConfigsNames {
  DEFAULT = "default",
  DEMO_CUSTOM_OVERRIDDEN = "customConfigExample",
}

const staticConfigs = {
  [registeredAllowedConfigsNames.DEFAULT]: require("./default"),
  [registeredAllowedConfigsNames.DEMO_CUSTOM_OVERRIDDEN]: require("./custom-config-example"),
};

export default staticConfigs;
