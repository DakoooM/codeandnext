import { signInWithPopup } from "firebase/auth";
import { auth, facebook_provider, github_provider, google_provider } from "./firebase";
import { useCallback, useState } from "react";

const services = {
  "google": google_provider,
  "github": github_provider,
  "facebook": facebook_provider
};

export function useAuth() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const execute = useCallback(async (service = "google") => {
    try {
      setLoading(true);
      const data = await signInWithPopup(auth, services[service]);
      console.log(`You have signed to ${service} and data is:`, data);
      setData(data);
      setLoading(false);
    } catch(error) {
      setLoading(true);
      console.error(`I have Error on login to service: ${service}, errorData:`, error);
      setError(error);
      setLoading(false);
    }
  }, []);

  return [execute, isLoading, data, error];
}