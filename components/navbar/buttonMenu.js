export function initHamburgerMenu() {
  const menuBtn = document.getElementById("MenuHamburger");
  if (!menuBtn) return;

  const updateHamburger = () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.classList.toggle("active", isOpen);
  };

  menuBtn.addEventListener("click", updateHamburger);

  // retorna cleanup para o useEffect
  return () => {
    menuBtn.removeEventListener("click", updateHamburger);
  };
}