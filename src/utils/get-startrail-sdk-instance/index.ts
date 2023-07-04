import { Startrail } from "@startbahn/startrail-sdk-js";
import type { StartrailEnv } from "@startbahn/startrail-sdk-js/types";
import type { Util } from "./types";

export const getStartrailSdkInstance: Util = ({
  locale = "ja",
  authAction = undefined,
  wallet = "startrail",
  loginProvider = undefined,
  withModal = false,
}) => {
  const sdk = new Startrail({
    authAction,
    wallet,
    env: process.env.NEXT_PUBLIC_STARTRAIL_ENV as StartrailEnv,
    lang: locale,
    apiPath: process.env.NEXT_PUBLIC_GOGH_API_HOSTNAME + "/api/v1",
    auth0ClientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
    auth0Domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    auth0TorusConfigKey: process.env.NEXT_PUBLIC_AUTH0_TORUS_CONFIG_KEY,
    loginProvider,
    withModal,
  });

  return sdk;
};
