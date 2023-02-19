import { Component, Input } from '@angular/core';

@Component({
	selector: 'visitor-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css']
})
export class TitleComponent {
	@Input() title!: String;
}
