import { useCallback, useEffect, useState } from 'react';
import './mainPage.scss';
import ItemCard from './ItemCard';
import getCategoryItems from '@/api/requests/getCategoryItems';

const MainPage = () => {
    
    const [itemData, setItemData] = useState<Item[]>([]);

    const handleDataLoading = useCallback((data: Item[]) => {
        setItemData(data);
    }, []);

    useEffect(() => {
        getCategoryItems({ onDataLoaded: handleDataLoading });
    }, [handleDataLoading]);

    console.log(itemData);

    return (
        <main>
            <div className='content'>
                <div className='name'>
                    ПРИКОЛЫ КОТОРЫЕ СЕЙЧАС В НАЛИЧИИ
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

export default MainPage;