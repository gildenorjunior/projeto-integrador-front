import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  //instânciando um objeto Postagem e atribuindo a variavel postagem
  postagem: Postagem = new Postagem()

  //criando uma lista de Postagens
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]

  //Injetando as dependências do service.
  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    //chamando meus métodos para serem utilizados assim que a página html for renderizada.
    this.findAllPostagens()
    this.findAllTemas()
  }

  //criando um método para encontrar todas as Postagens e retornando em lista
  findAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  //criando um método para encontrar todos os Temas e retornando em lista
  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

}
