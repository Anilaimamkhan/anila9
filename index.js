let bars = document.querySelector(".header .fa-bars");


let ul = document.querySelector("nav ul");
let times = document.querySelector("ul .fa-times");

bars.onclick = () =>{
bars.classList.toggle("fa-times") ;

   ul.classList.toggle("active");
}
times.onclick = () => {
    ul.classList.remove("active");

}


// accordion start



let accordion = document.querySelectorAll(".accordion-2 .accordion");

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(subaccor => {
            subaccor.classList.remove("active");
        });

        acco.classList.add("active")
    }
});
// accordion and



    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoPlay:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // <script>
      $('.count').counterUp({
    delay: 10,
    time: 1000
});
// </script>



