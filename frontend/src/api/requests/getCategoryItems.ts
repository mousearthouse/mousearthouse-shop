import { instance } from "@/api/instance";

interface CardsApiProps {
    onDataLoaded?: (data: Item[]) => void;
}

export interface ApiResponse {
    items: Item[];
}

const getCategoryItems = async ({ onDataLoaded }: CardsApiProps) => {
    const response = await instance.get<ApiResponse>(`/api/category/1/items`);
    console.log("Ответ сервера:", response.data);
    if (onDataLoaded) {
        onDataLoaded(response.data.items);
        console.log("Items:", response.data.items);
    }
}

export default getCategoryItems
