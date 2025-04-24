interface Item {
    id: string,
    name: string,
    price: number,
    description: string,
    stock: number,
    category_id: string,
    photo_url: string,
}

interface Category {
    id: string,
    name: string,
}