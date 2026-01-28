"use client";

export default function NavSearch({ item }) {
  const Icon = item.icon;

  return (
    <li id={item.id} className="nb-item nb-search">
      <form
        role="search"
        className="nb-search-form"
        onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            className="nb-search-input"
            placeholder="Buscar..."
            aria-label="Buscar" />

          <button
            type="submit"
            className="nb-search-btn"
            aria-label="Pesquisar" title="Pesquisar" >
            {Icon && <Icon className="nb-search-icon" />}
          </button>
      </form>
    </li>
  );
}