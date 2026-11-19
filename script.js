document.addEventListener("DOMContentLoaded", () => {

  const projectLinks = {
    vortex: "https://vortex1-bnt1.onrender.com",
    clientflow: "https://clientflow-65m7.onrender.com",
    nexora: "https://nexora-jcmq.onrender.com",
    barber: "https://barber-club1.onrender.com"
  };

  document.querySelectorAll("[data-link]").forEach(element => {
    const key = element.dataset.link;
    const url = projectLinks[key];

    if (url && !url.startsWith("ВСТАВЬ")) {
      element.setAttribute("href", url);
      element.setAttribute("target", "_blank");
      element.setAttribute("rel", "noopener noreferrer");
    }
  });

});
