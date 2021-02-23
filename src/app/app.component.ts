import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  a = 12;
  b = 21;

  item = [
    {nama : "Jeruk", harga : 15000, satuan : "kg"},
    {nama : "Apel", harga : 2000, satuan : "kg"}
  ]

  tampil : boolean = true;
  tulisanopen : String;

  OPEN(){
    this.tulisanopen="BUTTON CLICKED";
    alert("clicked");
  }

  values = "";
  onKey(event : any){
    this.values += event.target.value + '|'
  }

}