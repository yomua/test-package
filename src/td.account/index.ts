import { ErrorHandler, SDKConfig } from '../index.d';
import request from '../utils/request';

// options not require, should set default value in request.ts

export const getCryptoAddress = async (
  options?: SDKConfig,
  errorHandler?: ErrorHandler
) => {
  const {
    token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzMDI3NmUwMGQ4ODA3MjkxM2I0NTIiLCJkYiI6Im5mb19haXJjYXJib24iLCJpYXQiOjE2MjgwNTc5MTl9.h3aQwXhgNLHNzRpCYCIJum-kyAXMXAAFK0rYjCgb3MM',
    user_id = 's0276e00d88ƒ072913b452',
    url,
  } = options;
  const opt = {
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
