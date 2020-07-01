export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity +1}
                : cartItem    
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, ItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === ItemToRemove.id
    )

    if(existingCartItem.quantity === 1){
        return cartItems.filter(item => item.quantity !==1)
    }
    else{
        return cartItems.map(cartItem =>
            cartItem.id === ItemToRemove.id 
                ? {...cartItem, quantity: cartItem.quantity-1}
                : cartItems
        )
    }
}