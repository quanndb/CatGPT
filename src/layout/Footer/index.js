import classNames from "classnames/bind"
import styles from "./Footer.module.scss"
function Footer(){
    const cx = classNames.bind(styles)
    return (
        <footer>
                <div className={cx('contact')}>
                    <p>This site was created by <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>quanndb</a></p>
                </div>
        </footer>
    )
}

export default Footer