const items = [
    {
        id: 1,
        food: "milk",
        price: 2.99,
        refrigerated: true
    },
    {
        id: 2,
        food: "eggs",
        price: 2.99,
        refrigerated: true
    },
    {
        id: 3,
        food: "peanut butter",
        price: 1.99,
        refrigerated: false
    }
]

const bagOfApples = {
    id: 4,
    food: "bag of apples",
    price: 9.99,
    refrigerated: false
}
items.push(bagOfApples)

for (const item of items) {
    if (item.price > 8) {
        console.log(`The ${item.food} costs $${item.price}. Do you really want it?`)
    }
}

// console.log(items)