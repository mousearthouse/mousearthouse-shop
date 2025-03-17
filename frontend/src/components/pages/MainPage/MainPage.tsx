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
                <div className='t-mouse'>
                    <div className='t-polina'>
                        <p>Это мышь, которая была в Т-банке.</p>
                        <p>Ее сделала я. Меня зовут Полина, и я тоже хочу попасть в крутую компанию!</p>
                        <p>Подробнее обо мне можно узнать тут:</p>
                        <a href="https://github.com/mousearthouse" target="_blank">GitHub</a>
                        <p>Ну а пока я учусь и шью мышек и другие приколы 🎀</p>
                    </div>
                    <img
                        src="./public/images/mouse2.png"
                        alt="new"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="name">
                    <h3>ПРИКОЛЫ, КОТОРЫЕ СЕЙЧАС В НАЛИЧИИ</h3>
                </div>
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