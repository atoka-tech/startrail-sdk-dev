"use client";

import type { ChangeEvent } from "react";
import { useEnvStore } from "@/stores/env";
import { StartrailEnv } from "@startbahn/startrail-sdk-js/types";

export default function EnvSwitcher() {
  const setEnv = useEnvStore((state) => state.setEnv);
  const env = useEnvStore((state) => state.env);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (["staging", "production"].includes(value)) {
      setEnv(value as StartrailEnv);
    }
  };

  return (
    <div className="flex gap-4 my-10">
      <label className="flex gap-2">
        <input
          type="radio"
          value="staging"
          checked={env === "staging"}
          onChange={onChange}
        />
        <span>staging</span>
      </label>

      <label className="flex gap-2">
        <input
          type="radio"
          value="production"
          checked={env === "production"}
          onChange={onChange}
        />
        <span>production</span>
      </label>
    </div>
  );
}
