import { instance } from "@/api/instance";

interface CategoriesApiProps {
    onDataLoaded?: (categories: Category[]) => void;
}

export interface ApiResponse {
    categories: Category[];
}

const getCategories = async ({ onDataLoaded }: CategoriesApiProps) => {
    try {
        const response = await instance.get<ApiResponse>(`/api/category/`);
        
        if (onDataLoaded) {
            onDataLoaded(response.data.categories);
        }
    } catch (error) {
        console.error("Ошибка при загрузке категорий:", error);
    }
};

export default getCategories;
