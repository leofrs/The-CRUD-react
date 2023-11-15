import { useRef } from "react";

const useRefCustom = () => {
  const refTitle = useRef();
  const refDescription = useRef();
  const refCover = useRef();

  return { refTitle, refDescription, refCover };
};

export default useRefCustom;
