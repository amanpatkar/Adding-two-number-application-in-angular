import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-one';
  form: any={
    firstNumber:null
  }
 
  constructor(private router:Router){}
  ngOnInit(): void{

  }
  
  onSubmit(): void{
   const{firstNumber}=this.form;
   console.log(this.form);
  localStorage.setItem("firstNumber",firstNumber)
  let data = localStorage.getItem("firstNumber");
  var first =data ? data:1
  var x= Math.floor(Number(first));
  console.log("your first number is" +''+first);
  console.log(x);
  this.router.navigate(['/two']);
  }
}
