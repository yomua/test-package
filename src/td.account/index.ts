import request from '../utils/request';
import { AxiosRequestConfig } from "axios";

import { getSDKConfig } from "../utils/setSDKConfig";

const getCryptoAddress = async (
  sdkConfig: SDKConfig,
  _: AxiosRequestConfig,
  errorHandler: ErrorHandler
) => {
  const { token = '', user_id = '', url = '', } = sdkConfig;
  // setSDKConfig(sdkConfig);
  // const config = getSDKConfig()

  const opt: AxiosRequestConfig = {
    method: 'POST',
    data: {
      id: Date.now(),
      method: 'execute',
      params: [
        'td.account',
        'search_read_path',
        [['user_id', '=', user_id], ['crypto_addr']],
        {},
        {
          user_id: user_id,
          token: token,
        },
      ],
    },
  };
  const data = await request(url, opt, errorHandler);
  return data;
};

// const getBalances = user_id => rpc_execute('td.account', 'get_balances', [], { user_id })

const test = () => getSDKConfig()

export { getCryptoAddress, test }