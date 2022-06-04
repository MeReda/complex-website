// Our Services objects card
let ourServices = [
  {
    name: "restaurant section",
    link: "#section1",
    image: "imgs/restaurant.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nulla?  perspiciatis consequuntur beatae dolorem repellat neque ex vitae quos!",
  },
  {
    name: "kids section",
    link: "#section2",
    image: "imgs/kidsarea.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nulla?  perspiciatis consequuntur beatae dolorem repellat neque ex vitae quos!",
  },
  {
    name: "pizzeria",
    link: "#section3",
    image: "imgs/pizzeria.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nulla?  perspiciatis consequuntur beatae dolorem repellat neque ex vitae quos!",
  },
  {
    name: "coffe & ice cream",
    link: "#section4",
    image: "imgs/coffe.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nulla?  perspiciatis consequuntur beatae dolorem repellat neque ex vitae quos!",
  },
  {
    name: "grill section",
    link: "#section5",
    image: "imgs/kebab.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nulla?  perspiciatis consequuntur beatae dolorem repellat neque ex vitae quos!",
  },
  
  {
    name: "pool",
    link: "#section6",
    image: "imgs/picine.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nulla?  perspiciatis consequuntur beatae dolorem repellat neque ex vitae quos!",
  },
  {
    name: "animals section",
    link: "#section1",
    image: "imgs/animal.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nulla?  perspiciatis consequuntur beatae dolorem repellat neque ex vitae quos!",
  },
]
let actv = "active"
let actvCondition = 1
let showServices = ourServices.forEach(({name, link, image, description} = item) => {
  if (actvCondition > 1) {
    actv = ""
  }
  actvCondition ++
  document.write(`
    <div class="carousel-item ${actv}">
      <div class="row d-flex justify-content-center">
        <div class="card text-center shadow mb-5 mt-5" style="width: 20rem;">
          <img src="${image}" class="card-img-top mt-3" alt="${name}">
          <div class="card-body">
            <h5 class="card-title h3 text-capitalize">${name} </h5>
            <p class="card-text text-start">${description} </p>
            <a href="ourSections.html${link}" target="_blank" class="btn rounded-pill main-btn text-uppercase pt-2 pb-2 pe-5 ps-5 mt-3 mb-3 card-btn">See More</a>
          </div>
        </div>
      </div> 
    </div>
  `)
})