import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  form: any={
    secondNumber:null
  }
  firstNumberis=localStorage.getItem("firstNumber");
 
  constructor(){}
  ngOnInit(): void{
    this.firstNumberis=localStorage.getItem("firstNumber");
    console.log("firstNumberis"+this.firstNumberis);
  }
  onSubmit(): void{
   const{secondNumber}=this.form;
   this.firstNumberis=localStorage.getItem("firstNumber");
   console.log(this.form);
  localStorage.setItem("secondNumber",secondNumber)
  let data = localStorage.getItem("secondNumber");
  var first =data ? data:1
  var x= Math.floor(Number(first));
  console.log("your second number is"+''+''+first);
  console.log(x);

  }
}
