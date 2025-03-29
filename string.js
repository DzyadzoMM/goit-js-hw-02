console.log("-----------------------------");
console.log("-----------------------------");
console.log("Метод slice() використовується для створення копії частини або всього рядка без зміни оригінального рядка. Він дозволяє витягувати підрядок з вихідного рядка, вказуючи початковий та кінцевий індекси.")
function getSubstring(string, length) {
  return string.slice(0, length)
}
console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 5));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));
console.log(getSubstring("Hello world", 0));
console.log("-----------------------------");
console.log("-----------------------------");
console.log("Методи рядків toLowerCase() та toUpperCase() використовуються для зміни регістру символів у рядку. Обидва методи не змінюють вихідний рядок, а повертають новий рядок у відповідному регістрі.")
function normalizeInput(input, to) {
  if(to=="upper"){
    return input.toUpperCase()
  }
  else if (to=="lower"){
    return input.toLowerCase()
  }
}
console.log(normalizeInput("This ISN'T SpaM", "lower"));
console.log(normalizeInput("This ISN'T SpaM", "upper"));
console.log(normalizeInput("Big SALE", "lower"));
console.log(normalizeInput("Big SALE", "upper"));
console.log(normalizeInput("Stay Awhile and Listen", "upper"));
console.log(normalizeInput("Stay Awhile and Listen", "lower"));
console.log("-----------------------------");
console.log("-----------------------------");
console.log("Метод рядків includes() використовується для перевірки наявності підрядка у рядку. Він повертає логічне значення true, якщо підрядок знайдено, і false, якщо підрядок відсутній.")
function checkForName(fullName, firstName) {
  fullName=fullName.toLowerCase();
  firstName=firstName.toLowerCase();
  return fullName.includes(firstName)
}
console.log(checkForName("Jason Neis", "Jason"));
console.log(checkForName("Jason Neis", "jAsOn"));
console.log(checkForName("Jason Neis", "Jacob"));
console.log(checkForName("Caty Stars", "Caty"));
console.log(checkForName("Caty Stars", "cAtY"));
console.log(checkForName("Caty Stars", "Andromeda"));
console.log("-----------------------------");
console.log("-----------------------------");
console.log("Методи startsWith() і endsWith() призначені для перевірки початку й закінчення рядка відповідно. Вони повертають булеве значення true або false, залежно від того, чи відповідає початок або кінець рядка заданому значенню.")
function checkFileExtension(fileName, ext){
  if (fileName.endsWith(ext)){
    return "File extension matches"
  }
  else{
    return "File extension does not match"
  }
}
console.log(checkFileExtension("styles.css", ".css"));
console.log(checkFileExtension("styles.css", ".js"));
console.log(checkFileExtension("app.js", ".js"));
console.log(checkFileExtension("app.js", ".html"));
console.log(checkFileExtension("index.html", ".html"));
console.log(checkFileExtension("index.html", ".css"));
console.log(checkFileExtension("index.html", ".js"));
console.log("-----------------------------");
console.log("-----------------------------");
console.log("Метод indexOf() використовується для пошуку першого входження підрядка в рядок.")
function getFileName(file){
  if (file.indexOf(".")!=-1){
    return file.slice(0, file.indexOf("."))
  }
  else {return file}
}
console.log(getFileName("styles.css"));
console.log(getFileName("app.js"));
console.log(getFileName("app"));
console.log(getFileName("index.js"));
console.log(getFileName("index.html"));
console.log("-----------------------------");
console.log("-----------------------------");
console.log("Метод trim() використовується для видалення початкових і кінцевих пробілів із рядка.")
function createFileName(name, ext){
  return name.trim()+"."+ext
}
console.log(createFileName(" order ", "txt"));
console.log(createFileName("report ", "csv"));
console.log(createFileName(" presentation", "xml"));
console.log("-----------------------------");
console.log("-----------------------------");
