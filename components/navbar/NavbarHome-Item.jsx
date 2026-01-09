import Link from "next/link";

export default function NavbarHomeItem({ item }) {
  const Icon = item.icon;

  return (
    <li className="nb-item">
      <Link
        href={item.href}
        className="nb-link"
        aria-label={item.label}
      >
        {Icon && <Icon size={18} />}
        <span>{item.label}</span>
      </Link>
    </li>
  );
}