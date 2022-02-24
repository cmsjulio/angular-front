import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escola } from '../escola';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-escola-update',
  templateUrl: './escola-update.component.html',
  styleUrls: ['./escola-update.component.css']
})
export class EscolaUpdateComponent implements OnInit {

  id: number;
  escola : Escola = new Escola ();
  constructor(private escolaService : EscolaService,
    private route: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.escolaService.obterEscolaPorId(this.id).subscribe(data => {
      this.escola = data;
    }, error => console.log(error));
  }

  
  onSubmit(){
    this.escolaService.atualizarEscola(this.id, this.escola).subscribe( data => {
    this.goToEscolaList();
    },
    error => console.log(error));
  }

  goToEscolaList(){
    this.router.navigate(['/escolas']);
  }



}
