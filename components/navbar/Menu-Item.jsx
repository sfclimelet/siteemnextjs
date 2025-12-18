import Link from "next/link";

export default function MenuItem({ item }) {

  // SEARCH é um tipo especial
  if (item.type === "search") {
    return (
      <>
        <li id={`LI-${item.id}`} className="nav-item dropdown">
          <button id={item.buttonId} className="nav-link nav-icon" data-bs-toggle="dropdown">
            {item.icon}
          </button>

          <ul className="dropdown-menu dropdown-menu-end search-dropdown">
            <li>
              <div className="dropdown-search-box">
                <input className="form-control search-input" placeholder="Buscar..." />
                <button className="search-btn">{item.icon}</button>
              </div>
            </li>
          </ul>
        </li>
        {/* Barra Vertical */}
        <div className="nb-divider" aria-hidden="true" ></div>
      </>
    );
  }

  return (
    <li id={`LI-${item.id}`} className="nav-item dropdown">
      <button id={item.buttonId} className="nav-link" data-bs-toggle="dropdown">
        {item.icon}
      </button>

      <ul className="dropdown-menu dropdown-menu-end">
        {item.items.map((sub, i) => (
          <li key={i}>
            <Link className="dropdown-item" href={sub.href}>
              {sub.icon} {sub.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}