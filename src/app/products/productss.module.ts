import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { ProductssComponent } from './productss.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AddProductModule } from './add-product/add-product.module';
import { DialogModule } from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

@NgModule({
  declarations: [
    ProductssComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    AddProductModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule
  ],
  exports:[
    ProductssComponent
  ],
  providers:[MessageService,ConfirmationService]
})
export class ProductssModule { }
