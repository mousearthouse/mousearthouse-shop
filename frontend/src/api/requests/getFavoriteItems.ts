import { instance } from '@/api/instance';

interface FavoritesApiProps {
    ids: number[];
    onDataLoaded?: (data: Item[]) => void;
}

export interface ApiResponse {
    items: Item[];
}


const getFavoriteItems = async ({ ids, onDataLoaded }: FavoritesApiProps) => {
    if (ids.length === 0) {
        onDataLoaded?.([]);
        return;
    }

    try {
        console.log(ids)
        const response = await instance.post<ApiResponse>('/api/favorites', { ids });
        console.log("Ответ сервера:", response.data);
        
        if (onDataLoaded) {
            onDataLoaded(response.data.items);
            console.log("Items:", response.data.items);
        }
    } catch (error) {
        console.error("Ошибка при загрузке избранных товаров:", error);
    }
};


export default getFavoriteItems;