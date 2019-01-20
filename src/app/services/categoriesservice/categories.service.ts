import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ApiService } from "../api-service";
import { Category } from "./category";

@Injectable({
    providedIn: "root"
})
export class CategoriesService extends ApiService {
    private _url: string = environment.apiUri + "api/categories";

    get(id): Observable<Category> {
        let observable = this.http.get<Category>(`${this._url}/${id}`);
        return observable;
    }

    getAll(): Observable<Category[]> {
        return this.http.get<Category[]>(this._url);
    }
}