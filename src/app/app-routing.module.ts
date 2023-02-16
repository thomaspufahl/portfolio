import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '@layout/main/main.component';

import { VisitorModule } from "@modules/visitor/visitor.module";
import { UserModule } from '@modules/user/user.module';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('@modules/visitor/visitor.module').then((m): typeof VisitorModule => m.VisitorModule)
			},
			{
				path: 'home', //PAGE USER-LOGGED
				loadChildren: () => import('@modules/user/user.module').then((m): typeof UserModule => m.UserModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
