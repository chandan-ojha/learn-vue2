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
        setInventory(state,payload){
            state.inventory = payload
        },
        addToCart(state, payload) {
            state.cart.push(payload)
        },
        removeItem(state, payload){
            state.cart.splice(payload,1)
        },
        clearCart(state){
            state.cart = []
        }
    },
    actions: {
        addToCart(context, payload) {
            context.commit('addToCart',payload)
        }
    }
}