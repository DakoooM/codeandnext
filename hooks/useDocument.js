const { useEffect, useState } = require("react");

export default function useDocument() {
  const [documentObj, setDocumentObj] = useState(undefined);

  useEffect(() => {
    setDocumentObj({ body: document.body });
  }, []);

  return documentObj;
}