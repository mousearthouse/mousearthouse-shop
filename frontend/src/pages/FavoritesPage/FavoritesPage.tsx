import { useCallback, useEffect, useState } from 'react';
import './favoritesPage.scss';
import ItemCard from '@/components/ItemCard';
import getFavoriteItems from '@/api/requests/getFavoriteItems';

const FavoritesPage = () => {
    
    const [itemData, setItemData] = useState<Item[]>([]);

    const handleDataLoading = useCallback((data: Item[]) => {
        setItemData(data);
    }, []);

    const getFavoritesData = () => {
        const favoritesData = localStorage.getItem('favorite_items');
        if (favoritesData) {
            const favoriteIds = JSON.parse(favoritesData);
            return favoriteIds;
        }
        return [];
    }

    useEffect(() => {
        const favoritesData = getFavoritesData();
        console.log(favoritesData)
        getFavoriteItems({ ids: favoritesData, onDataLoaded: handleDataLoading });
    }, [handleDataLoading]);

    return (
        <main>
            <div className='favorites_content'>
                <div className='name'>
                    <h2>Избранное</h2>
                </div>
                <div className='items_container'>
                    {itemData.map((item) => (
                        <ItemCard item={item} key={item.id}/>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default FavoritesPage;