import { Component, Input } from '@angular/core';

@Component({
	selector: 'visitor-title',
	template: `<h3> {{title}} </h3>`,
	styleUrls: ['./title.component.css']
})
export class TitleComponent {
	@Input() title!: String;
}
