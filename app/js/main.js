document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");

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
  const carSlider = new Slider();
  const carMobSlider = new Slider();

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

  carSlider.addSlider(".auto__slider", {
    responsive: {
      650: {
        items: 4,
        margin: 15,
      },
    },
  });

  carMobSlider.addSlider(".auto__slider--two", {
    items: 1,
    margin: 10,
  });

  function showMoreReview() {
    const showMoreCommentBtn = document.querySelectorAll(
      ".reviews__slide-more"
    );

    showMoreCommentBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let clickedItem = e.target.parentNode.parentNode;
        let clickedText = clickedItem.querySelector(".reviews__slide-text");

        if (btn.innerText == "Показать меньше") {
          btn.innerHTML = "Читать полностью";
          clickedText.style.webkitLineClamp = "8";
          clickedItem.style.zIndex = "0";
        } else {
          btn.innerHTML = "Показать меньше";
          clickedText.style.webkitLineClamp = "unset";
          clickedItem.style.zIndex = "1";
        }
      });
    });
  }
  showMoreReview();

  function openMobileSidebar() {
    const burgerBtn = document.querySelector(".header__burger");
    const closeMenuBtn = document.querySelector(".sidebar__close");
    const mobMenu = document.querySelector(".sidebar");

    burgerBtn.addEventListener("click", () => {
      mobMenu.style.transform = "translateX(0%)";
    });

    closeMenuBtn.addEventListener("click", () => {
      mobMenu.style.transform = "translateX(100%)";
    });

    mobMenu.addEventListener("click", (event) => {
      if (event.target) {
        mobMenu.style.transform = "translateX(100%)";
      }
    });
  }
  openMobileSidebar();

  function openForm() {
    const formBtn = document.querySelectorAll(".header__contact-btn");
    const formFooterBtn = document.querySelectorAll(".footer__call");
    const formSidebarBtn = document.querySelectorAll(".sidebar__call");
    const closeFormBtn = document.querySelectorAll(".modal__close");
    const modalForm = document.querySelector(".modal");

    formBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalForm.style.display = "block";
      });
    });

    formFooterBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalForm.style.display = "block";
      });
    });
    formSidebarBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalForm.style.display = "block";
      });
    });

    closeFormBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalForm.style.display = "none";
      });
    });
  }
  openForm();

  function costCar() {
    $(".auto__cost-lang--btn").click(function (event) {
      if ($(".auto__cost-lang").hasClass("one")) {
        $(".auto__cost-lang--btn").not($(this)).removeClass("active");
      }
      $(this).toggleClass("active");
    });
  }
  costCar();

  function showImg(event) {
    event = event || window.event;
    let iconImg = event.Target || event.srcElement;
    if (iconImg.tagName == "IMG") {
      const activeSlide = document
        .querySelector(".auto__slide-top")
        .querySelector(".auto__slide-top--img");
      activeSlide.src = iconImg.getAttribute("src");
    }
  }

  if (wrapper.classList.contains("auto_page")) {
    const imgWrapper = document.querySelector(".auto__slider");
    imgWrapper.addEventListener("click", (e) => {
      showImg(e);
    });
  }
});
