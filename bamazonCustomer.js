var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Thei11usionist",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    availableProducts();
});

function availableProducts() {
    console.log("\nSports Equipment: \n");
    connection.query("SELECT item_id, product_name, price FROM products", function (err, results) {
        if (err) throw err;
        console.table(results);
        startShopping();
    });
};

function startShopping() {
    inquirer.prompt([
        {
            name: "itemID",
            type: "input",
            message: "What is the ID of the product you would like to buy? "
        },
        {
            name: "quantity",
            type: "input",
            message: "How many units of the product do you wish to buy? "
        }
    ]).then(function (answer) {
        connection.query("SELECT item_id, product_name, stock_quantity, price FROM products WHERE ?", { item_id: answer.itemID }, function (err, results) {
            if (err) throw err;
            if (results[0].stock_quantity >= answer.quantity) {
                var itemsRemaining = results[0].stock_quantity - answer.quantity;
                var purchaseTotal = answer.quantity * results[0].price;
                connection.query(`UPDATE products SET stock_quantity=${itemsRemaining} WHERE item_id=${answer.itemID}`, function (err, results) {
                    if (err) throw err;
                    console.log(`Your total is: ${purchaseTotal}`);
                    continueShopping();
                });
            }
            else {
                console.log("Insufficient quantity!");
                continueShopping();
            }
        })
    })
}

function continueShopping() {
    inquirer.prompt([
        {
            name: "tryAgain",
            type: "confirm",
            message: "Would you like to continue shopping? "
        }
    ]).then(function (answer) {
        if (answer.tryAgain) {
            availableProducts();
        } else {
            connection.query("SELECT * FROM products", function (err, results) {
                if (err) throw err;
                console.table(results);
            });
            console.log("Come again soon!");
        }
    })
}