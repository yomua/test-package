import { ErrorHandler } from "../index.d";
import request from "../utils/request";
import { AxiosRequestConfig } from "axios";

type IParams = {
  url: string,
  token: string,
  user_id: string,
  options: AxiosRequestConfig | any,
  errorHandler?: ErrorHandler | any,
}

// options not require, should set default value in request.ts 

const getCryptoAddress = (params: IParams) => {
  const { token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzMDI3NmUwMGQ4ODA3MjkxM2I0NTIiLCJkYiI6Im5mb19haXJjYXJib24iLCJpYXQiOjE2MjgwNTc5MTl9.h3aQwXhgNLHNzRpCYCIJum-kyAXMXAAFK0rYjCgb3MM', user_id = 's0276e00d88072913b452' } = params
  const defaultOptions = {
    method: 'POST',
    data: {
      "id": 1628057922167,
      "method": "execute",
      "params": [
        "td.account",
        "search_read_path",
        [
          [
            "user_id",
            "=",
            user_id
          ],
          [
            "crypto_addr"
          ]
        ],
        {},
        {
          "user_id": user_id,
          "token": token,
        }
      ]
    },
  }
  const { url, options = defaultOptions, errorHandler } = params
  const data = request(url, options, errorHandler)
  return data
}

export { getCryptoAddress };