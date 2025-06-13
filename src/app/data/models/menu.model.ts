export interface SubMenu {
    id: number;
    main_menuid: number;
    status: string;
    active: boolean;
    sub_menu_name: string;
    path: string;
    role: string;
    icon?: string;
}

export interface MainMenu {
    id: number;
    menu_name: string;
    module: string;
    status: string;
    active: boolean;
    path: string;
    role: string;
    icon?: string;
    submenus?: SubMenu[];
}