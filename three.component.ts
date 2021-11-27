import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  form: any={
    result:null
  }
  finalResult=0
  constructor(){}
  ngOnInit(): void{

  }
  onSubmit(): void{
  //  const{secondNumber}=this.form;
  //  console.log(this.form);
  // localStorage.setItem("secondNumber",secondNumber)
  // let data = localStorage.getItem("secondNumber");
  // var first =data ? data:1
  // var x= Math.floor(Number(first));
  // console.log("your second number is"+''+''+first);
  // console.log(x);
  const data=localStorage.getItem("firstNumber");
  var first =data ? data:1
  var x= Math.floor(Number(first));
  const data2=localStorage.getItem("secondNumber");
   var second =data2 ? data2:1
   var y= Math.floor(Number(first));
  
   const result=x+y;
   this.finalResult=x+y;
   console.log(result);
   

  }
}
