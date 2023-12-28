document.addEventListener('DOMContentLoaded', function() {
    var burger = document.getElementById("burger");
    var sideMenu = document.getElementById("side-menu");
    var topLinks = document.querySelectorAll(".top-link");
    var sideLinks = document.querySelectorAll(".side-link");

    // Function to scroll to the target element
    function scrollToTarget(targetElement) {
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Function to handle link clicks
    function handleLinkClicks(links) {
        for (var link of links) {
            link.addEventListener("click", function (e) {
                e.preventDefault(); // Prevent default link behavior

                // Remove the "active" class from all links
                for (var x of topLinks) {
                    x.classList.remove("active");
                }
                for (var x of sideLinks) {
                    x.classList.remove("active");
                }

                // Add the "active" class to the clicked link
                this.classList.add("active");

                // Get the target ID from the link's "href" attribute
                var targetId = this.getAttribute('href').substring(1);

                // Check if the target ID is 'header'
                if (targetId === 'header') {
                    // Scroll smoothly to the top of the page
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Use the target ID to find the corresponding element
                    var targetElement = document.getElementById(targetId);

                    // Scroll smoothly to the target element
                    scrollToTarget(targetElement);
                }

                // Close the side menu (if it's open)
                sideMenu.classList.remove("translateX");
                burger.classList.remove("rotate");
            });
        }
    }

    // Handle clicks for both topLinks and sideLinks
    handleLinkClicks(topLinks);
    handleLinkClicks(sideLinks);

    // Burger Click Event
    burger.addEventListener("click", function(){
        sideMenu.classList.toggle("translateX");
        burger.classList.toggle("rotate");
    });

    // Window Resize Event
    window.addEventListener("resize", function(){
        if(window.innerWidth > 768){
            sideMenu.classList.remove("translateX");
            burger.classList.remove("rotate");
        }
    });
});
