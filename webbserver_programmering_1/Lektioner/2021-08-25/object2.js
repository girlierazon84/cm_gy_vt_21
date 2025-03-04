let inventory = [
    {
        bookName: 'Bok 1',
        price: 49,
        availability: 10,
        buyAmount: 0
    },
    {
        bookName: 'Bok 2',
        price: 79,
        availability: 10,
        buyAmount: 0
    },
    {
        bookName: 'Bok 3',
        price: 29,
        availability: 10,
        buyAmount: 0
    },
]

function printInventory() {
    inventory.forEach(item => {
        console.log(`${item.bookName}, ${item.availability} i lager, ${item.buyAmount} i kundkorgen`)
    })
}

printInventory()

// console.log(inventory)

function multiplyBooksWithPrice(index) {
    return inventory[index].buyAmount * inventory[index].price
}

console.log(multiplyBooksWithPrice(0))

// Lägg en bok av varje i kundkorgen
for (let i = 0; i < inventory.length; i++) {
    inventory[i].buyAmount += 1
}
printInventory()

inventory.forEach(item => {
    item.buyAmount += 1
});
printInventory()

for (let i = 0; i < inventory.length; i++) {
    console.log(multiplyBooksWithPrice(i))
}

function calculateTotalPrice() {
    let sum = 0
    for (let i = 0; i < inventory.length; i++) {
        sum += multiplyBooksWithPrice(i)
    }
    return sum
}

console.log(calculateTotalPrice())

if (calculateTotalPrice() < 159) {
    let remaining = 159 - calculateTotalPrice()
    console.log(`${remaining}kr kvar till fri frakt`);
} else {
    console.log('Du har fri frakt på ditt köp')
}

// Summera antalet böcker
function summarizeAllBooks() {
    let sum = 0
    inventory.forEach(item => {
        sum += item.buyAmount
    });
    return sum
}

console.log(`Du har ${summarizeAllBooks()} böcker i din kundkorg`)

console.log('-----------------------------------')

// slutför köpet och minska antalet böcker i lager
// inventory[0].availability -= inventory[0].buyAmount
function updateAvailability() {
    inventory.forEach(item => {
        item.availability -= item.buyAmount
        item.buyAmount = 0
    })
}

updateAvailability()

printInventory()
