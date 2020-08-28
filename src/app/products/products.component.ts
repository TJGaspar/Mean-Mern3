import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  inputs:['product']
})
export class ProductsComponent implements OnInit {
  productName: string;
  productDescription: string;
  imageURL: string;
  stockQuantity: number;

  constructor() {
   }
   ngOnInit() {
    this.productName =this.product.productName;
    this.productDescription= this.product.productDescription;
    this.imageURL = this.product.imageURL;
    this.stockQuantity= this.product.stockQuantity;
  }
  @Input() product;
  @Output() increaseCart = new EventEmitter();
  @Output() decreaseCart = new EventEmitter();

   increaseProduct(){
    if (this.stockQuantity>0){
      this.stockQuantity--;
      console.log(this.stockQuantity)
      this.decreaseCart.emit();
    }
   }
   decreaseProduct(){
    console.log("caiu aqui")
    console.log(this.stockQuantity)
    console.log(this.product.stockQuantity)
    if (this.stockQuantity < this.product.stockQuantity){
      this.stockQuantity++;
      this.increaseCart.emit();
    }
   }

}
