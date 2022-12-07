document.addEventListener('DOMContentLoaded', function () {

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
        }
    });



});