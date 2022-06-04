let ourSections = [
  {
    name: "restaurant Section",
    link: "section1",
    id: "restaurant",
    lordicon: `
      <lord-icon
        src="https://cdn.lordicon.com/xbyoroeu.json"
        trigger="loop"
        colors="primary:#2F3A8F,secondary:#2F3A8F"
        style="width:150px;height:150px"
        class="mt-5"
      ></lord-icon>
    `,
    sliderImage: [
      "imgs/ourSections imgs/Slider-imgs/restaurant-slider-1.png",
      "imgs/ourSections imgs/Slider-imgs/restaurant-slider-2.png",
      "imgs/ourSections imgs/Slider-imgs/restaurant-slider-3.png",
    ],
    mealImage: [
      "imgs/ourSections imgs/Meals/restaurant-meal-1.png",
      "imgs/ourSections imgs/Meals/restaurant-meal-2.png",
      "imgs/ourSections imgs/Meals/restaurant-meal-3.png",
    ],
    mealName: ["Fried Egg", "Lamp Salad", "Scallop Sashimi"],
  },

  {
    name: "kids Section",
    link: "section2",
    id: "kids",
    lordicon: `
      <lord-icon
        src="https://cdn.lordicon.com/rwotyanb.json"
        trigger="loop"
        colors="primary:#2F3A8F,secondary:#2F3A8F"
        style="width:150px;height:150px"
        class="mt-5"
      ></lord-icon>`,
    sliderImage: [
      "imgs/ourSections imgs/Slider-imgs/kids-slider-1.png",
      "imgs/ourSections imgs/Slider-imgs/kids-slider-2.png",
      "imgs/ourSections imgs/Slider-imgs/kids-slider-3.png",
    ],
    mealImage: [
      "imgs/ourSections imgs/Meals/kids-meal-1.png",
      "imgs/ourSections imgs/Meals/kids-meal-2.png",
      "imgs/ourSections imgs/Meals/kids-meal-3.png",
    ],
    mealName: ["Chicken Nuggets", "Cheeseburger", "Crilled Cheese"],
  },

  {
    name: "Pizzeria",
    link: "section3",
    id: "pezzeria",
    lordicon: `
      <lord-icon
        src="https://cdn.lordicon.com/jpdtnwas.json"
        trigger="loop"
        colors="primary:#2F3A8F,secondary:#2F3A8F"
        style="width:150px;height:150px"
        class="mt-5"
      ></lord-icon>
    `,
    sliderImage: [
      "imgs/ourSections imgs/Slider-imgs/pizzeria-slider-1.png",
      "imgs/ourSections imgs/Slider-imgs/pizzeria-slider-2.png",
      "imgs/ourSections imgs/Slider-imgs/pizzeria-slider-3.png",
    ],
    mealImage: [
      "imgs/ourSections imgs/Meals/pizzeria-meal-1.png",
      "imgs/ourSections imgs/Meals/pizzeria-meal-2.png",
      "imgs/ourSections imgs/Meals/pizzeria-meal-3.png",
    ],
    mealName: ["Pepperoni", "Margherita", "Hawaiian"],
  },

  {
    name: "Coffee & Ice Cream",
    link: "section4",
    id: "coffee",
    lordicon: `
      <lord-icon
        src="https://cdn.lordicon.com/uxtcmjmu.json"
        trigger="loop"
        colors="primary:#2F3A8F,secondary:#2F3A8F"
        style="width:150px;height:150px"
        class="mt-5"
      ></lord-icon>
    `,
    sliderImage: [
      "imgs/ourSections imgs/Slider-imgs/coffe-slider-1.png",
      "imgs/ourSections imgs/Slider-imgs/coffe-slider-2.png",
      "imgs/ourSections imgs/Slider-imgs/coffe-slider-3.png",
    ],
    mealImage: [
      "imgs/ourSections imgs/Meals/coffe-meal-1.png",
      "imgs/ourSections imgs/Meals/coffe-meal-2.png",
      "imgs/ourSections imgs/Meals/coffe-meal-3.png",
    ],
    mealName: ["Mocha", "Vanilla IceCream", "Cappuccino"],
  },

  {
    name: "Grill Section",
    link: "section5",
    id: "grill",
    lordicon: `
      <lord-icon
        src="https://cdn.lordicon.com/coqbeapw.json"
        trigger="loop"
        colors="primary:#2F3A8F,secondary:#2F3A8F"
        style="width:150px;height:150px"
        class="mt-5"
      ></lord-icon>
    `,
    sliderImage: [
      "imgs/ourSections imgs/Slider-imgs/grill-slider-1.png",
      "imgs/ourSections imgs/Slider-imgs/grill-slider-2.png",
      "imgs/ourSections imgs/Slider-imgs/grill-slider-3.png",
    ],
    mealImage: [
      "imgs/ourSections imgs/Meals/grill-meal-1.png",
      "imgs/ourSections imgs/Meals/grill-meal-2.png",
      "imgs/ourSections imgs/Meals/grill-meal-3.png",
    ],
    mealName: ["Chicken Wings", "Kebab", "Sausages"],
  },

  {
    name: "Pool Section",
    link: "section6",
    id: "pool",
    lordicon: `
      <lord-icon
        src="https://cdn.lordicon.com/jlpgasyu.json"
        trigger="loop"
        colors="primary:#2F3A8F,secondary:#2F3A8F"
        style="width:150px;height:150px"
        class="mt-5"
      ></lord-icon>
    `,
    sliderImage: [
      "imgs/ourSections imgs/Slider-imgs/pool-slider-1.png",
      "imgs/ourSections imgs/Slider-imgs/pool-slider-2.png",
      "imgs/ourSections imgs/Slider-imgs/pool-slider-3.png",
    ],
    mealImage: [
      "imgs/ourSections imgs/Meals/pool-meal-1.png",
      "imgs/ourSections imgs/Meals/pool-meal-2.png",
      "imgs/ourSections imgs/Meals/pool-meal-3.png",
    ],
    mealName: ["Chicken Tacos", "Burger", "Tuna Sandwich"],
  },
];

ourSections.forEach(({name, link, id, lordicon, sliderImage: [slider1, slider2, slider3], mealImage: [mealI1, mealI2, mealI3], mealName: [mealN1, mealN2, mealN3]} = item) => {
  document.write(`
    <div id="${link}" class="main-title mb-5 position-relative text-center mt-5">
      ${lordicon}
      <h2>${name}</h2>
    </div>
    <div id="${id}" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#${id}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#${id}" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#${id}" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src="${slider1}" alt="" class="w-md-100">
        </div>

        <div class="carousel-item" data-bs-interval="3000">
          <img src="${slider2}" alt="" class="w-md-100">
        </div>

        <div class="carousel-item" data-bs-interval="3000">
          <img src="${slider3}" alt="" class="w-md-100">
        </div>

      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container mt-5 mb-5 text-center">
      <h1 class="mb-3 mt-5">Our Special Meals</h1>
      <div class="row">
        <div class="col-md-4">
          <img class="special-meal mt-4" src="${mealI1}" alt="${mealN1} image">
          <h3 class="mt-3 h4 text-muted">${mealN1}</h3>
        </div>
        <div class="col-md-4">
          <img class="special-meal mt-4" src="${mealI2}" alt="${mealN2} image">
          <h3 class="mt-3 h4 text-muted">${mealN2}</h3>
        </div>
        <div class="col-md-4">
          <img class="special-meal mt-4" src="${mealI3}" alt="${mealN3} image">
          <h3 class="mt-3 h4 text-muted">${mealN3}</h3>
        </div>
      </div>
    </div>
  `);
});
