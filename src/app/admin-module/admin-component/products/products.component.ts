import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
}) 



export class ProductsComponent implements OnInit {
  @ViewChild('fileSelect') fileSelect:any;
productForm:FormGroup|any;
color =["Red","Black","Blue","Light"];
Size  =["S","L","M","XL","XXL"];
categories =["Hodies","Cap","jean","shirt"];
 newSizeArray:any =[];
 imagArray:any=[];
 disableButtonTrue: boolean =false;
myproductForm: FormGroup|any;

  constructor(
private formbuilder:FormBuilder,
  ) {this.buildForm()}

  ngOnInit(): void {
  }
  buildForm(){
    this.myproductForm=this.formbuilder.group({
      productName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
      quantity: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]*$/)]),
      price: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]),
      description: new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
      color: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      companyName:new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]),
      Category: new FormControl ('',Validators.required),
      Size:new FormControl([]),
    productMaterial: new FormControl('',Validators.required)
    

    })
  }
getSize(event:any) {
  if(event.target.checked) {
    this.newSizeArray.push(event.target.value);
  }
  else{
    this.newSizeArray =this.newSizeArray.filter((value: any) => value != event.target.value);
  }
}
getImages(event: any){
  let fileLength =event.target.file.length;
  if(event.target.file.length <=5) {
    [...event.target.file].forEach(file=> this.imagArray.push(file));
    this.disableButtonTrue= false;
  }else{
    this.imagArray=[];
    this.fileSelect.nativeElement.value=null;
    this.disableButtonTrue= true;
  }
}
SubmitProductForm(){
  this.myproductForm.value;
    this.newSizeArray.forEach((Element:string)=>{
    let formcontrol = new FormControl(Element);
    this.myproductForm.get("Size").push(formcontrol);
  })
  let MultiPartFormData = new FormData();
  MultiPartFormData.append('productName', this.myproductForm.get('productName').value);
  MultiPartFormData.append('quantity', this.myproductForm.get('quantity').value);
  MultiPartFormData.append('price', this.myproductForm.get('price').value);
  MultiPartFormData.append('description', this.myproductForm.get('description').value);
  MultiPartFormData.append('color', this.myproductForm.get('color').value);
  MultiPartFormData.append('companyName', this.myproductForm.get('companyName').value);
  MultiPartFormData.append('category', this.myproductForm.get('category').value);
  MultiPartFormData.append('size', this.myproductForm.get('size').value);
  MultiPartFormData.append('productMaterial', this.myproductForm.get('productMaterial').value);
  // MultiPartFormData.append('image',this.myProductForm.get('image').value);
  this.imagArray.forEach((ImagesData: any) => {
    MultiPartFormData.append('images', ImagesData);//Appending values to the getData varibale from FormGroup
  }) 
}

}