## Ng6SimplePagination

Simple pagination for angular apps, developed in version 6.1.3.

### Install Dependancies

`npm install @angular/material --save`

### Install

Install package via npm as `npm install ng6-simple-pagination --save`

### Usage

Once installed, you can import ng6 simple pagination component into any application’s app.module.ts, by including it in its @NgModule imports array.

```
import { Ng6SimplePaginationModule } from "ng6-simple-pagination";
import { MatIconModule } from '@angular/material';

@NgModule({
    declarations: [
	    AppComponent
    ],
    imports: [
              .
	    Ng6SimplePaginationModule,
	    MatIconModule
              .
	],
	providers: [],
	bootstrap: [AppComponent]    
})    
export  class  AppModule { }
```

And using its selector in a template as shown below

```
<ng6-simple-pagination [pageNumber]="pageNumber" [settings]="settings" (pageNo)="setPageNumber($event)">
</ng6-simple-pagination>
```

Property pageNumber and settings initialized as follow

```
pageNumber: number = 0

settings = {
  totalPage: 5,
  totalLen: 230,
  itemsPerPage: 50,
  color: 'red'
}
```

### Inputs (Properties)

- pageNumber - the current active page number.
- totalLen - total number of displaying items.
- itemsPerPage - number of the displaying items on a page.
- totalPage - number of the displaying pages.
- color - color of the text in the output.

### Update pageNumber

Set current active page number to variable `pageNumber` by,

```
setPageNumber(pageNo) {
	this.pageNumber = pageNo;
	console.log('current page no : ', this.pageNumber)
}
```
