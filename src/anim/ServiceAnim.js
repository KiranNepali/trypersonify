export const ServicesAnim = () => {
  const elApp = document.querySelector("#app");

  document.body.addEventListener("mousemove", (event) => {
    elApp.style.setProperty("--x", event.clientX);
    elApp.style.setProperty("--y", event.clientY);
  });

  // Replay animation by hiding & showing the element again
  let el = elApp;
  el.addEventListener("click", function (e) {
    el.hidden = true;
    requestAnimationFrame(() => {
      el.hidden = false;
    });
  });
};
