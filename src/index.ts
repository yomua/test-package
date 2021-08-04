export * from './lib/number';
<<<<<<< HEAD
function a() {
  return '111';
}

export default a;
=======
import { getCryptoAddress } from "./td.account";
import { ErrorHandler } from "./index.d";
import { notif } from "./notif/notif";

function HydraxSDK(url: string, token: string, user_id: string) {
  return {
    getCryptoAddress: (options?: any, errorHandler?: ErrorHandler) => getCryptoAddress({ url, token, user_id, options, errorHandler }),
    getnotif: () => notif(url, token, user_id)
  };
}

export default HydraxSDK;
>>>>>>> b4888869e88ffcba4f3d38963634abf689e4b772
