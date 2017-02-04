import { Component } from '@angular/core';
import { MultiFieldComponent } from '../multi/multifield.component';

@Component({
  selector: 'home',
  directives: [MultiFieldComponent],
  styles: [`
	.formContainer {
		padding: 2% 0;
	}
  `],
  template: require('./home.component.html')
})
export class HomeComponent {
  
  constructor() {
    
  }

}
