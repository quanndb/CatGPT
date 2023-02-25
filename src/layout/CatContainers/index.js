import classNames from "classnames/bind"
import styles from "./CatContainers.module.scss"
import {catpic} from "../../img/index.js"
import meowSound from "../../sound/sound.mp3"
import { useEffect, useRef, useState } from "react"
import useTyping from "../../TypingContext/hooks"

function CatContainers(props){
    const cx = classNames.bind(styles)
    const times = useRef(Math.floor(10*Math.random()))
    let isTyping = useTyping()
    const [newCatMS, setNewCatMS] = useState("")
    const audio = new Audio(meowSound)
    if(times.current>0){
        times.current-=1
        setTimeout(()=>{
            audio.play()
        },500)
    }

    useEffect(()=>{
        setTimeout(()=>{
            setNewCatMS(pre=>pre+" meow")
        },500)
        if(times.current===0) setTimeout(()=>{
            setNewCatMS(pre=>pre+".")
            isTyping.current = false
        },1000)
    },
    // eslint-disable-next-line
    [times.current])

    return(
        <div className={cx('cat')}>
                        <div className={cx("mescontainer")}>
                            <img src={catpic} alt={'cat'} className={cx("avata")}></img>
                            <p>{props.message || newCatMS}</p>
                        </div>
        </div>
    )
}
export default CatContainers