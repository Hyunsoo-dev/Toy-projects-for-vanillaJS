const input = document.querySelector("input[type='text']");
const checkButton = document.querySelector("#checkButton");
const itemContainer = document.querySelector(".itemContainer");
const trashIcon = document.querySelector(".fas.fa-trash-alt");
const completeItem = (event) => {
  let toBeCompleteItem = event.target;
  let optionElement = toBeCompleteItem.parentNode;
  let itemElement = optionElement.parentNode;
  let itemContainer = itemElement.parentNode;
  itemContainer.removeChild(itemElement);
};
const removeItem = (event) => {
  let toBeRemoveItem = event.target;
  let optionElement = toBeRemoveItem.parentNode;
  let itemElement = optionElement.parentNode;
  let itemContainer = itemElement.parentNode;
  itemContainer.removeChild(itemElement);
};

const addItem = () => {
  let itemValue = input.value;

  let item = document.createElement("div");
  let name = document.createElement("div");
  let option = document.createElement("div");
  let trashIcon = document.createElement("i");
  let checkIcon = document.createElement("i");

  item.setAttribute("class", "item");
  name.setAttribute("class", "name");
  option.setAttribute("class", "option");
  trashIcon.setAttribute("class", "fas fa-trash-alt");
  checkIcon.setAttribute("class", "fas fa-check");

  name.textContent = itemValue;
  option.append(checkIcon, trashIcon);
  item.append(name, option);
  itemContainer.append(item);
  input.value = "";

  trashIcon.addEventListener("click", removeItem);
  checkIcon.addEventListener("click", completeItem);
};
const pressEnter = (event) => {
  if (event.code === "Enter") {
    event.preventDefault();
    addItem();
  }
};
checkButton.addEventListener("click", addItem);
input.addEventListener("keypress", pressEnter);

// trashIcon.addEventListener("click", removeItem);
