export const subTotal = (cart, passedId) => {
    const total = 0;

    for (let [key, { price, amount, id }] of [...cart]) {
        if (passedId === id) {
            return Number(price) * amount;
        }
    }
};