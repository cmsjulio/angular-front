import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escola } from '../escola';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-escola-list',
  templateUrl: './escola-list.component.html',
  styleUrls: ['./escola-list.component.css']
})
export class EscolaListComponent implements OnInit {

  escolas: Escola[];

  constructor(private escolaService: EscolaService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEscolas();
  }

  private getEscolas(){
    this.escolaService.getEscolasList().subscribe(data => {
      console.log(data)
      this.escolas = data;
    });
  }

  updateEscola(id: number){
    this.router.navigate(['escola-update', id]);
  }

  deleteEscola(id: number){
    this.escolaService.deletarEscola(id).subscribe( data => {
      console.log(data);
      this.getEscolas();
    })

  }
}
