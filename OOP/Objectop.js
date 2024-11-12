// Define the Product class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    displayProduct() {
      console.log(`ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`);
    }
  }
  
  // Define the CartItem class
  class CartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    calculateTotal() {
      return this.product.price * this.quantity;
    }
  
    displayCartItem() {
      console.log(`Product: ${this.product.name}, Quantity: ${this.quantity}, Total: $${this.calculateTotal().toFixed(2)}`);
    }
  }
  
  // Define the ShoppingCart class
  class ShoppingCart {
    constructor() {
      this.items = []; // Array to hold CartItem instances
    }
  
    // Method to get the total number of items in the cart
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity; // Increase quantity if item already exists
      } else {
        const cartItem = new CartItem(product, quantity);
        this.items.push(cartItem);
      }
    }
  
    // Method to remove an item from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to calculate the total price of all items in the cart
    calculateTotalPrice() {
      return this.items.reduce((total, item) => total + item.calculateTotal(), 0);
    }
  
    // Method to display all items in the cart
    displayCart() {
      console.log("Shopping Cart:");
      this.items.forEach(item => item.displayCartItem());
      console.log(`Total Items: ${this.getTotalItems()}`);
      console.log(`Total Price: $${this.calculateTotalPrice().toFixed(2)}`);
    }
  }
  
  // Testing the functionality step-by-step
  
  // Step 1: Create products
  const product1 = new Product(1, "Laptop", 999.99);
  const product2 = new Product(2, "Phone", 499.99);
  const product3 = new Product(3, "Headphones", 199.99);
  
  console.log("Created Products:");
  product1.displayProduct();
  product2.displayProduct();
  product3.displayProduct();
  console.log("\n");
  
  // Step 2: Create a shopping cart
  const shoppingCart = new ShoppingCart();
  
  // Step 3: Add items to the cart
  shoppingCart.addItem(product1, 2); // Add 2 Laptops
  shoppingCart.addItem(product2, 1); // Add 1 Phone
  shoppingCart.addItem(product3, 3); // Add 3 Headphones
  
  // Step 4: Display the cart
  console.log("Shopping Cart after adding items:");
  shoppingCart.displayCart();
  console.log("\n");
  
  // Step 5: Remove an item from the cart
  console.log("Removing Phone from the cart...");
  shoppingCart.removeItem(2); // Removes the product with id 2 (Phone)
  
  // Display the cart again after removing an item
  console.log("Shopping Cart after removing an item:");
  shoppingCart.displayCart();
  