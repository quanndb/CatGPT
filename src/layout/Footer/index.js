import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
function Footer() {
  const cx = classNames.bind(styles);
  return (
    <footer>
      <div className={cx("contact")}>
        <p>
          This site was created by{" "}
          <a href="https://github.com/quanndb" target="_blank" rel="noreferrer">
            quanndb
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
