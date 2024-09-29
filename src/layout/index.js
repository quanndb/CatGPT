import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import ChatBox from "./ChatBox";
import Header from "./Header";
import Control from "./Control";
import Footer from "./Footer";

function DefaultLayout() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <Header />
      <ChatBox />
      <Control />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
