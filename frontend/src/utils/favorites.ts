const FAVORITES_KEY = 'favorite_items';

export const getFavorites = (): string[] => {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
};

export const addFavorite = (itemId: string) => {
    const favorites = getFavorites();
    if (!favorites.includes(itemId)) {
        favorites.push(itemId);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
};

export const removeFavorite = (itemId: string) => {
    let favorites = getFavorites();
    favorites = favorites.filter(id => id !== itemId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const isFavorite = (itemId: string): boolean => {
    return getFavorites().includes(itemId);
};