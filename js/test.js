function checkAge(age){
  if (age>=18){
    return "You are an adult";
  }
}
console.log (checkAge(20));
console.log (checkAge(17));
console.log (checkAge(10));
console.log (checkAge(30));
// ------------------------------------
console.log("-----------------------------");
function checkStorage(available, ordered){
  if (ordered>available){
    return "Not enough goods in stock!"
  }
  else{
    return "Order is processed, our manager will contact you"
  }
}
console.log (checkStorage(100, 50));
console.log (checkStorage(100, 130));
console.log (checkStorage(200, 20));
console.log (checkStorage(200, 150));
console.log (checkStorage(150, 180));
// ------------------------------------
console.log("-----------------------------");
function checkStorage_2(available, ordered){
  if (ordered==0){
    return "There are no products in the order!";
  }
  else if (ordered>available){
    return "Your order is too large, there are not enough items in stock!";
  }
  else{
    return "The order is accepted, our manager will contact you";
  }
}
console.log (checkStorage_2(100, 50));
console.log (checkStorage_2(100, 130));
console.log (checkStorage_2(70, 0));
console.log (checkStorage_2(100, 50));
console.log (checkStorage_2(200, 20));
console.log (checkStorage_2(150, 0));
console.log (checkStorage_2(80, 80));