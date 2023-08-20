import {appDispatch} from "../../Store";
import {useDispatch} from "react-redux";


export const useAppDispatch = () => useDispatch<appDispatch>()