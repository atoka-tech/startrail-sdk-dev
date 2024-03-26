import type { Startrail } from "@startbahn/startrail-sdk-js";
import type {
  TLoginProviders,
  WalletType,
  AuthAction,
  StartrailEnv,
} from "@startbahn/startrail-sdk-js/types";

export interface Args {
  env: StartrailEnv;
  locale?: "ja" | "en";
  authAction?: AuthAction;
  wallet?: WalletType;
  loginProviders: TLoginProviders;
  withModal?: boolean;
}

export type Util = (args: Args) => Startrail;
