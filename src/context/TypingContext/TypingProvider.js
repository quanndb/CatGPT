import { useState } from "react";
import TypingContext from "./TypingContext";

function TypingProvider({ children }) {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <TypingContext.Provider value={{ isTyping, setIsTyping }}>
      {children}
    </TypingContext.Provider>
  );
}

export default TypingProvider;
