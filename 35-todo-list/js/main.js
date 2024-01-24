import ToDoItems from "./todo-item.js";
import ToDoList from "./todo-list.js";

const toDoList = new ToDoList();

//Launch app
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
        console.log("Hello");
    }
});

const initApp = () => {
    //Add listeners
    const itemEntryForm = document.getElementById("item-entry");
    itemEntryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        processSubmission();
    });

    const clearItems = document.getElementById("clear-items");
    clearItems.addEventListener("click", (event) => {
        const list = toDoList.getList();
        if (list.length) {
            const confirmed = confirm("Clear To Do List??");
            if (confirmed) {
                toDoList.clearList();
                updatePersistentData(toDoList.getList());
                refreshPage();
            }
        }
    });
    //Procedural
    // load list
    loadListObject();
    refreshPage();
};

const loadListObject = () => {
    const storedList = localStorage.getItem("myToDoList");
    if (typeof storedList !== "string") {
        return;
    }

    const parsedList = JSON.parse(storedList);
    parsedList.forEach((itemObj) => {
        const newToDoItem = createNewItem(itemObj._id, itemObj._item);
        toDoList.addItemToList(newToDoItem);
    });
};

const refreshPage = () => {
    clearListDisplay();

    //render list
    renderList();

    //clear item entry
    clearEntryField();

    // set focus on item entry
    setFocusOnEntry();
};

const clearListDisplay = () => {
    const parentElement = document.getElementById("list-items");
    deleteContents(parentElement);
};

const deleteContents = (parentElement) => {
    // let child = parentElement.firstChild;
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
};

const renderList = () => {
    const list = toDoList.getList();
    list.forEach((item) => {
        buildListItem(item);
    });
};

const buildListItem = (item) => {
    const div = document.createElement("div");
    div.className = "item";
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = item.getId();
    checkBox.tabIndex = "0";

    // click listener to checkbox
    addClickListener(checkBox);

    const label = document.createElement("label");
    label.htmlFor = item.getId();
    label.textContent = item.getItem();

    div.appendChild(checkBox);
    div.appendChild(label);

    const container = document.getElementById("list-items");
    container.appendChild(div);
};

const addClickListener = (element) => {
    element.addEventListener("click", (event) => {
        toDoList.removeItemFromList(element.id);
        //update data
        updatePersistentData(toDoList.getList());

        //screen reader
        const removedText = getLabelText(element.id);
        updateScreenReader(removedText, "Removed from List");

        // remove from data
        setTimeout(() => {
            refreshPage();
        }, 500);
    });
};

const getLabelText = (id) => {
    return document.getElementById(id).nextElementSibling.textContent;
};

const updatePersistentData = (listArray) => {
    localStorage.setItem("myToDoList", JSON.stringify(listArray));
};

const clearEntryField = () => {
    document.getElementById("new-item").value = "";
};

const setFocusOnEntry = () => {
    document.getElementById("new-item").focus();
};

const processSubmission = () => {
    const newEntryText = getNewEntry();
    if (!newEntryText.length) {
        return;
    }
    const nextItemId = calcNextItemId();
    const toDoItem = createNewItem(nextItemId, newEntryText);

    //add to toDoItem List
    toDoList.addItemToList(toDoItem);

    updatePersistentData(toDoList.getList());
    updateScreenReader(newEntryText, "Added");
    refreshPage();
};

const getNewEntry = () => {
    return document.getElementById("new-item").value.trim();
};

const calcNextItemId = () => {
    let nextItemId = 1;
    const list = toDoList.getList();
    if (list.length > 0) {
        nextItemId = list[list.length - 1].getId() + 1;
    }
    return nextItemId;
};

const createNewItem = (id, text) => {
    const toDo = new ToDoItems();
    toDo.setItem(text);
    toDo.setId(id);
    return toDo;
};

const updateScreenReader = (newEntryText, actionVerb) => {
    document.getElementById(
        "confirmation"
    ).textContent = `${newEntryText} ${actionVerb}`;
};
