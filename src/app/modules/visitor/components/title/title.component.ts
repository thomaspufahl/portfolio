import { Component, Input } from '@angular/core';

@Component({
	selector: 'visitor-title',
	template: `<h1> {{title}} </h1>`,
	styleUrls: ['./title.component.css']
})
export class TitleComponent {
	@Input() title!: String;
}
