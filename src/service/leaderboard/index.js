import VenueAPI from '../utils/venue-api';

function getLeaderBoardData() {
    return VenueAPI.get('/retrieve/leaderboard-data/');
}

export { getLeaderBoardData }; 