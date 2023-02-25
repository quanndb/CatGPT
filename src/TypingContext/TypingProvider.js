import { useRef } from "react";
import TypingContext from "./TypingContext";

function TypingProvider({children}){

    let isTyping = useRef(false)

    return (
        <TypingContext.Provider value={isTyping}>
            {children}
        </TypingContext.Provider>
    )
}

export default TypingProvider