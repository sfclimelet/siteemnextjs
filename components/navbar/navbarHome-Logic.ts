import { initHamburgerMenu } from "./buttonMenu";

export function setupNavbarDropdowns() {
  if (typeof window === "undefined") return () => {};
   
  const cleanupHamburger = initHamburgerMenu();

  const dropdownParents = Array.from(document.querySelectorAll<HTMLElement>(".nav-item.dropdown"));

  // Guardar referências para remoção
  const removers: Array<() => void> = [];

  dropdownParents.forEach((parent) => {
    // aqui assumimos que o toggle é um button
    const toggleBtn = parent.querySelector<HTMLButtonElement>("[data-bs-toggle='dropdown']");
    const dropdownMenu = parent.querySelector<HTMLElement>(".dropdown-menu");

    if (!toggleBtn || !dropdownMenu) return;

    // cria o top icon
    const topIcon = document.createElement("div");
    topIcon.className = "dropdown-top-icon";
    // inicialmente escondido por CSS (sem classe 'visible')
    dropdownMenu.prepend(topIcon);

    const onShow = () => {
      const icon = toggleBtn.querySelector("svg, i");
      if (icon) {
        const cloned = icon.cloneNode(true);
        topIcon.innerHTML = "";
        topIcon.appendChild(cloned);
      }
      toggleBtn.classList.add("is-active");
      topIcon.classList.add("visible");
    };

    const onHide = () => {
      toggleBtn.classList.remove("is-active");
      topIcon.classList.remove("visible");
    };

    // ligar aos eventos bootstrap (assume que o bootstrap está inicializado)
    parent.addEventListener("show.bs.dropdown", onShow as EventListener);
    parent.addEventListener("hide.bs.dropdown", onHide as EventListener);

    // clique no topIcon — dispara o click do botão (toggleBtn é HTMLButtonElement)
    const onGhostClick = () => toggleBtn.click();
    topIcon.addEventListener("click", onGhostClick);

    // salvar funções de remoção para cleanup
    removers.push(() => parent.removeEventListener("show.bs.dropdown", onShow as EventListener));
    removers.push(() => parent.removeEventListener("hide.bs.dropdown", onHide as EventListener));
    removers.push(() => topIcon.removeEventListener("click", onGhostClick));
    // se quiser remover o elemento topIcon no cleanup:
    removers.push(() => { if (topIcon.parentNode) topIcon.parentNode.removeChild(topIcon); });
  });

  // cleanup final
  return () => {
    cleanupHamburger && cleanupHamburger(); // se usar initHamburgerMenu
    removers.forEach((fn) => {
      try { fn(); } catch (e) { /* ignore */ }
    });
  };
}