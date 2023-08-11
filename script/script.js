typing("Mr Younsi Farouk Web Developper");

function typing(string) {
  const array = string.split("");
  let index = 0;
  const interval = setInterval(() => {
    if (index < array.length) {
      document.getElementById("text").textContent += array[index];
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById("text").textContent = "";
        typing(string);
      }, 500);
    }
  }, 250);
}
