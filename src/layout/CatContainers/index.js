import classNames from "classnames/bind";
import styles from "./CatContainers.module.scss";
import meowSound from "../../sound/sound.mp3";
import { useEffect, useMemo, useState } from "react";
import useTyping from "../../context/TypingContext/hooks";
import catPic from "../../img/cat.png";

function CatContainers(props) {
  const [newCatMS, setNewCatMS] = useState([]);
  const { setIsTyping } = useTyping();
  const cx = classNames.bind(styles);
  const audio = new Audio(meowSound);
  const times = useMemo(() => {
    return Math.floor(Math.random() * 10) + 1;
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (newCatMS.length < times) {
        setNewCatMS((prev) => [...prev, " meow"]);
        audio.play();
      } else if (newCatMS.length === times) {
        setNewCatMS((prev) => [...prev, "."]);
        setIsTyping(false);
      }
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
    // eslint-disable-next-line
  }, [newCatMS]);

  return (
    <div className={cx("cat")}>
      <div className={cx("mescontainer")}>
        <img src={catPic} alt={"cat"} className={cx("avata")} />
        <p className={cx("message")}>{props.message || newCatMS.join("")}</p>
      </div>
    </div>
  );
}
export default CatContainers;
