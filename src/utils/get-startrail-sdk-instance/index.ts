import { Startrail } from "@startbahn/startrail-sdk-js";
import type { StartrailEnv } from "@startbahn/startrail-sdk-js/types";
import type { Util } from "./types";

export const getStartrailSdkInstance: Util = ({
  locale,
  authAction,
  callbackUrl,
  wallet = "startrail",
  loginProvider = "email_password",
}) => {
  const {
    NEXT_PUBLIC_GOGH_API_HOSTNAME,
    NEXT_PUBLIC_STARTRAIL_ENV,
    NEXT_PUBLIC_AUTH0_CLIENT_ID,
    NEXT_PUBLIC_AUTH0_DOMAIN,
    NEXT_PUBLIC_AUTH0_TORUS_CONFIG_KEY,
  } = process.env;

  const sdk = new Startrail({
    authAction,
    wallet,
    env: NEXT_PUBLIC_STARTRAIL_ENV as StartrailEnv,
    lang: locale,
    apiPath: NEXT_PUBLIC_GOGH_API_HOSTNAME + "/api/v1",
    auth0ClientId: NEXT_PUBLIC_AUTH0_CLIENT_ID,
    auth0Domain: NEXT_PUBLIC_AUTH0_DOMAIN,
    auth0TorusConfigKey: NEXT_PUBLIC_AUTH0_TORUS_CONFIG_KEY,
    loginProvider,
    callbackUrl,
  });

  return sdk;
};
