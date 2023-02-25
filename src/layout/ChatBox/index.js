import classNames from "classnames/bind"
import styles from "./ChatBox.module.scss"
import UserContainers from "../UserContainers"
import CatContainers from "../CatContainers"
import useMessage from "../../MessageContext/hooks"
import { useEffect, useRef } from "react"

function ChatBox(){
    const cx=classNames.bind(styles)
    const scrollRef = useRef()
    const [listMessage, 
    // eslint-disable-next-line
    setListMessage] 
    = useMessage()

    useEffect(()=>{
        scrollRef.current.scrollTop=scrollRef.current.scrollHeight
    },[listMessage.length])

    return(
        <div className={cx("wrapper")} ref={scrollRef}>
            {
                listMessage.map((item,index)=>{
                    const Row = item.who==="user"? UserContainers:CatContainers
                    return <Row key={index} message={item.message} dataID={index}/>
                })
            }
        </div>
    )
}

export default ChatBox