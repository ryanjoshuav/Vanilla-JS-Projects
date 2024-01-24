function main() {
    let count = 0;

    const incBtn = document.querySelector(".js-inc-button");
    const decBtn = document.querySelector(".js-dec-button");
    const resetBtn = document.querySelector(".js-reset-button");
    const saveBtn = document.querySelector(".js-save-button");
    const countElem = document.querySelector("#count-el");
    const saveEl = document.querySelector(".save-el");

    incBtn.addEventListener("click", () => {
        count += 1;
        countElem.textContent = count;
        console.log(count);
    });
    decBtn.addEventListener("click", () => {
        count -= 1;
        countElem.textContent = count;
        console.log(count);
    });
    resetBtn.addEventListener("click", () => {
        count = 0;
        countElem.textContent = count;
        console.log(count);
    });
    saveBtn.addEventListener("click", () => {
        if (saveEl.textContent === "Previous Entries:") {
            saveEl.textContent += count;
        } else {
            saveEl.textContent += `, ${count}`;
        }
    });
    countElem.textContent = count;
    console.log(document.body.textContent);
}

main();
