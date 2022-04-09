const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    if (action.type === 'REMOVE_ITEM') {
        return {...state, cart:state.cart.filter((item) => item.id !== action.payload)}
    }
    if (action.type === 'INCREASE') {
        let newCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return {...item, quantity: item.quantity + 1}
            }
            return item   
        })
        return {...state, cart: newCart}
    }
    if (action.type === 'DECREASE') {
        let newCart = state.cart
            .map((item) => {
            if (item.id === action.payload) {
                return {...item, quantity: item.quantity - 1}
            }
            return item
            })
            // .filter((item) => item.quantity === 0 )
        return {...state, cart: newCart}

    }

    if (action.type === 'TOTALS') {
        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
            const {price, quantity} = cartItem
            const totalItems = price * quantity
            cartTotal.total += totalItems
            cartTotal.amount += quantity
            return cartTotal
        }, {
            total: 0,
            amount: 0
        })
        total = parseFloat(total.toFixed(2))
        return {...state, total, amount}
    }

    return state
}

export default reducer