export * from './lib/number';
import { queryPair } from "./pair";
import { SDKConfig, ErrorHandler, OtherParams } from "./index.d";
import request from "./utils/request";


function HydraxSDK(url: string, token: string, user_id: string) {
  return {
    queryPair: queryPair,
  };
}

export default HydraxSDK;
