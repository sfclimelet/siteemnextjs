import { initHamburgerMenu } from "./buttonMenu";

export function setupNavbarDropdowns() {
  if (typeof window === "undefined") return () => {};

  const cleanupHamburger = initHamburgerMenu();

  const dropdownParents = Array.from(
    document.querySelectorAll<HTMLElement>(".nav-item.dropdown")
  );

  const removers: Array<() => void> = [];

  dropdownParents.forEach((parent) => {

    /* ===============================
       IGNORA SEARCH
    =============================== */
    if (parent.id === "LI-search") return;

    const toggleBtn =
      parent.querySelector<HTMLButtonElement>("[data-bs-toggle='dropdown']");
    const dropdownMenu =
      parent.querySelector<HTMLUListElement>(".dropdown-menu");

    if (!toggleBtn || !dropdownMenu) return;

    /* ===============================
       EVITA DUPLICAÇÃO
    =============================== */
    if (dropdownMenu.querySelector(".dropdown-top-icon")) return;

    /* ===============================
       CRIA TOP ICON (LI — HTML VÁLIDO)
    =============================== */
    const topIcon = document.createElement("li");
    topIcon.className = "dropdown-top-icon";

    dropdownMenu.prepend(topIcon);

    /* ===============================
       HANDLERS
    =============================== */
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

    /* ===============================
       BOOTSTRAP EVENTS
    =============================== */
    parent.addEventListener("show.bs.dropdown", onShow as EventListener);
    parent.addEventListener("hide.bs.dropdown", onHide as EventListener);

    /* ===============================
       CLICK NO TOP ICON
    =============================== */
    const onGhostClick = () => toggleBtn.click();
    topIcon.addEventListener("click", onGhostClick);

    /* ===============================
       CLEANUP
    =============================== */
    removers.push(() =>
      parent.removeEventListener("show.bs.dropdown", onShow as EventListener)
    );
    removers.push(() =>
      parent.removeEventListener("hide.bs.dropdown", onHide as EventListener)
    );
    removers.push(() =>
      topIcon.removeEventListener("click", onGhostClick)
    );
    removers.push(() => {
      if (topIcon.parentNode) {
        topIcon.parentNode.removeChild(topIcon);
      }
    });
  });

  /* ===============================
     CLEANUP FINAL
  =============================== */
  return () => {
    cleanupHamburger && cleanupHamburger();
    removers.forEach((fn) => {
      try {
        fn();
      } catch {
        /* ignore */
      }
    });
  };
}