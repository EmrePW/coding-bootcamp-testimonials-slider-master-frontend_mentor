const nav_btns= document.querySelectorAll(".nav-button");

nav_btns.forEach( (element) => {
    element.addEventListener("click", () => {
        const current_element = document.querySelector(".testimonial:not(.hidden)");
        const hidden_element = document.querySelector(".testimonial.hidden");
        // var index = current_element.dataset.index; //the active elements index.
        // const next_element = document.querySelector(`.testimonial[data-index="${(index + 1) % 2}"]`) // this calculation always results 1 why ?
        // WHYYY

        current_element.classList.add("hidden")
        hidden_element.classList.remove("hidden");
    })
}
)