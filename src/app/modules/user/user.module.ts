import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
	declarations: [
		HomeComponent,
	],
	imports: [
		CommonModule,
		UserRoutingModule
	]
})
export class UserModule { }
