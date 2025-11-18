"use client";

export function navbarAnimated() {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const nb = document.getElementById("nbHome");
      if (nb) {
        if (window.scrollY > 20) nb.classList.add("scrolled");
        else nb.classList.remove("scrolled");
      }
    });
  }
}