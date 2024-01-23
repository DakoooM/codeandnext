import { useCallback, useEffect, useState } from "react";

const useCopyToClipboard = (
  text,
  notify = 2.5,
) => {
  const [copyStatus, setCopyStatus] = useState("inactive");

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus("copied"),
      () => setCopyStatus("failed"),
    )
  }, [text]);

  useEffect(() => {
    if (copyStatus === "inactive") {
      return
    }

    const timeoutId = setTimeout(() => setCopyStatus("inactive"), Math.floor(notify * 1000));

    return () => clearTimeout(timeoutId)
  }, [copyStatus])

  return [copyStatus, copy]
}

export default useCopyToClipboard;