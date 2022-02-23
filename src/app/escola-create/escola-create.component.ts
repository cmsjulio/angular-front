import { Component, OnInit } from '@angular/core';
import { Escola } from '../escola';

@Component({
  selector: 'app-escola-create',
  templateUrl: './escola-create.component.html',
  styleUrls: ['./escola-create.component.css']
})
export class EscolaCreateComponent implements OnInit {

  escola: Escola = new Escola();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.escola)
  }

}
