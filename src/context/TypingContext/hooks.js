import TypingContext from "./TypingContext";
import { useContext } from "react";

function useTyping() {
  return useContext(TypingContext);
}
export default useTyping;
