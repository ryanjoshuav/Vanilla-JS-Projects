// ****** SELECT ITEMS **********

const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");

//grocery list
let groceryItems = [];

// edit option
let isEditing = false;
let editID = "";

// ****** LOCAL STORAGE **********
// add/update to localStorage
const addToLocalStorage = (item, id) => {
  localStorage.setItem("grocery-list", JSON.stringify(groceryItems));
};

//Read - retrieve from localStorage
const retrieveFromStorage = () => {
  groceryItems = JSON.parse(localStorage.getItem("grocery-list")) ?? [];
};

//Delete
const deleteListFromStorage = () => {
  localStorage.removeItem("grocery-list");
};

// ****** FUNCTIONS **********

// displaying alert
const displayAlert = (message, alertType) => {
  const alertElem = document.querySelector(".alert");

  alertElem.textContent = message;
  alertElem.classList.add(`alert-${alertType}`);

  setTimeout(() => {
    alertElem.textContent = "";
    alertElem.classList.remove(`alert-${alertType}`);
  }, 1000);
};

const setToDefault = () => {
  grocery.value = "";
  isEditing = false;
  editID = "";
  submitBtn.textContent = "submit";
};

// adding item to list
const addItem = (item, id) => {
  groceryItems.push({ id: id, item: item });
};

const editItem = (value) => {
  groceryItems = groceryItems.map((listItem) => {
    return editID === listItem.id ? { ...listItem, item: value } : listItem;
  });
};

const startEditing = (item) => {
  isEditing = true;
  submitBtn.textContent = "edit";
  grocery.value = item.item;
  editID = item.id;
};

const deleteItem = (item) => {
  groceryItems = groceryItems.filter((listItem) => listItem.id !== item.id);
  console.log(item);
  displayAlert(`successfully deleted ${item.item}`, "success");
  renderItems();
  addToLocalStorage();
  setToDefault();
};

const renderItems = () => {
  const container = document.querySelector(".grocery-container");
  const list = document.querySelector(".grocery-list");

  container.classList.toggle("show-container", groceryItems.length);

  list.innerHTML = "";
  groceryItems.map((item) => {
    console.log(item);
    const element = document.createElement("article");
    element.classList.add("grocery-item");

    element.innerHTML = `<p class="title">${item.item}</p>
    <div class="btn-container">
      <button class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;

    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => deleteItem(item));
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
      startEditing(item);
    });

    list.appendChild(element);
  });
};

// form submit
const handleSubmit = (e) => {
  e.preventDefault();
  const inputValue = grocery.value;
  const id = new Date().getTime().toString();

  if (inputValue && !isEditing) {
    // console.log("add item");
    addItem(inputValue, id);
    displayAlert(`${inputValue} added to the list`, "success");
  } else if (inputValue && isEditing) {
    // console.log("editing");
    //editList
    editItem(inputValue);
    displayAlert("successfully edited", "success");
  } else {
    console.log("empty value");
    displayAlert("please enter text", "danger");
  }

  renderItems();
  addToLocalStorage();
  setToDefault();
};

const clearItems = () => {
  groceryItems = [];
  displayAlert("successfully cleared items", "success");
  renderItems();
  deleteListFromStorage();
  setToDefault();
};
// ****** SETUP ITEMS **********

const initApp = () => {
  retrieveFromStorage();
  renderItems();
  setToDefault();
};

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", handleSubmit);
clearBtn.addEventListener("click", clearItems);
document.addEventListener("DOMContentLoaded", initApp);
