import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { CardComponent } from '@shared/components/card/card.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { EditButtonComponent } from '@shared/components/edit-button/edit-button.component';


@NgModule({
	declarations: [
		HomeComponent,
		ProjectsComponent,
	],
	imports: [
		CommonModule,
		UserRoutingModule,
		CardComponent,
		TitleComponent,
		EditButtonComponent,
	]
})
export class UserModule { }
