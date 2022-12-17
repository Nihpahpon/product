import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ProductssService } from '../productss.service';
import {MessageService} from 'primeng/api';




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnChanges {
  @Input() addModal: boolean = true;
  @Input() selectedProduct : any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();
  modelType = "Add";

  productForm = this.formBuilder.group({
    title : ["",Validators.required],
    price : [0,Validators.required],
    image : ["",Validators.required],
    description : ["",Validators.required],
    category : ["",Validators.required],
  });
  constructor(private formBuilder : FormBuilder,private productssService : ProductssService,private messageService :MessageService){}

  ngOnChanges(): void {
    if(this.selectedProduct){
      this.modelType = 'Edit'
      this.productForm.patchValue(this.selectedProduct);
    } else{
      this.productForm.reset();
      this.modelType = 'Add'
    }
}

  closeModal():void{
    this.productForm.reset();
    this.clickClose.emit(true);
  }

  addEditModal(){
    console.log(this.productForm.value)
    this.productssService.addEditModal(this.productForm.value, this.selectedProduct).subscribe(
      response => {
        this.clickAddEdit.emit(response);
        this.closeModal();
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Success'});
      },
      error => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error});
        console.log('Error');
      }
    )
  }

  
}
