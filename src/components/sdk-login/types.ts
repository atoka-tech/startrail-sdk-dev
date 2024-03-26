import { Args } from "@/utils/get-startrail-sdk-instance/types";

export interface Props {
  name: string;
  wallet?: Args["wallet"];
  authAction?: Args["authAction"];
  loginProviders?: Args["loginProviders"];
  withModal?: Args["withModal"];
}
