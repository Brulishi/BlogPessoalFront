import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../Model/Userlogin';
import { User } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  entrar(userLogin: UserLogin): Observable <UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoalpablogen.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://blogpessoalpablogen.herokuapp.com/usuarios/cadastrar', user)

  }

}
