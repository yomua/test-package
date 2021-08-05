
let globalSDKConfig: SDKConfig = {}

export const setSDKConfig = (sdkConfig: SDKConfig) => {
  globalSDKConfig = sdkConfig
}

export const getSDKConfig = () => globalSDKConfig;