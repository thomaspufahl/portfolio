import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './pages/visitor/visitor.component';
import { TitleComponent } from './components/title/title.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { CardComponent } from '@shared/components/card/card.component';


@NgModule({
	declarations: [
		VisitorComponent,
		TitleComponent,
		ProjectsComponent,
	],
	imports: [
		CommonModule,
		VisitorRoutingModule,
		CardComponent,
	]
})
export class VisitorModule { }
