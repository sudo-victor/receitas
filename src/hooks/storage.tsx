import { useContext } from "react";

import { StorageContext } from "../contexts/StorageProvider";

export function useStorage() {
  return useContext(StorageContext);
}
