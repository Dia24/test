import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";





@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientWissal: FormGroup;
  onNext:boolean=false;
  
  clientWissalObject=
  { FirstName:'',
  LastName: '', 
  Adress:  '',
  
  };

  constructor(private cw: FormBuilder,private r:Router) { 
    
   
  }

  ngOnInit() {
   
    if(localStorage.getItem('acc')=='true'){
      this.clientWissalObject.FirstName=localStorage.getItem('FirstName');
      this.clientWissalObject.LastName=localStorage.getItem('LastName');
      this.clientWissalObject.Adress=localStorage.getItem('Adress');
      }
    this.clientWissal = this.cw.group({
      FirstName: [this.clientWissalObject.FirstName, [ Validators.required,Validators.pattern('^([a-zA-Z\ ])+$') ]],
      LastName:  [this.clientWissalObject.LastName, [ Validators.required,Validators.pattern('^([a-zA-Z\ ])+$') ]],
      Adress:    [this.clientWissalObject.Adress , [ Validators.required ]],
      Accept:[false, [ Validators.required ]]
    });
  



  }

  get f(){
    return  this.clientWissal.controls;
    }
    Next(){
      this.onNext=true;
      localStorage.setItem('FirstName',this.clientWissal.value.FirstName);
      localStorage.setItem('LastName',this.clientWissal.value.LastName);
      localStorage.setItem('Adress',this.clientWissal.value.Adress);
      if(this.f.FirstName.valid && this.f.LastName.valid && this.f.Adress.valid && this.clientWissal.value. Accept )
      {this.r.navigate(["/Next"])
     localStorage.setItem('acc','true');
    }

    }
   
     
      
    
}
