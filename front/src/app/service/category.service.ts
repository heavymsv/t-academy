import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ICategory from '../interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<ICategory[]>("http://localhost:8080/category")
  }

  getById(id:number){
    return this.http.get<ICategory>(`http://localhost:8080/category/${id}`)
  }

  delete(id:number){
    return this.http.delete(`http://localhost:8080/category/${id}`)
  }

  update(id:number, data: ICategory){
    return this.http.put<ICategory>(`http://localhost:8080/category/${id}`, data)
  }

  create(data:ICategory){
    return this.http.post<ICategory>("http://localhost:8080/category",data)
  }
}