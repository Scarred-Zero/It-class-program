const stock = {
    apples: 10,
    bananas: 3,
    oranges: 0,
};

const orders = ["apples", "oranges", "bananas", "apples", "grapes"];

function serveCustomers(inventory, customerOrders) {
    let salesCount = 0;
    let failedOrders = 0;

    for (const fruit of customerOrders) {
        if (inventory[fruit] > 0) {
            inventory[fruit]--;
            salesCount++;
        } else {
            failedOrders++;
        }
    }

    const summary = {
        salesCount: salesCount,
        failedOrders: failedOrders,
        finalInventory: inventory
    }
    return summary;
}

const report = serveCustomers(stock, orders);
const jsonString = JSON.stringify(report, null, 2);
console.log(jsonString);
