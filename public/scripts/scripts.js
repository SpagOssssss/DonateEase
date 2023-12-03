document.addEventListener("DOMContentLoaded", function () {
    const ongsLink = document.getElementById("ongs-link");
    const ongsSection = document.getElementById("ongs");

    ongsLink.addEventListener("click", function () {
        ongsSection.classList.toggle("show");
    });
});
