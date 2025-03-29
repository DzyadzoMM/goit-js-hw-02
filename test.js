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
// ------------------------------------
console.log("-----------------------------");

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  return password == correctPassword ? "Access granted" : "Access denied, wrong password!";
}
console.log(checkPassword("jqueryismyjam"));
console.log(checkPassword("angul4r1sl1f3"));
console.log(checkPassword("r3actsux"));
// ------------------------------------
console.log("-----------------------------");
function getSubscriptionPrice(type) {
  switch(type){
    case "starter":
      return 0;
      break;
    case "professional":
      return 20;
      break;
    case "organization":
      return 50;
      break;
    default:
      return "Invalid subscription type!"
  }
}
console.log (getSubscriptionPrice("professional"));
console.log (getSubscriptionPrice("organization"));
console.log (getSubscriptionPrice("starter"));
console.log (getSubscriptionPrice("random"));
console.log (getSubscriptionPrice("premium"));
// ------------------------------------
console.log("-----------------------------");
function isNumberInRange(start, end, number) {
  return number>start&&number<end;
}
console.log (isNumberInRange(10, 30, 17));
console.log (isNumberInRange(10, 30, 5));
console.log (isNumberInRange(20, 50, 24));
console.log (isNumberInRange(20, 50, 76));
// ------------------------------------
console.log("-----------------------------");
console.log("Логічний оператор або")
function checkAccess(subType) {
  if (subType === "pro" || subType === "vip") {
    return true; // Доступ дозволено
  } else {
    return false; // Доступ заборонено
  }
}
console.log(checkAccess("pro"));
console.log(checkAccess("starter"));
console.log(checkAccess("vip"));
console.log(checkAccess("free"));
// ------------------------------------
console.log("-----------------------------");
function toggleModalVisibility(isVisible) {
  return !isVisible
}
console.log(toggleModalVisibility(true));
console.log(toggleModalVisibility(false));