import { Startrail } from "@startbahn/startrail-sdk-js";
import type { StartrailEnv } from "@startbahn/startrail-sdk-js/types";
import type { Util } from "./types";

export const getStartrailSdkInstance: Util = ({
  env,
  locale = "ja",
  authAction = undefined,
  wallet = "startrail",
  loginProvider = undefined,
  withModal = false,
}) => {
  const sdk = new Startrail({
    authAction,
    wallet,
    env,
    lang: locale,
    apiPath:
      (env === "production"
        ? process.env.NEXT_PUBLIC_GOGH_API_HOSTNAME_PROD
        : process.env.NEXT_PUBLIC_GOGH_API_HOSTNAME_STG) + "/api/v1",
    auth0ClientId:
      env === "production"
        ? process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID_PROD
        : process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID_STG,
    auth0Domain:
      env === "production"
        ? process.env.NEXT_PUBLIC_AUTH0_DOMAIN_PROD
        : process.env.NEXT_PUBLIC_AUTH0_DOMAIN_STG,
    auth0TorusConfigKey:
      env === "production"
        ? process.env.NEXT_PUBLIC_AUTH0_TORUS_CONFIG_KEY_PROD
        : process.env.NEXT_PUBLIC_AUTH0_TORUS_CONFIG_KEY_STG,
    loginProvider: loginProvider ? [loginProvider] : undefined,
    withModal,
    // customUi: {
    //   logoUrl: "https://placehold.jp/150x150.png?text=Logo",
    //   logoWhiteUrl: "https://placehold.jp/fff/000/150x150.png?text=Logo",
    //   words: {
    //     ja: {
    //       emailAuthPopup: {
    //         titleLogin: "!titleLogin",
    //         titleSignup: "!titleSignup",
    //       },
    //       modal: {
    //         continueLogin: "!continueLogin",
    //         termsConditions: "!termsConditions",
    //         termsConditionsLinkUrl: "https://hoge.com/termsConditionsLinkUrl",
    //         privacyPolicyLinkUrl: "https://hoge.com/privacyPolocyLinkUrl",
    //       },
    //     },
    //     en: {
    //       emailAuthPopup: {
    //         titleLogin: "!titleLogin",
    //         titleSignup: "!titleSignup",
    //       },
    //       modal: {
    //         continueLogin: "!continueLogin",
    //         termsConditions: "!termsConditions",
    //         termsConditionsLinkUrl: "https://hoge.com/termsConditionsLinkUrl",
    //         privacyPolicyLinkUrl: "https://hoge.com/privacyPolocyLinkUrl",
    //       },
    //     },
    //   },
    //   contactUrl: "https://hoge.com/contact",
    //   serviceName: "hoge",
    // },
  });

  return sdk;
};
