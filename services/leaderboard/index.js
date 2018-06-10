import VenueAPI from '../utils/venue-api';

async function getLeaderBoardData() {
    return VenueAPI.get('/retrieve/leaderboard-data/', false);
}

export { getLeaderBoardData }; 