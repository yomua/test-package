import { notif } from './notif/notif';

import { getCryptoAddress } from './td.account';

import { AxiosRequestConfig } from 'axios';

function HydraxSDK(sdkConfig: SDKConfig) {
  return {
    queryCryptoAddress: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => getCryptoAddress(sdkConfig, options, errorHandler),
    getnotif: (
      options?: AxiosRequestConfig,
      errorHandler: ErrorHandler = () => null
    ) => notif(sdkConfig, options, errorHandler),
  };
}

export default HydraxSDK;
