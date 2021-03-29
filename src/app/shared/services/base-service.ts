import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injector } from "@angular/core";
import { Observable } from "rxjs";
import { BaseModel } from "../models/BaseModel";

const options = { headers: new HttpHeaders().set('Content-Type', 'application/json')}

export abstract class BaseService<T extends BaseModel> {

    protected http: HttpClient;

    constructor(protected apiPath: string, protected injector: Injector){
        this.http = injector.get(HttpClient);
    }

    getAll(): Observable<T[]> {
        return this.http.get<T[]>(`${this.apiPath}`, options);
    }

    getById(id: number): Observable<T> {
        return this.http.get<T>(`${this.apiPath}/${id}`, options);
    }

    create(entity: T): Observable<T> {
        return this.http.post<T>(`${this.apiPath}`, entity, options);
    }

    update(entity: T): Observable<T> {
        return this.http.put<T>(`${this.apiPath}`, entity, options);
    }

    delete(entity: T): Observable<T> {
        return this.http.delete<T>(`${this.apiPath}/${entity.id}`, options);
    }
}