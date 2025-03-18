import { useCallback, useEffect, useState } from 'react';
import './mainPage.scss';
import ItemCard from '@/components/ItemCard';
import getCategoryItems from '@/api/requests/getCategoryItems';

const CATEGORIES = [1];

const MainPage = () => {
    
    const [itemData, setItemData] = useState<{ [key: string]: Item[] }>({});
    const promo_images = Array.from({ length: 9 }, (_, i) => `/images/promo/promo${i + 1}.jpg`);

    const [isLoading, setIsLoading] = useState(true);

    const handleItemDataLoading = useCallback((categoryName: string, items: Item[]) => {
        setItemData((prev) => ({ ...prev, [categoryName]: items }));
        setIsLoading(false);
    }, []);

    useEffect(() => {
        CATEGORIES.forEach((categoryId) => {
            getCategoryItems({
                categoryId,
                onDataLoaded: handleItemDataLoading,
            });
        });
    }, [handleItemDataLoading]);

    if (isLoading) return <Loading />;

    return (
        <main>
            <div className='content'>
                <div className='promo'>
                    <div className='promo_text'>
                        MOUSEARTHOUSE<br/>
                        SHOP
                    </div>
                </div>
                <div className='columns_container'>
                    <div className="column c1"></div>
                    <div className="column c2">
                        <p>привет! меня зовут Полина,<br/>
                            я фуллстек-разработчик,<br/>
                            а это мой мышкин сайт
                        </p>
                        <p>уже 5 лет шью крошечных дружочков,
                            которых можно брать с собой
                            в маленькие путешествия<br/>
                            (на работу и не только)
                        </p>
                    </div>
                    <div className="column c3"></div>
                    <div className="column c4"></div>
                </div>
                <p>- ребята, которые уже нашли дом -</p>
                <ScrollPromo promo_images={promo_images} />
                <div className='columns_container'>
                    <div className="column c1"></div>
                    <div className="column c2"></div>
                    <div className="column c3">
                        <p>мои малыши - чтобы носить в кармашке и жмякать,<br/>
                        но я также делаю таких, которых<br/>
                        можно поставить на полочку и любоваться
                        </p>
                        <p>ниже - каталог тех, кто сейчас в наличии,<br/>
                        однако, если у вас есть идея,<br/>
                        я могу создать кого-то на заказ<br/>
                        (или повторить из ребят выше)!
                        </p>
                    </div>
                    <div className="column c4"></div>
                </div>
                <Catalog itemData={itemData} />

            </div>
        </main>
    )
}

const ScrollPromo = ({ promo_images }: { promo_images: string[] }) => (
    <div className='prokrutka'>
        {promo_images.map((src, index) => (
            <div className='promo_card'>
            <img key={index} src={src} alt={`Фото ${index + 1}`} width="150" />
            </div>
        ))}
    </div>
)

const Loading = () => (
    <div className="content">
        <h2>Загрузка...</h2>
    </div>
);

const Catalog = ({ itemData } : { itemData: { [key: string]: Item[] }}) => (
    <div className='catalog'>
        <h2 className='catalog_name'>
            Каталог
        </h2>
        <p className='like_info'>
            (тут работает система сердечек -<br/>лайкайте понравившихся ребят,<br/>а потом зайдите в избранное!)
        </p>
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
)

export default MainPage;