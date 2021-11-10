import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../Model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temasService: TemaService
  ) { }


  
  ngOnInit(){
window.scroll(0,0); 
    if(environment.token == ""){
      alert("Sua sessão expirou, faça o login novamente.")
      this.router.navigate(["/entrar"])
      }
      this.temasService.refreshToken()

      this.findAllTemas()
  }


  findAllTemas(){
    this.temasService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }
  
  cadastrar(){
    this.temasService.postTema(this.tema).subscribe((resp: Tema) =>{
      this.tema = resp 
      alert("Tema cadastrado com sucesso!")
      this.findAllTemas()
      this.tema = new Tema()
    })
  }

}
