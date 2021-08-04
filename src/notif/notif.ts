import request from "../../src/utils/request";
import { SDKConfig, ErrorHandler } from "../../src/index.d";
export async function notif(
  url:string,
  options: any,
  user_id:string,
  errorHandler?: ErrorHandler
) {

  const cond = [["user_id", "=", user_id]];
  const fields = ["time", "title", "state", "data"];
  const params = ["notif", "search_read_path", 
  [cond, fields], 
  {order: "time desc",count: true,
    limit:10,
    offset:10,
  }]

  options.body = JSON.stringify(
    {
        id: new Date().getTime(),
        method: 'execute',
        params
    }
  )

  const response = await request(url, options);
  
  return response;
}
