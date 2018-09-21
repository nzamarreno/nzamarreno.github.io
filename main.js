import "./main.scss";

const $half = document.querySelectorAll(".wrapper__half");

$half.forEach(item => {
  item.addEventListener("click", event => {
    document.querySelector(".main").classList.add("main__animation");

    const currentElement = event.currentTarget;

    setTimeout(
      () => {
        const illustrationCurrent = currentElement.getAttribute("data-role");

        document
          .querySelectorAll(".hashtag")
          .forEach(item => (item.style.display = "none"));
        currentElement.style.flex = "0 0 100%";

        // Get current Illustration
        const $currentIllustration = document.querySelector(
          `.${illustrationCurrent}`
        );
        $currentIllustration.classList.add(`${illustrationCurrent}__animation`);
      },
      1000,
      currentElement
    );
  });
});
