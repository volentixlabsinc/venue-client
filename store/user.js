export const state = () => ({
    userId: undefined,
    username: undefined,
    language: 'en'
});

export const mutations = {
    authenticated (state, { userId, username, language }) {
        state.userId = userId
        state.username = username
        state.language = language
    }
};
