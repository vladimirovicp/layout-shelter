const ourFriends = document.querySelector('#our-friends');

if (ourFriends){
    const carouselWrapper = ourFriends.querySelector("#carousel-wrapper");
    const carousel = carouselWrapper.querySelector(".carousel");

    const leftArrow = ourFriends.querySelector(".left-arrow");
    const rightArrow = ourFriends.querySelector(".right-arrow");


    const moveLeft = () => {
        console.log('123')
        carousel.classList.add("transition-right");
    }



    leftArrow.addEventListener('click', moveLeft);









}