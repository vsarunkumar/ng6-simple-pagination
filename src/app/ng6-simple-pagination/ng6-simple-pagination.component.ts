import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange  } from "@angular/core";

@Component({
	selector: 'ng6-simple-pagination',
	templateUrl: 'ng6-simple-pagination.component.html',
	styleUrls: ['ng6-simple-pagination.component.scss']
})

export class Ng6SimplePaginationComponent {

	@Input() settings: any;
	@Input() pageNumber = 0;
	totalPage:number = 0;
	totalLen:number = 0;
	itemsPerPage = 0;
	first: number = 0;
	last: number = this.itemsPerPage;
	color = 'black';

	@Output('pageNo') pageNoEmitter = new EventEmitter();
	isRight: boolean = false;
	isLeft: boolean = false;

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges) {
		this.totalPage = this.settings.totalPage;
		this.totalLen = this.settings.totalLen;
		this.itemsPerPage = this.settings.itemsPerPage;
		this.color = this.settings.color;
		this.setFirstAndLastName();
  }    

  setFirstAndLastName() {
  	this.first = (this.pageNumber * this.itemsPerPage) + 1;
  	this.last = (this.pageNumber + 1) * this.itemsPerPage;
  	if(this.last > this.totalLen) {
  		this.last = this.totalLen;
  	}
  }

	clickLeft() {
		if(this.pageNumber == 0) {
			return;
		} else {
			this.pageNumber = this.pageNumber - 1;
			this.pageNoEmitter.emit(this.pageNumber)
		}
		window.scrollTo(0, 0);
	}

	clickRight() {
		if(this.pageNumber == this.totalPage - 1) {
			return;
		} else {
			this.pageNumber = this.pageNumber + 1;
			this.pageNoEmitter.emit(this.pageNumber)
		}
		window.scrollTo(0, 0);
	}

}