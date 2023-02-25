import { useContext } from "react";
import LastIndexContext from "./LastIndexContext";

function useLastIndex() {
    return useContext(LastIndexContext)
}

export default useLastIndex