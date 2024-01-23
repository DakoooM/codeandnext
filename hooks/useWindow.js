const { useEffect, useState } = require("react");

export default function useWindow() {
  const [windowObj, setWindowObj] = useState(undefined);

  useEffect(() => {
    setWindowObj({ innerWidth: window.innerWidth });
  }, []);

  return windowObj;
}