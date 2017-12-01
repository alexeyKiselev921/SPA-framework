import { Injectable } from '@angular/core';

export interface MenuItem {
    text: string;
    icon: string;
    route: string;
    submenu: Array<MenuItem>;
}


@Injectable()
export class MenuService {
    items: Array<MenuItem>;
    isVertical = false;
    showingLeftsSideMenu = false;

    toogleLeftSideMenu(): void {
        this.isVertical = true;
        this.showingLeftsSideMenu = !this.showingLeftsSideMenu;
    }

    toogleOrientation(): void {
        this.isVertical = !this.isVertical;
    }
}
