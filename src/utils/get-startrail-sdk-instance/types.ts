import type { Startrail } from "@startbahn/startrail-sdk-js";
import type {
  LoginProvider,
  WalletType,
  AuthAction,
} from "@startbahn/startrail-sdk-js/types";

export interface Args {
  locale?: "ja" | "en";
  authAction?: AuthAction;
  wallet?: WalletType;
  loginProvider?: LoginProvider;
  withModal?: boolean;
}

export type Util = (args: Args) => Startrail;
