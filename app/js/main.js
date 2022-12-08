document.addEventListener("DOMContentLoaded", function () {
  class Slider {
    constructor(owlElement, owlOptions) {
      this.owlElement = owlElement;
      this.owlOptions = owlOptions;
    }

    addSlider(owlElement, owlOptions) {
      $(owlElement).owlCarousel(owlOptions);
    }
  }
  const fleetSlider = new Slider();
  const partnerSlider = new Slider();

  fleetSlider.addSlider(".fleet__slider", {
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },

      750: {
        items: 2,
        margin: 20,
      },

      1300: {
        items: 3,
        margin: 40,
      },
    },
  });

  partnerSlider.addSlider(".partner__slider", {
    responsive: {
      0: {
        items: 2,
        margin: 20,
      },

      750: {
        items: 3,
        margin: 20,
      },

      1150: {
        items: 5,
        margin: 20,
      },

      1640: {
        items: 8,
        margin: 20,
      },
    },
  });
});
