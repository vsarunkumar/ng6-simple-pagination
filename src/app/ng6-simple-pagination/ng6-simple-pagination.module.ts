import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { Ng6SimplePaginationComponent } from "./ng6-simple-pagination.component";

@NgModule({
	declarations: [
		Ng6SimplePaginationComponent
	],
	imports: [
		CommonModule,
		MatIconModule,
	],
	exports: [
		Ng6SimplePaginationComponent
	]
})

export class Ng6SimplePaginationModule {
}