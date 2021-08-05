import { notif } from './notif/notif';

import { getCryptoAddress, test } from './td.account';

import { AxiosRequestConfig } from 'axios';

import { setSDKConfig } from "./utils/setSDKConfig";

function HydraxSDK(sdkConfig: SDKConfig) {

  setSDKConfig(sdkConfig)
  return {
    getCryptoAddress: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => getCryptoAddress(sdkConfig, options, errorHandler),
    getnotif: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => notif(sdkConfig, options, errorHandler),

    test: () => test()
  };
}

export default HydraxSDK;
