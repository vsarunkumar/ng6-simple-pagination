import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  pageNumber: number = 0

  settings = {
  	totalPage: 5,
	  totalLen: 230,
	  itemsPerPage: 50,
	  color: 'red'
  }

  ngOnInit() {
  }

  setPageNumber(pageNo) {
  	this.pageNumber = pageNo;
  	console.log('current page no : ', this.pageNumber)
  }

}
