import View from "./View.js";
class OurCarsView extends View {
  _parentEl = document.querySelector(".our-cars");

  /**
   * @param {*} callBackFunction -model function that handles page changing
   * @callback - is being called differently based of button that is pressed
   */
  setBtnEvents(callBackFunction) {
    const lastPageBtn = document.querySelector(".last-page-btn");
    const nextPageBtn = document.querySelector(".next-page-btn");
    if (!lastPageBtn || !nextPageBtn) return;

    lastPageBtn.addEventListener("click", function () {
      callBackFunction("last");
    });
    nextPageBtn.addEventListener("click", function () {
      callBackFunction("next");
    });
  }

  addHandlerOurCars(handler) {
    if (
      window.location.href.includes("ourCars.html") ||
      window.location.href.includes("ourCars") ||
      window.location.href.includes("ourcars")
    ) {
      handler();
    }
  }
}
export default new OurCarsView();
