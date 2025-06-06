export let cart = [

];

export function addToCart(productId) {
    let MatchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            MatchingItem = cartItem;
        }
    });
    
    const amount = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)

    if(MatchingItem) {
        MatchingItem.quantity += amount;
    } else {
        cart.push({
        productId,
        quantity: amount
        });
    };
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (productId !== cartItem.productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
}