/**
 * Created by h2 on 2017. 7. 3..
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `<h1>Hello {{ name }}!</h1>`
})
export class AppComponent {
	name: string;

	constructor() {
		this.name = 'Angular';
	}
}
