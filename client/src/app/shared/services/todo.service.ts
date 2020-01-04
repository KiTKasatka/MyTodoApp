import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message, todo } from '../iterfaces';

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    constructor(private http: HttpClient) { }


    // tslint:disable-next-line: no-shadowed-variable
    create(todo: todo): Observable<todo> {
        return this.http.post<todo>('/api/todo', todo );
    }
}
