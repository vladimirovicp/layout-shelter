
const burger = document.querySelector('.burger');
const burgerList = document.querySelector('.burger-list');


if (burger) {
    burger.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        burger.classList.toggle('open');
        burgerList.classList.toggle('open');
    });
}

let burgerLinks = document.querySelectorAll('.burger-link');

if (burgerLinks.length > 0) {
    burgerLinks.forEach(burgerLink => {
        burgerLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {

        if (burger.classList.contains('open')) {

            document.body.classList.remove('_lock');
            burger.classList.remove('open');
            burgerList.classList.remove('open');

           

        }
    }

}



