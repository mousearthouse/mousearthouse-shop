import { instance } from "@/api/instance";

interface CardsApiProps {
    categoryId: number;
    onDataLoaded?: (categoryName: string, items: Item[]) => void;
}

export interface ApiResponse {
    categoryName: string;
    items: Item[];
}

const getCategoryItems = async ({ categoryId, onDataLoaded }: CardsApiProps) => {
    try {
        const response = await instance.get<ApiResponse>(`/api/category/${categoryId}/items`);
        console.log("Ответ сервера:", response.data);
        
        if (onDataLoaded) {
            onDataLoaded(response.data.categoryName, response.data.items);
            console.log("Items:", response.data.items);
            console.log("Category name:", response.data.categoryName);
        }
    } catch (error) {
        console.error("Ошибка при загрузке товаров категории:", error);
    }
};

export default getCategoryItems;
