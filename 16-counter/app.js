const getElement = (className) => {
  const element = document.querySelector(`.${className}`);
  if (element) return element;
  throw new Error(`Element with class name of '${className}' doesn't exist`);
};

class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    this.decreaseBtn = element.querySelector(".decrease");
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.valueSpan = element.querySelector(".value");
    this.valueSpan.textContent = this.value;

    //bind current instance to the function
    // this.decrease = this.decrease.bind(this);
    // this.reset = this.reset.bind(this);
    // this.increase = this.increase.bind(this);

    // this.decreaseBtn.addEventListener("click", this.decrease);
    // this.resetBtn.addEventListener("click", this.reset);
    // this.increaseBtn.addEventListener("click", this.increase);

    //*instead of attaching an event listener to each button
    this.btnContainer = element.querySelector(".btn-container");
    this.btnContainer.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(event) {
    const target = event.target;
    console.log(target);

    if (target.classList.contains("decrease")) {
      this.decrease();
    } else if (target.classList.contains("reset")) {
      this.reset();
    } else if (target.classList.contains("increase")) {
      this.increase();
    }
  }

  decrease() {
    this.value--;
    this.valueSpan.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueSpan.textContent = this.value;
  }
  increase() {
    this.value++;
    this.valueSpan.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement("first-counter"), 100);
const secondCounter = new Counter(getElement("second-counter"), 200);
