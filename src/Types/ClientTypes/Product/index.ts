
export interface ProductState {
    product: dataB[],
    productListModal: boolean,
    productList: Partial<any>,
    productListCategory: string,
    productListModalCategory: boolean
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
    categoryJuices: any
}