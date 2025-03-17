import './itemPage.scss';
import { useParams, useNavigate } from "react-router-dom";
import getItemById from "@/api/requests/getItemById";
import { useState, useEffect, useCallback } from "react";

const FilmPage = () => {
    const navigate = useNavigate();
    const { itemId } = useParams();
    
    const [item, setItem] = useState<Item | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const handleItemDataLoading = useCallback((item: Item) => {
        setItem(item);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (itemId) {
            getItemById(Number(itemId), { onDataLoaded: handleItemDataLoading });
        }
    }, [handleItemDataLoading]);

    if (isLoading) return <Loading />;
    if (!item) return <NotFound />;

    return (
        <main>
            <div className='content'>
                <ItemDetails item={item} />
            </div>
        </main>
    );
};

const Loading = () => (
    <main>
        <h2>Загрузка...</h2>
    </main>
);

const NotFound = () => (
    <main>
        <h2>Такого у меня сейчас нет :(</h2>
    </main>
);

const ItemDetails = ({ item }: { item: Item }) => (
    <div key={item.id} className="item_content">
        <div className="img-container">
            <img src={`/images/mouse${item.id}.png`} alt={item.name} />
        </div> 
        <div className='item_description'>
            <div className='name'>{item.name}</div>     
            <p>{item.description}</p>  
            <p>в наличии: <b style={{ color: item.stock === 1 ? "red" : "inherit" }}>
                {item.stock}</b>
            </p>
            <button>Написать в тг!</button>
        </div>         
    </div>
);

export default FilmPage;