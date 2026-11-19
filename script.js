document.addEventListener("DOMContentLoaded", () => {

  // Ссылки на проекты — вставь свои настоящие URL
  const projectLinks = {
    vortex: "https://vortex1-bnt1.onrender.com
",
    clientflow: "https://clientflow-65m7.onrender.com",
    nexora: "https://nexora-jcmq.onrender.com
",
    barber: "https://barber-club1.onrender.com"
  };

  document.querySelectorAll("[data-link]").forEach(button => {
    const key = button.dataset.link;
    const url = projectLinks[key];

    if (url && url.trim() !== "") {
      button.href = url;
      button.target = "_blank";
    } else {
      button.addEventListener("click", event => {
        event.preventDefault();
        alert("Ссылка на этот проект пока не добавлена.");
      });
    }
  });

  // Плавное появление карточек
  const projects = document.querySelectorAll(".project");

  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.1}s`;
  });

});