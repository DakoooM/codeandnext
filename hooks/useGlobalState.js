import { GlobalStatesDefault } from "@/config";
import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState  } = createGlobalState(GlobalStatesDefault);

export { useGlobalState, setGlobalState };