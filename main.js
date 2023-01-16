import './style.css'

const select = document.getElementById("select");
const btns = document.getElementsByTagName("button");

select.addEventListener("change", (e) => {
  switch (e.target.value) {
    case "price":
      changeActive(document.getElementById("btn-price"))
      break;

    case "name":
      changeActive(document.getElementById("btn-name"))
      break;

    case "relevance":
      changeActive(document.getElementById("btn-relevance"))
      break;
  }
});

function changeActive(btnElement) {
for (let index = 0; index < btnElement.length; index++) {
  const button = btns[index];
  button.classList.remove("active");
  btnElement.classList.add("active");
}
}

const buttons = document.getElementsByTagName("button");

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  button.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "price":
        select.value = "price"
        changeActive(document.getElementById("btn-price"))
        break;

      case "name":
        select.value = "name"
        changeActive(document.getElementById("btn-name"))
        break;

      case "relevance":
        select.value = "relevance"
        changeActive(document.getElementById("btn-relevance"))
        break;
    }
  })
}