import { Args } from "@/utils/get-startrail-sdk-instance/types";

export interface Props {
  name: string;
  authAction?: Args["authAction"];
  loginProvider?: Args["loginProvider"];
  withModal?: Args["withModal"];
}
