export * from './lib/number';
import { getCryptoAddress } from "./td.account";
import { ErrorHandler, SDKConfig } from "./index.d";


function HydraxSDK(url: string, token: string, user_id: string) {
  return {
    getCryptoAddress: (options?: SDKConfig, errorHandler?: ErrorHandler) => getCryptoAddress({ url, token, user_id, options, errorHandler })
  };
}

export default HydraxSDK;
