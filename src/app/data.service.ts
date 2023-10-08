import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'https://jsonplaceholder.typicode.com'; // JSONPlaceholder base URL

  constructor(private http: HttpClient) {}

  // HTTP GET Request to fetch data
  fetchData() {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  // HTTP POST Request to create data
  createData(newData:any) {
    return this.http.post(`${this.baseUrl}/posts`, newData);
  }

  // HTTP PUT Request to update data
  updateData(id:number, updatedData:any) {
    return this.http.put(`${this.baseUrl}/posts/${id}`, updatedData);
  }

  // HTTP DELETE Request to delete data
  deleteData(id:number) {
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }
}
