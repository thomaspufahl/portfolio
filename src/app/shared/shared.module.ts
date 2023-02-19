import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';



@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		CardComponent,
		TitleComponent,
		EditButtonComponent
	]
})
export class SharedModule { }
