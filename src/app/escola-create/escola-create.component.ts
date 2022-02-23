import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escola } from '../escola';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-escola-create',
  templateUrl: './escola-create.component.html',
  styleUrls: ['./escola-create.component.css']
})
export class EscolaCreateComponent implements OnInit {

  escola: Escola = new Escola();
  constructor(private escolaService: EscolaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEscola(){
    this.escolaService.criarEscola(this.escola).subscribe(data =>{
      console.log(data);
      this.goToEscolaList();
    },
    error => console.log(error));
  }

  goToEscolaList(){
    this.router.navigate(['/escolas']);
  }

  onSubmit(){
    console.log(this.escola);
    this.saveEscola();
  }

}
