const modalEl = document.querySelector(".backdrop");
const openModalBtnEl = document.querySelector(".order-service-button");
const closeModalBtnEl = document.querySelector(".close-button");
const bodyEl = document.body;

openModalBtnEl.addEventListener("click", onOpenModal);

function onOpenModal() {
  window.addEventListener("keydown", onEscKeyPress);
  modalEl.addEventListener("click", onBackdropClick);
  closeModalBtnEl.addEventListener("click", onCloseModal);

  modalEl.classList.add("is-open");
  bodyEl.style.overflow = "hidden";
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  modalEl.removeEventListener("click", onBackdropClick);
  closeModalBtnEl.removeEventListener("click", onCloseModal);

  modalEl.classList.remove("is-open");
  bodyEl.style.overflow = "visible";
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  if (event.key === "Escape") {
    onCloseModal();
  }
}
