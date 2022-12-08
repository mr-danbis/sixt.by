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
    const reviewsSlider = new Slider();

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

    reviewsSlider.addSlider(".reviews__slider", {
        margin: 40,
        responsive: {
            0: {
                items: 1,
            },

            850: {
                items: 2,
            },

            1400: {
                items: 3,
            },
        },
    });

    function showMoreReview(){
        const moreReviewBtn = document.querySelectorAll('.reviews__slide-more');
        moreReviewBtn.forEach(btn => {
            btn.addEventListener('click', ()=> {
                
            });
        });

    }
    showMoreReview();

});