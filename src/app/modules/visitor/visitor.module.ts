import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './pages/visitor/visitor.component';
import { TitleComponent } from './components/title/title.component';


@NgModule({
	declarations: [
		VisitorComponent,
		TitleComponent,
	],
	imports: [
		CommonModule,
		VisitorRoutingModule
	]
})
export class VisitorModule { }
