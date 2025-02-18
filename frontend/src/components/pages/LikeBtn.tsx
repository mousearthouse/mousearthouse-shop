import "@/App.css";
import { useState, useEffect } from "react";
import { addFavorite, removeFavorite, isFavorite } from "@/utils/favorites";

interface LikeButtonProps {
    itemId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({itemId}) => {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        setLiked(isFavorite(itemId));
    }, [itemId]);

    const handleClick = () => {
        if (liked) {
            removeFavorite(itemId);
        } else {
            addFavorite(itemId);
        }
        setLiked(!liked);
    };

    return (
        <img className="like-btn" src={liked ? "src/assets/icons/likeFilled.svg" : "src/assets/icons/likeOutline.svg"} 
        alt="Like" onClick={handleClick}/>
    );
};

export default LikeButton;