import type { StartrailEnv } from "@startbahn/startrail-sdk-js/types";
import { create } from "zustand";

interface EnvState {
  env: StartrailEnv;
  setEnv: (env: StartrailEnv) => void;
}

export const useEnvStore = create<EnvState>()((set) => ({
  env: "staging",
  setEnv: (env) => set(() => ({ env })),
}));
