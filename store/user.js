export const state = () => ({
    userId: undefined,
    username: '',
    language: 'en',
    isAuthenticated: false,
    token: ''
});

export const mutations = {
    authenticated (state, { userId, username, language, token }) {
        console.log('****logging in')
        state.userId = userId
        state.username = username
        state.language = language
        state.isAuthenticated = true
        state.token = token

        this.$axios.setToken(token, 'Token')
    },

    unauthenticated (state) {
        console.log('****logging out')

        state.userId = -1
        state.username = ''
        state.language = 'en'
        state.isAuthenticated = false
        state.token = ''

        this.$axios.setToken(false)
    }
};
