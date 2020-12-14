import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-put-tema',
  templateUrl: './put-tema.component.html',
  styleUrls: ['./put-tema.component.css']
})
export class PutTemaComponent implements OnInit {

  tema: Tema = new Tema()
  id: number
  idTema: number

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.idTema = this.route.snapshot.params["id"]
    this.findByIdTema(this.idTema)

  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  salvar(){

    this.temaService.putTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      this.router.navigate(['/form-tema'])
      alert('Tema alterada com sucesso')
    }, err => {
      if(err.status == '500'){
        alert('Preencha todos os campos corretamente antes de enviar!')
      }
    })
  }

}
