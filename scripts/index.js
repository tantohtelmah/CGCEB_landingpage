window.addEventListener("scroll", function() {
    const header = document.getElementById("landing_header");
    if (window.scrollY > 100) {
        header.classList.add("bg-white", "shadow-md"); // Customize styles as desired
    } else {
        header.classList.remove("bg-white", "shadow-md");
    }
});
