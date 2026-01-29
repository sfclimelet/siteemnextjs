import Link from "next/link";

export default function NavbarHomeItem({ item }) {
  const Icon = item.icon;

  if (!item.href) {
    return (
      <li id={item.id} className="nb-item">
        <button className="nb-link">
          {Icon && <Icon className="nb-icon" />}
          <span className="nb-text">{item.label}</span>
        </button>
      </li>
    );
  }

  return (
    <li id={item.id} className="nb-item">
      <Link href={item.href} className="nb-link">
        {Icon && <Icon className="nb-icon" />}
        <span className="nb-text">{item.label}</span>
      </Link>
    </li>
  );
}