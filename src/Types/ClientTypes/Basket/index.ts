import {dataB} from "../Product";


export interface BasketState {
    basket: dataB[]
    basketModal: boolean
    basketDetail: Partial<dataB>
    basketDetailModal: boolean
}