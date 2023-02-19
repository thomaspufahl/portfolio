import { Component } from '@angular/core';

@Component({
	standalone: true,
	selector: 'shared-card',
	template: `
			<div class="card card-6">
				<div class="card__icon"><i class="fas fa-bolt"></i></div>
					<p class="card__exit"><i class="fas fa-times"></i></p>
					<h2 class="card__title">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
					<p class="card__apply">
						<a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
					</p>
			</div>`,
	styleUrls: ['./card.component.css']
})
export class CardComponent {

}
