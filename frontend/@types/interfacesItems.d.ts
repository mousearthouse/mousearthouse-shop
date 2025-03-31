interface Item {
    id: string,
    name: string,
    price: number,
    description: string,
    stock: number,
    category_id: string,
}

interface Category {
    id: string,
    name: string,
}