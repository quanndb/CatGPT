import LastIndexContext from "./LastIndexContext";
import useMessage from "../MessageContext/hooks";

function LastIndexProvider ({children}){

    let lastIndexMessage = useMessage()[0].length

    return (
        <LastIndexContext.Provider value={lastIndexMessage}>
            {children}
        </LastIndexContext.Provider>
    )
}

export default LastIndexProvider