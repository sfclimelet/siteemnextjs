import Link from "next/link";

export default function NavbarHomeItem({ item, openItem, handleToggle }) {
  const Icon = item.icon;

  const isOpen = openItem === item.id;

  // Se não tiver href, usa button
  if (!item.href) {
    return (
      <li id={item.id} className={`nb-item ${isOpen ? "open" : ""}`}>
        <button
          type="button"
          className="nb-link"
          onClick={() => handleToggle(item.id)}
        >
          {Icon && <Icon className="nb-icon" />}
          <span className="nb-text">{item.label}</span>
        </button>
      </li>
    );
  }

  // Se tiver href, usa link
  return (
    <li id={item.id} className={`nb-item ${isOpen ? "open" : ""}`}>
      <Link
        href={item.href}
        className="nb-link"
        onClick={() => handleToggle(item.id)}
      >
        {Icon && <Icon className="nb-icon" />}
        <span className="nb-text">{item.label}</span>
      </Link>
    </li>
  );
}