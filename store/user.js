export const state = () => ({
    userId: undefined,
    language: 'en'
});

export const mutations = {
    authenticated (state, { userId, language }) {
        state.userId = userId
        state.language = language
    }
};
