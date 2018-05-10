import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  imageurl:String='';
  fileToUpload;
    constructor() { }
  
    ngOnInit() {
        }
        handfileinput(file:FileList){
          this.fileToUpload=file.item(0);
          var reader=new FileReader();
          reader.onload=(event: any)=>{
            this.imageurl= event.target.result;
          }
          reader.readAsDataURL(this.fileToUpload);
        }

}
