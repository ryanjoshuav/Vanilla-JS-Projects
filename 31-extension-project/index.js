let myLeads = [];

const saveTabBtn = document.querySelector(".js-save-tab");
const submitBtn = document.querySelector(".js-submit-button");
const deleteBtn = document.querySelector(".js-delete-button");
const inputElement = document.querySelector(".js-input");
const ulEl = document.querySelector(".js-ul-el");

saveTabBtn.addEventListener("click", saveTab);
submitBtn.addEventListener("click", saveInput);
deleteBtn.addEventListener("dblclick", deleteLeads);

function saveTab() {
    let browser;
    if (typeof window.browser !== "undefined") {
        browser = window.browser; // Firefox
    } else if (typeof window.chrome !== "undefined") {
        browser = window.chrome; // Chrome
    } else {
        console.log("This browser is not supported");
    }

    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);
    });

    // myLeads.push(currentURL);
}
function deleteLeads() {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
    console.log(myLeads);
}

function saveInput() {
    myLeads.push(inputElement.value);
    console.log(myLeads);
    inputElement.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
}

function renderLeads(leadsArray) {
    ulEl.textContent = "";
    const leadsFromLocStorage = JSON.parse(localStorage.getItem("myLeads"));
    if (leadsFromLocStorage) {
        myLeads = leadsFromLocStorage;
        leadsArray = leadsFromLocStorage;
    }
    leadsArray.forEach((leads) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = leads;
        anchor.target = "blank";
        anchor.textContent = leads;
        listItem.appendChild(anchor);
        ulEl.appendChild(listItem);
    });
}
renderLeads(myLeads);
