import Link from "next/link";

export default function NavDropdown({ item, openItem, handleToggle }) {
  const isOpen = openItem === item.id;       // verifica se é o dropdown aberto
  const Icon = item.icon;

  return (
    <li
      id={item.id}
      className={`nb-item ${isOpen ? "open" : ""}`}
    >
      <button
        type="button"
        className="nb-link"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => handleToggle(item.id)}   // abre/fecha dropdown via pai
      >
        {Icon && <Icon className="nb-icon" />}
        <span className="nb-text-menu">{item.label}</span>
      </button>

      <ul className="nb-dropdown">
        {item.children?.map(child => {
          const ChildIcon = child.icon;
          return (
            <li key={`${item.id}-${child.href}`}>
              <Link href={child.href} className="nb-dropdown-link">
                {ChildIcon && <ChildIcon className="nb-icon" />}
                <span className="nb-text">{child.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}