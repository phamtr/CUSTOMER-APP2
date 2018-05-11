export interface Product{
    _id?: string | number,
    name?: string,
    description?: string,
    price?: number,
    currencies?: [{ type: string}],
    classifys?: [{ type: string}],
    productImage?: [{ type: string}],
    show?: boolean,
    inStock?: [{
        createdBy?: string,
        CreatedAt?: Date,
        quantity?: number,
        depart?: string
    }]
}
