import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';



@NgModule({
	declarations: [
	],
	imports: [
		CommonModule,
		CardComponent,
		TitleComponent,
	]
})
export class SharedModule { }
