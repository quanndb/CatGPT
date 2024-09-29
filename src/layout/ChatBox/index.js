import classNames from "classnames/bind";
import styles from "./ChatBox.module.scss";
import UserContainers from "../UserContainers";
import CatContainers from "../CatContainers";
import { useEffect, useRef } from "react";
import useMessage from "../../context/MessageContext/hooks";

function ChatBox() {
  const cx = classNames.bind(styles);
  const scrollRef = useRef();
  const { listMessage } = useMessage();

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [listMessage]);

  return (
    <div className={cx("wrapper")} ref={scrollRef}>
      {listMessage.map((item, index) => {
        const Row = item.who === "user" ? UserContainers : CatContainers;
        return <Row key={index} message={item.message} dataID={index} />;
      })}
    </div>
  );
}

export default ChatBox;
