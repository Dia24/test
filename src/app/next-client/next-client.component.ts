import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { ClientServiceService } from '../services/client-service.service';

@Component({
  selector: 'app-next-client',
  templateUrl: './next-client.component.html',
  styleUrls: ['./next-client.component.css']
})





export class NextClientComponent implements OnInit {















  onOK:boolean=false;

  clientNextWissal: FormGroup;
  client:any[];
  clientNextWissalObject=
  { UserName:'',
  Phone:    '', 
  Email:  '',
  Password: '',
  FirstName:localStorage.getItem('FirstName'),
  LastName: localStorage.getItem('LastName'), 
  Adress:  localStorage.getItem('Adress')
  
 
  };
  constructor(private cw: FormBuilder,private r:Router,private data: ClientServiceService ) { }
  
  ngOnInit() {
    this.clientNextWissal = this.cw.group({
      UserName:['', [ Validators.required,Validators.minLength(3)]],
      Password: ['', [ Validators.required,Validators.pattern('^([^\ ])+$'),Validators.minLength(8)]],
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
    this.clientNextWissalObject.UserName=this.clientNextWissal.value.UserName;
      this.clientNextWissalObject.Password=this.clientNextWissal.value.Password;
      this.clientNextWissalObject.Email=this.clientNextWissal.value.Email;
      this.clientNextWissalObject.Phone=this.clientNextWissal.value.Phone;
   if(this.f.UserName.valid && this.f.Password.valid && this.f.Phone.valid && this.f.Email.valid)
    {this.data.addClient(this.clientNextWissalObject)
      .subscribe(clientNextWissalObject => {this.client.push(clientNextWissalObject) });
    

    }
  }






























  }























