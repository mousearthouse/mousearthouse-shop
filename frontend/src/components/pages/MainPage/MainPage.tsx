import { useCallback, useEffect, useState } from 'react';
import './mainPage.scss';
import ItemCard from '@/components/pages/ItemCard';
import getCategoryItems from '@/api/requests/getCategoryItems';


const CATEGORIES = [1, 2];


const MainPage = () => {
    
    const [itemData, setItemData] = useState<{ [key: string]: Item[] }>({});
    
    useEffect(() => {
        CATEGORIES.forEach((categoryId) => {
            getCategoryItems({
                categoryId,
                onDataLoaded: (categoryName, items) => {
                    setItemData((prev) => ({ ...prev, [categoryName]: items }));
                },
            });
        });
    }, []);

    console.log(itemData);

    return (
        <main>
            <div className='content'>
                <div className="name">ПРИКОЛЫ КОТОРЫЕ СЕЙЧАС В НАЛИЧИИ</div>
                {Object.entries(itemData).map(([categoryName, items]) => (
                    <div className="category_content" key={categoryName}>
                        <div className='category_name'>
                            <h2>{categoryName}</h2>
                        </div>
                        <div className="items_container">
                            {items.map((item) => (
                                <ItemCard item={item} key={item.id} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default MainPage;