
const menuItems = [
 {name: "Veg Momos", price: 60, type: "veg"},
 {name: "Chicken Momos", price: 80, type: "nonveg"}
];

let cart = [];

function renderMenu() {
 const menu = document.getElementById("menu");
 menu.innerHTML = "";
 menuItems.forEach((item, index) => {
     let div = document.createElement("div");
     div.innerHTML = item.name + " - ₹" + item.price + 
     " <button onclick='addToCart(" + index + ")'>Add</button>";
     menu.appendChild(div);
 });
}

function filterMenu(type) {
 const filtered = menuItems.filter(i => i.type === type);
 const menu = document.getElementById("menu");
 menu.innerHTML = "";
 filtered.forEach((item, index) => {
     let div = document.createElement("div");
     div.innerHTML = item.name + " - ₹" + item.price + 
     " <button onclick='addToCart(" + index + ")'>Add</button>";
     menu.appendChild(div);
 });
}

function addToCart(index) {
 cart.push(menuItems[index]);
 updateCart();
}

function updateCart() {
 const list = document.getElementById("cart-items");
 list.innerHTML = "";
 let total = 0;
 cart.forEach(item => {
     total += item.price;
     let li = document.createElement("li");
     li.innerText = item.name + " - ₹" + item.price;
     list.appendChild(li);
 });
 document.getElementById("total").innerText = total;
}

function downloadReceipt() {
 alert("Receipt download coming soon!");
}

renderMenu();
