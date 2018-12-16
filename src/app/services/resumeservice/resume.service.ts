import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { ApiService } from '../api-service';
import { Resume } from './resume';

@Injectable()
export class ResumeService extends ApiService {
    private _url: string = environment.apiUri + "api/resume";

    get(authorId: number) : Observable<Resume> {
        return this.http.get<Resume>(`${this._url}/${authorId}/`, this.createRequestOptions());
    }
}