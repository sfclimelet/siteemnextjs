export default function DropdownHeader({Icon, label, onClose}) {
    return (
        <li className="nb-dropdown-header">
            <button type="button" className="nb-dropdown-circle" onClick={onClose} aria-label={`Fechar Menu ${label}`} title={`Fechar menu ${label}`} aria-expanded={true}>
                {Icon && <Icon className="nb-icon" />}
            </button>
        </li>
    )
}