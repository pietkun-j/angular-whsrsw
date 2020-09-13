import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { CdkTableModule } from "@angular/cdk/table";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
//import { TableBasicExample } from "./table-basic-example/table-basic-example.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent }
      //{ path: "./table-basic-example", component: TableBasicExample },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent
    //TableBasicExample
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
