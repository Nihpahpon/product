import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from './productss';
import { ProductssService } from './productss.service';

@Component({
  selector: 'app-products',
  templateUrl: './productss.component.html',
  styleUrls: ['./productss.component.scss']
})
export class ProductssComponent implements OnInit {

  products: Product[] = [];
  addEditModal = false;
  selectedProduct: any = null;

  constructor(private productssService: ProductssService, private confirmationService: ConfirmationService,private messageService:MessageService) {

  }
  ngOnInit(): void {
    this.getList();
  }



  getList(): void {
    this.productssService.getProduct().subscribe(
      response => {
        console.log(response);
        this.products = response
      }
    )
  }

  showAddModal(): void {
    this.addEditModal = true;
    this.selectedProduct = null;
  }

  hideAddModal(isClosed: boolean) {
    this.addEditModal = !isClosed;
  }

  saveProductList(newData: Product) {
    if (newData.id === this.selectedProduct.id) {
      const productIndex = this.products.findIndex(data => data.id === newData.id);
      this.products[productIndex] = newData;
    } else {
      this.products.unshift(newData);
    }
  }

  showEditProduct(product: Product) {
    this.addEditModal = true;
    this.selectedProduct = product
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
        this.productssService.delete(product.id).subscribe(
          response => {
            this.products = this.products.filter(data => data.id !== product.id);
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Delete'});
          },
          error =>{
            this.messageService.add({severity:'error', summary: 'Error', detail: error});
          }  
        )
      }
    });
  }

}
