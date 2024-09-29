import classNames from "classnames/bind";
import styles from "./Control.module.scss";
import { useState } from "react";
import useMessage from "../../context/MessageContext/hooks";
import useTyping from "../../context/TypingContext/hooks";

function Control() {
  const cx = classNames.bind(styles);
  const [message, setMessage] = useState("");
  const { isTyping, setIsTyping } = useTyping();
  const { setListMessage } = useMessage();

  const handleReset = () => {
    setListMessage([]);
    setMessage("");
    setIsTyping(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (message !== "" && isTyping === false) {
      setListMessage((pre) => [
        ...pre,
        { who: "user", message: message },
        { who: "cat", message: "" },
      ]);
      setMessage("");
      setIsTyping(true);
    }
  };

  return (
    <div className={cx("message")}>
      <form onSubmit={handleSend}>
        <div className={cx("icon")} onClick={handleReset}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18,24H0V6h6v2H2v14h14v-4H6V0h18v18h-6V24z M8,16h14V2H8V16z M16,13h-2v-3h-3V8h3V5h2v3h3v2h-3V13z"
            ></path>
          </svg>
        </div>
        <input
          name="data"
          placeholder="Type your message here"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className={cx("icon")} onClick={handleSend}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
            ></path>
          </svg>
        </div>
      </form>
    </div>
  );
}
export default Control;
