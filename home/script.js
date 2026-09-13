/* =========================================================
   LANDVAULT LANDING PAGE JS
========================================================= */


const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("open");

    });


    navigation
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

            });

        });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .step, .about-content, .about-visual"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});