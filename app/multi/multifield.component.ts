import { Component, ElementRef, Renderer, Input, AfterViewInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/*
 * Angular2 comonent for custom multi field
 * Custom add button to replicate html structure.
 */
@Component({
	selector: 'multi-field',
	styles: [require('./multifield.component.css')],
	template: `
		<div class="template" #templateHtml>
			<ng-content></ng-content>
		</div>
		<div class="multi-wrapper">
			<div class="multiitem" *ngFor="let multiItem of contentList">
				<div class="multiitem-content" [innerHTML]="multiItem.html"></div>
				<div class="multiitem-button">
					<button type="button" class="btn btn-deault" (click)="deleteContent(multiItem, $event)">Delete</button>
				</div>
				<div style="clear: both;"></div>	
			</div>
		</div>
		<button type="button" class="btn btn-deault" (click)="addContent()">Add</button>
	`
})
export class MultiFieldComponent {

	//Minimum number for replications, number of replications
	//will be available by default.
	@Input('min') min: number;

	//Maximum number of replication.
	@Input('max') max: number;

	//Container to capture html template from directive call
	@ViewChild('templateHtml') templateContainer: ElementRef;

	//Template string
	private templateHtmlString: string;

	//List of content added
	private contentList: MultiItem[] = [];

	constructor(
		private element: ElementRef, 
		private renderer: Renderer,
		private sanitizer: DomSanitizer
	) {
		console.log(sanitizer);	
	}

	ngAfterViewInit() {
		this.templateHtmlString = this.templateContainer.nativeElement.innerHTML;
		this.templateContainer.nativeElement.innerHTML = "";

		if (this.min != undefined && this.min > 0) {
			for (var i = 0; i < this.min; i++) {
				this.contentList.push(new MultiItem(
					this.sanitizer.bypassSecurityTrustHtml(this.templateHtmlString)
				));	
			}	
		}
	}

	//Check max count status and process add action
	//Adding content on add button click 
	addContent() {
		if (this.max == undefined) {
			this.contentList.push(new MultiItem(
				this.sanitizer.bypassSecurityTrustHtml(this.templateHtmlString)
				));	
		} else if (this.max != undefined && this.max < this.contentList.length) {
			this.contentList.push(new MultiItem(
				this.sanitizer.bypassecurityTrustHtml(this.templateHtmlString)
				));
		}
	}

	/*
	 * Refreshing content list after removing deleted
	 *item from content list
	 */
	deleteContent(item: MultiItem, event: any) {
		this.contentList = this.contentList.filter(e => e !== item);
	}

}


//Model object for multi field items
export class MultiItem {

	constructor(html: SafeHtml) {
		this.html = html;
	}	

	html: SafeHtml
}
