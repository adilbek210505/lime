
export interface ProductState {
    product: dataB[]
}

export type dataB = {
    id: number
    title: string
    price: number
    kg: number
    img: any
    quantity: number
    description: string
    liter: string | number
    category: string
}