import Link from "next/link";

export default function NavbarHomeItem({ item }) {
  const Icon = item.icon;

  // 👉 Se NÃO tiver href, vira botão
  if (!item.href) {
    return (
      <li className="nb-item">
        <button
          type="button"
          className="nb-link"
          aria-label={item.label}
        >
          {Icon && <Icon />}
          <span>{item.label}</span>
        </button>
      </li>
    );
  }

  // 👉 Se tiver href, vira Link
  return (
    <li className="nb-item">
      <Link
        href={item.href}
        className="nb-link"
        aria-label={item.label}
      >
        {Icon && <Icon />}
        <span>{item.label}</span>
      </Link>
    </li>
  );
}