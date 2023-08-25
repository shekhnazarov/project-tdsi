import { useId } from "react";

export const useUniqueId = () => {
  let id = useId();
  return id;
};

export default useUniqueId;
