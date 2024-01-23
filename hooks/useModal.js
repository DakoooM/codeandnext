import { useCallback } from "react";
import { setGlobalState } from "./useGlobalState";

export function useModal() {
  const show = useCallback(bool => {
    setGlobalState("showModal", bool);
  }, []);

  const content = useCallback(_ctn => {
    setGlobalState("modalContent", _ctn);
  }, []);

  const infos = useCallback((bool, _ctn) => {
    setGlobalState("modalContent", _ctn);
    setGlobalState("showModal", bool);
  }, []);

  return { show, content, infos };
}