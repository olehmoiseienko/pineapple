// This is the place where a new config should be registered

export enum registeredAllowedConfigsNames {
  DEFAULT = "default",
  DEMO_CUSTOM_OVERRIDDEN = "customConfigExample",
  PINEAPPLE_EXAMPLE = "pineappleExample",
}

const staticConfigs = {
  [registeredAllowedConfigsNames.DEFAULT]: require("./default"),
  [registeredAllowedConfigsNames.DEMO_CUSTOM_OVERRIDDEN]: require("./custom-config-example"),
  [registeredAllowedConfigsNames.PINEAPPLE_EXAMPLE]: require("./pineapple-example"),
};

export default staticConfigs;
