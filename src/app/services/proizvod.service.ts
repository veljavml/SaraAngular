import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Proizvod } from '../model/proizvod';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  constructor(private http:HttpClient) { }

  url:string = "https://63b59b2f58084a7af39a1cf4.mockapi.io/vezbanje";

  ucitajProizvode(){
    return this.http.get<Proizvod[]>(this.url);
  }
}
