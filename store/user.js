export const state = () => ({
    userId: undefined,
    username: undefined,
    language: 'en',
    isAuthenticated: false,
});

export const mutations = {
    authenticated (state, { userId, username, language }) {
        console.log('****logging in')
        state.userId = userId
        state.username = username
        state.language = language
        state.isAuthenticated = true
    },

    unauthenticated (state) {
        console.log('****logging out')

        state.userId = undefined
        state.username = undefined
        state.language = 'en'
        state.isAuthenticated = false
    }
};
