import { useState } from "react";
import MessageContext from "./MessageContext";

function MessageProdiver({ children }) {
  const [listMessage, setListMessage] = useState([]);

  return (
    <MessageContext.Provider value={{ listMessage, setListMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export default MessageProdiver;
