import { instance } from "@/api/instance";

interface ItemApiProps {
    onDataLoaded?: (data: Item) => void;
}

export interface ApiResponse {
    item: Item;
}

const getItemById = async (itemId: number, { onDataLoaded }: ItemApiProps) => {
    const response = await instance.get<ApiResponse>(`/api/item/${itemId}`);
    if (onDataLoaded) {
        onDataLoaded(response.data.item);
        console.log("Item:", response.data.item);
    }
}

export default getItemById