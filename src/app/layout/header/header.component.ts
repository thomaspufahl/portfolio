import { Component, Output } from '@angular/core';

@Component({
	selector: 'layout-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	showMenu: boolean = false;
	openMenu(): void {
		this.showMenu = !this.showMenu;
	}

}
