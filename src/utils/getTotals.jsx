export const getTotal = (cart, passedId) => {
    let totalAmount = 0;
    let totalPrice = 0;

    for (let [key, { price, amount, id }] of [...cart]) {
        // totalAmount += amount;
        if (id === passedId) {
            totalPrice = amount * +price;
        }

        
    }

    

    return totalPrice
}