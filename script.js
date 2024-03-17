const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) =>{
    const btn = accordion.querySelector(".accordion-btn");

    btn.addEventListener("click", ()=>{
        accordion.querySelector(".xmark-icon").classList.toggle("active");
        accordion.querySelector(".plus-icon").classList.toggle("active");
        accordion.querySelector(".accordion-text").classList.toggle("active"); // accordion dan texti çek aç kapa!


    })
    



})