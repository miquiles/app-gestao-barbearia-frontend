import { Cliente } from './../model/cliente.model';
import { Injectable } from '@angular/core';
import { Router} from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:8080/person"
  id: any;

  constructor(private snackbar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg,'x',{


      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']

    })
  }

  
  create(cliente: Cliente) : Observable<Cliente>{

    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      map((obj)=> obj),
      catchError(e => this.errorHandler(e))
      );
    }

    errorHandler(e: any): Observable<any>{
      this.showMessage('Ocorreu um erro. Tente novamente mais tarde', true);
      return EMPTY;

    }

    read(): Observable<Cliente[]>{
      return this.http.get<Cliente[]>(this.baseUrl+"/list-clients").pipe(
        map((obj)=> obj),
        catchError(e => this.errorHandler(e))
        );
  
    }

    

    getData(){
      return this.http.get("http://localhost:8080/person/list-clients")
      .pipe(
        map((response:[]) => response.map(item => item['firstName']))
       
      )
      
    }





  

 
}
