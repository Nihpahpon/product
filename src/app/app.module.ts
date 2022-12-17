import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductssModule } from './products/productss.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    ProductssModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
