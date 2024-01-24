function getElement(selection) {
  const element = document.querySelector(`.${selection}`);
  if (element) return element;

  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery {
  constructor(element) {
    this.container = element;
    this.imgList = [...element.querySelectorAll(".img")];

    // modal elements
    this.modalContainer = getElement("modal");
    this.closeBtn = getElement("close-btn");
    this.prevBtn = getElement("prev-btn");
    this.nextBtn = getElement("next-btn");
    this.mainImage = getElement("main-img");
    this.imageName = getElement("image-name");
    this.modalImages = getElement("modal-images");
    this.handleModalClick = this.handleModalClick.bind(this);

    this.container.addEventListener("click", this.chooseImage.bind(this));
  }

  chooseImage(event) {
    const target = event.target;
    if (target.classList.contains("img")) this.openModal(target, this.imgList);
  }

  closeModal() {
    this.modalContainer.removeEventListener("click", this.handleModalClick);

    this.modalContainer.classList.remove("open");
  }

  nextImage() {
    const selectedImage = this.modalImages.querySelector(".selected");
    const nextImage =
      selectedImage.nextElementSibling ?? this.modalImages.firstElementChild;
    nextImage.classList.add("selected");
    selectedImage.classList.remove("selected");
    this.setMainImage(nextImage);
  }

  prevImage() {
    const selectedImage = this.modalImages.querySelector(".selected");
    const prevImage =
      selectedImage.previousElementSibling ?? this.modalImages.lastElementChild;
    prevImage.classList.add("selected");
    selectedImage.classList.remove("selected");
    this.setMainImage(prevImage);
  }

  chooseImageFromModalList(target) {
    const selectedImage = this.modalImages.querySelector(".selected");
    target.classList.add("selected");
    if (selectedImage !== target) selectedImage.classList.remove("selected");
    this.setMainImage(target);
  }

  setMainImage(selectedImage) {
    this.mainImage.src = selectedImage.src;

    this.imageName.textContent = selectedImage.title;
  }

  handleModalClick(event) {
    const target = event.target;
    console.log(target);
    if (
      target.classList.contains("close-btn") ||
      target.classList.contains("fa-times")
    ) {
      this.closeModal();
    } else if (
      target.classList.contains("next-btn") ||
      target.classList.contains("fa-chevron-right")
    ) {
      this.nextImage();
    } else if (
      target.classList.contains("prev-btn") ||
      target.classList.contains("fa-chevron-left")
    ) {
      this.prevImage();
    } else if (target.classList.contains("modal-img")) {
      this.chooseImageFromModalList(target);
    }
  }

  openModal(selectedImage, list) {
    this.modalImages.innerHTML = list
      .map(
        (img) =>
          `<img src=${img.src} title=${img.title} id=${img.dataset.id} class="${
            selectedImage.dataset.id === img.dataset.id
              ? "selected modal-img"
              : "modal-img"
          }" />`
      )
      .join("");
    console.log(selectedImage.dataset.id);
    this.setMainImage(selectedImage);
    this.modalContainer.classList.add("open");

    this.modalContainer.addEventListener("click", this.handleModalClick);
  }
}

const nature = new Gallery(getElement("nature"));
const city = new Gallery(getElement("city"));
