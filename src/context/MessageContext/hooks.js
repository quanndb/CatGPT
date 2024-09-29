import MessageContext from "./MessageContext";
import { useContext } from "react";

function useMessage() {
  return useContext(MessageContext);
}

export default useMessage;
