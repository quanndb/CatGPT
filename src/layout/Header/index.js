import classNames from "classnames/bind"
import styles from "./Header.module.scss"

function Header(){
    const cx = classNames.bind(styles)
    return(
        <div className={cx('header')}>
            <h1>CatGPT</h1>
            <p>What if ChatGPT was a cat?</p>
        </div>
    )
}
export default Header