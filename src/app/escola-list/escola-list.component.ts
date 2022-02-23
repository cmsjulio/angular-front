import { Component, OnInit } from '@angular/core';
import { Escola } from '../escola';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-escola-list',
  templateUrl: './escola-list.component.html',
  styleUrls: ['./escola-list.component.css']
})
export class EscolaListComponent implements OnInit {

  escolas: Escola[];

  constructor(private escolaService: EscolaService) { }

  ngOnInit(): void {
    this.getEscolas();
  }

  private getEscolas(){
    this.escolaService.getEscolasList().subscribe(data => {
      this.escolas = data;
    })
  }
}
