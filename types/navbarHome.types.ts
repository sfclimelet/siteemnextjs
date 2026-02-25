export interface MenuItem {
    id: string;
    type: "dropdown" | "link" | "search";
    label: string;
    href?: string;
    icon?: React.ComponentType<{clasName?: string}>;
    children?:MenuItem[];
}