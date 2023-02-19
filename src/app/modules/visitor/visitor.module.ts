import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './pages/visitor/visitor.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { CardComponent } from '@shared/components/card/card.component';
import { TitleComponent } from '@shared/components/title/title.component';


@NgModule({
	declarations: [
		VisitorComponent,
		ProjectsComponent,
	],
	imports: [
		CommonModule,
		VisitorRoutingModule,
		CardComponent,
		TitleComponent,
	]
})
export class VisitorModule { }
