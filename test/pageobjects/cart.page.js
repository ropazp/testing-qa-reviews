const Page = require('./page');

// This class intentionally violates the UQT JavaScript Code Review Standards
// for demonstration purposes. DO NOT USE IN PRODUCTION.

// VIOLATION: Using 2-space indentation instead of 4 spaces (Rule 1)
// VIOLATION: Using require instead of ES6 import (Rule 5)
// VIOLATION: Using module.exports instead of export default (Rule 5)

// VIOLATION: Class should use PascalCase for export, but exported with module.exports (Rule 5)
class CartPage extends Page {
    // VIOLATION: Using JavaScript getter (Rule 7 - Getters/Setters)
    get cartItems() {
        return $$('.cart-item');
    }

    // VIOLATION: Using var instead of const/let (Rule 2)
    // VIOLATION: Missing semicolon (Rule 1)
    // VIOLATION: Using double quotes instead of single quotes (Rule 1)
    calculateTotal() {
        var total = 0
        var items = this.cartItems;
        
        // VIOLATION: Using for-of loop instead of higher-order functions (Rule 3)
        // VIOLATION: Using unary increment operator ++ (Rule 2)
        // VIOLATION: Using == instead of === (Rule 6)
        for (let item of items) {
            if (item.isDisplayed() == true) {
                total++;
            }
        }
        
        return total
    }

    // VIOLATION: Using function declaration instead of function expression (Rule 3)
    // VIOLATION: Unnecessary else block after return (Rule 6)
    // VIOLATION: No braces for single-line if statement (Rule 1)
    function removeItem(index) {
        if (index < 0) return false;
        else {
            return true;
        }
    }

    // VIOLATION: Chain assignment (Rule 2)
    // VIOLATION: Using string concatenation instead of template literals (Rule 1)
    // VIOLATION: Line exceeds 100 characters (Rule 1)
    addMultipleItems(count) {
        let a = b = c = count;
        const message = 'Adding ' + count + ' items to cart with values: ' + a + ', ' + b + ', ' + c;
        return message;
    }
}

// VIOLATION: Using module.exports instead of export default (Rule 5)
module.exports = new CartPage();