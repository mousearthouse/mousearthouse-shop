import '@/components/pages/MainPage/mainPage.scss';
import { useNavigate } from "react-router-dom";
import LikeButton from '@/components/pages/LikeBtn';

export interface ItemCardProps {
    item: Item;
}

const ItemCard = ({item}: ItemCardProps) => {

    const navigate = useNavigate();

    const openItemPage = () => {
      navigate(`item/${item.id}`);
    };

    return (
        <div className="item_card">
            <div className="card-img-container">
                <img src={`/images/mouse${item.id}.png`} alt={item.name} />
            </div>
            <div className="item_card_header">
                <h3>{item.name}</h3>
                <LikeButton itemId={item.id} />
            </div>
            <div className="item_card_information">
                <p className='small_text'>{item.description}</p>
                <span>количество челиков в наличии: <b style={{ color: item.stock === 1 ? "red" : "inherit" }}>
                    {item.stock}</b>
                </span>
            </div>
            <button className="animated-button" onClick={() => openItemPage()}>
                <span>Подробнее</span>
            </button>
      </div>
    )
}

export default ItemCard;