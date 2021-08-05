import request from '../utils/request';
import { AxiosRequestConfig } from 'axios';
interface SDKConfig extends AxiosRequestConfig {
  baseUrl?: string;
  user_id?: string;
  token?: string;
  company_id?: string;
  database?: string;
  usePublic?: boolean;
  url?: string;
}

 const getCryptoAddress = async (
  options?: SDKConfig,
  errorHandler?: ErrorHandler
) => {
  const { token = '', user_id = '', url = '', } = options;
  const opt = {
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


export {getCryptoAddress}