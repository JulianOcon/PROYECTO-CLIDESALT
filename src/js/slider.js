document.querySelectorAll(".slider").forEach(slider => {
    const images = JSON.parse(slider.dataset.images);
    const img = slider.querySelector(".slider-img");
    const next = slider.querySelector(".next");
    const prev = slider.querySelector(".prev");

    let index = 0;
    let paused = false;

    img.src = images[index];

    function changeImage(i) {
        img.classList.add("opacity-0");
        setTimeout(() => {
            index = (i + images.length) % images.length;
            img.src = images[index];
            img.classList.remove("opacity-0");
        }, 300);
    }

    next.onclick = () => changeImage(index + 1);
    prev.onclick = () => changeImage(index - 1);

    setInterval(() => {
        if (!paused) changeImage(index + 1);
    }, 4000);

    slider.addEventListener("mouseenter", () => paused = true);
    slider.addEventListener("mouseleave", () => paused = false);
}); 