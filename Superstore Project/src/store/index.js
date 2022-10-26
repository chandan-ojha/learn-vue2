export const storage = {
    state: {
        inventory: [],
        cart: []
    },
    getters: {
        getInventory(state) {
            return state.inventory
        },
        getCart(state) {
            return state.cart
        }
    },
    mutations: {
        addToCart(state, payload) {
            state.cart.push(payload)
        }
    }
}