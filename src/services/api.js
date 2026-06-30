const BASE_URL = "https://www.freetogame.com/api"

export const getGames = async () => {
    const response = await fetch(`${BASE_URL}/games`);
    return await response.json();
};

export const searchMovies = async (query) => {
    // there are no end point for seaching game in FreeToPlay site
    const response = await fetch(`${BASE_URL}/games)}`
    );
    const games = await response.json();
    // so doing this instead for searching
    return games.filter((game) => game.title.toLowerCase().includes(query.toLowerCase()));
};