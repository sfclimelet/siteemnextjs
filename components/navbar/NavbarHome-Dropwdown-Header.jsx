export default function DropdownHeader({Icon, onClose}) {
    return (
        <li className="nb-dropdown-header">
            <button type="button" className="nb-dropdown-circle" onClick={onClose} aria-label="Fechar Menu">
                {Icon && <Icon className="nb-icon" />}
            </button>
        </li>
    )
}