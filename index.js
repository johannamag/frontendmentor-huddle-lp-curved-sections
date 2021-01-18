const form = document.querySelector(".form");
const input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputValue = input.value;
  if (isValid(inputValue)) {
    form.classList.remove("error");
  } else {
    form.classList.add("error");
  }
});

function isValid(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(input).toLowerCase());
}
