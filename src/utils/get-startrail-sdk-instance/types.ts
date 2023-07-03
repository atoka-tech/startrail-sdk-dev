import type { Startrail } from "@startbahn/startrail-sdk-js";
import type {
  LoginProvider,
  WalletType,
  AuthAction,
} from "@startbahn/startrail-sdk-js/types";

interface Args {
  locale: "ja" | "en";
  authAction: AuthAction;
  callbackUrl?: string;
  wallet?: WalletType;
  loginProvider?: LoginProvider;
}

export type Util = (args: Args) => Startrail;
