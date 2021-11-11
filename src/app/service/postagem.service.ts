import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../Model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>("https://blogpessoalpablogen.herokuapp.com/postagens", this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>("https://blogpessoalpablogen.herokuapp.com/postagens", postagem, this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://blogpessoalpablogen.herokuapp.com/postagens/${id}`,)
  }


}