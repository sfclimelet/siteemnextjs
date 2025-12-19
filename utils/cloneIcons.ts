export function cloneIcon(
  sourceBtn: HTMLElement,
  targetContainer: HTMLElement
) {
  const icon = sourceBtn.querySelector("svg, i");

  if (!icon) return;

  const cloned = icon.cloneNode(true) as HTMLElement;

  targetContainer.innerHTML = "";
  targetContainer.appendChild(cloned);
}