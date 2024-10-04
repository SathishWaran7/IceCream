class IceCream {
    constructor(flavor, price, quantity) {
        this.flavor = flavor;
        this.price = price;
        this.quantity = quantity;
    }

    updateFlavor(newFlavor) {
        this.flavor = newFlavor;
    }

    updateQuantity(newQuantity) {
        this.quantity = newQuantity;
    }
}
class IceCreamShopInventory {
    constructor() {
        this.inventory = [];
    }
    addIceCream(flavor, price, quantity) {
        const newIceCream = new IceCream(flavor, price, quantity);
        this.inventory.push(newIceCream);
        console.log(`Added ${flavor} ice cream with price ${price} and quantity ${quantity}.`);
    }
    updateIceCreamFlavor(oldFlavor, newFlavor) {
        const iceCream = this.inventory.find(item => item.flavor === oldFlavor);
        if (iceCream) {
            iceCream.updateFlavor(newFlavor);
            console.log(`Updated flavor ${oldFlavor} to ${newFlavor}.`);
        } else {
            console.log(`Flavor ${oldFlavor} not found.`);
        }
    }
    calculateTotalInventoryValue() {
        const totalValue = this.inventory.reduce((total, iceCream) => {
            return total + (iceCream.price * iceCream.quantity);
        }, 0);
        console.log(`The total value of the inventory is: ${totalValue}`);
        return totalValue;
    }
}
const inventory = new IceCreamShopInventory();
inventory.addIceCream("Vanilla", 3.5, 10);
inventory.addIceCream("Chocolate", 4.0, 5);
inventory.addIceCream("Strawberry", 3.8, 8);
inventory.updateIceCreamFlavor("Chocolate", "Dark Chocolate");
inventory.calculateTotalInventoryValue();
