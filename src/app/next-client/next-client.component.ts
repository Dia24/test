import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-next-client',
  templateUrl: './next-client.component.html',
  styleUrls: ['./next-client.component.css']
})
export class NextClientComponent implements OnInit {
  onOK:boolean=false;

  
  clientNextWissalObject=
  { UserName:'',
  Phone:    '', 
  Email:  '',
  Password: ''
 
  };
  constructor(private cw: FormBuilder,private r:Router) { }
  clientNextWissal: FormGroup;
  ngOnInit() {
    this.clientNextWissal = this.cw.group({
      UserName:['', [ Validators.required,Validators.minLength(3)]],
      Password: ['', [ Validators.required,Validators.pattern('^(\W)$'),Validators.minLength(8)]],
      Email:  ['', [ Validators.required,Validators.email]],
      Phone:    ['', [ Validators.required,Validators.pattern('^([0-9])+$'),Validators.minLength(10),Validators.maxLength(10) ]]
    
    });
    

  }
  get f(){
    return  this.clientNextWissal.controls;
    }
 
    Previous(){
      this.r.navigate(["/Previous"]);
      }
submit(){
  
    this.onOK=true;
    /*if(this.f.FirstName.valid && this.f.LastName.valid && this.f.Adress.valid )
    {this.r.navigate(["/Next"])}
  }*/
}
}
