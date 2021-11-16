import {stock} from '../data/stock'

export const consultProducts = () => {
    return new Promise ((resolve, reject) => {
setTimeout(() => {
    resolve(stock)
}, 5000)
})
}