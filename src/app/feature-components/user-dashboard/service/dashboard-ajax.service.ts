import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardAjaxService {
  

  constructor(
    private http: HttpClient
  ) { }

    uploadFilePhaseInitial(formData:any):Observable<any>{
      return this.http.post('http://localhost:9393/upstream/upload',formData);
    }

    getPermittedColumn():Observable<any>{
      return this.http.get("http://localhost:9393/upstream/startupData/a102")
    }

    getViewModelObject():Observable<any> {
      return this.http.get("http://localhost:9393/view/feedback")
    }
}
