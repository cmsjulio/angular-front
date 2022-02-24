import { Component, OnInit } from '@angular/core';
import { Escola } from '../escola';

@Component({
  selector: 'app-escola-update',
  templateUrl: './escola-update.component.html',
  styleUrls: ['./escola-update.component.css']
})
export class EscolaUpdateComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  }

  escola : Escola = new Escola ();
  
  onSubmit(){}



}
