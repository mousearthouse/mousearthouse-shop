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

    // const openFilmPage = (selectedDate: string, selectedHall: string, selectedTime: string) => {
    //     navigate(`?date=${selectedDate}&hall=${selectedHall}&time=${selectedTime}`);
    // };

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
        <h2>Фильм не найден :(</h2>
    </main>
);

const ItemDetails = ({ item }: { item: Item }) => (
    <div key={item.id} className="item_content">
        <div className="img-container">
          <img src={"@/images/mouse1.jpg"} alt={item.name} />
          </div> 
        <div className='item_description'>
            <div className='name'>{item.name}</div>     
            <p>{item.category_id}</p>  
               
        </div>         
    </div>
);

export default FilmPage;