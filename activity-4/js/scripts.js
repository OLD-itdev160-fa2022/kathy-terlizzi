// welcome message
var user = 'Kathy';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Atom reviews.';
var greetingEL = document.getElementById('greeting');

greetingEL.textContent = greeting;

// product price
var price = 20,
studentDiscount = .10,
studentPrice = price - (price * studentDiscount),
priceEl = document.getElementById('price'),
studentPriceEl = document.getElementById('student-price');

priceEl.textContent=price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);
