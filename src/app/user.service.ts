import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private _jobsUrl = 'https://csriseup-api.herokuapp.com/api/jobs';

  getAllJobs(): Observable<any[]> {
    return this.http.get<any[]>(this._jobsUrl);
  }

  createJob(jobData: any): Observable<any[]> {
    return this.http.post<any>(this._jobsUrl, jobData);
  }

  getJob(id: string): Observable<any> {
    return this.http.get<any>(`${this._jobsUrl}/${id}`);
  }

  updateJob(id: string, jobData: any): Observable<any[]> {
    return this.http.put<any>(`${this._jobsUrl}/${id}`, jobData);
  }

  deleteJob(id: string): Observable<any> {
    return this.http.delete(this._jobsUrl + id);
  }
}
