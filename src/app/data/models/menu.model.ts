// menu.model.ts
export interface SubMenu {
    id: number;
    mainMenuId: number;  // Changed from main_menuid
    status: boolean;     // Changed from string to boolean
    active: boolean;
    subMenuName: string; // Changed from sub_menu_name
    path: string;
    role: string;
    icon?: string;
}

export interface MainMenu {
    id: number;
    menuName: string;    // Changed from menu_name
    module: string;
    status: boolean;     // Changed from string to boolean
    active: boolean;
    path: string;
    role: string;
    icon?: string;
    subMenus?: SubMenu[]; // Changed from submenus to subMenus (capital M)
}