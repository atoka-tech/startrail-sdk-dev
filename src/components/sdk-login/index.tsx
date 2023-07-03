"use client";

import { useState } from "react";
import { getStartrailSdkInstance } from "@/utils/get-startrail-sdk-instance";
import { Props } from "./types";

export default function SdkLogin({ authAction, loginProvider }: Props) {
  const [sdk, setSdk] = useState<ReturnType<
    typeof getStartrailSdkInstance
  > | null>(null);
  const [eoa, setEOA] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    const ins = getStartrailSdkInstance({ authAction, loginProvider });

    setLoading(true);

    const res = await ins.login().catch(({ errorCode }) => {
      console.log("errorCode", errorCode);
    });

    if (!Array.isArray(res) || typeof res[0] !== "string") {
      console.log("ログインエラー");
      setLoading(false);

      return;
    }

    setEOA(res[0]);
    setSdk(ins);
    setLoading(false);
  };

  const logout = async () => {
    if (!sdk) return;

    await sdk.logout();

    setEOA("");
    setSdk(null);
  };

  const getLabel = () => {
    const authActionLabel = authAction
      ? `[authAction] login: ${authAction.login}, signup: ${authAction.signup}`
      : "[authAction] 指定なし";
    const loginProviderLabel = loginProvider
      ? `[loginProvider] ${loginProvider}`
      : "[loginProvider] 指定なし";

    return `${authActionLabel}  ${loginProviderLabel}`;
  };

  return (
    <div className="relative border grid gap-2 p-4">
      <button className="button" onClick={login}>
        {getLabel()}
      </button>

      <p>eoa: {eoa || "-"}</p>

      {eoa && sdk && (
        <button className="button-secondary" onClick={logout}>
          Logout
        </button>
      )}

      {loading && (
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-70"></div>
      )}
    </div>
  );
}
