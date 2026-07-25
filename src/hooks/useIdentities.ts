import { useEffect, useState } from "react";
import {
    loadIdentities,
    saveIdentities,
} from "../services/storage";

export type Identity = {
  id: string;
  title: string;
  stage: string;
  votes: number;
};

export function useIdentities() {
  const [identities, setIdentities] = useState<Identity[]>([]);

  useEffect(() => {
    async function fetchIdentities() {
      const saved = await loadIdentities();

      if (saved.length > 0) {
        setIdentities(saved);
      }
    }

    fetchIdentities();
  }, []);

  useEffect(() => {
    saveIdentities(identities);
  }, [identities]);

  return {
    identities,
    setIdentities,
  };
}