import classNames from "classnames/bind";
import styles from "./UserContainers.module.scss";
import userPic from "../../img/user.png";

function UserContainers({ message }) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("user")}>
      <div className={cx("mescontainer")}>
        <img src={userPic} alt="userpic" className={cx("avata")}></img>
        <p>{message}</p>
      </div>
    </div>
  );
}
export default UserContainers;
