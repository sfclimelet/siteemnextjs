export default function NavSearch({ item }) {
  return (
    <li id={item.id} className="nb-item nb-search">
      <form className="nb-search-form">
        <input
          type="text"
          placeholder="Buscar..."
          className="nb-search-input"
        />
        <button type="submit" className="nb-search-btn">
          {item.icon && <item.icon className="nb-search-icon" />}
        </button>
      </form>
    </li>
  );
}