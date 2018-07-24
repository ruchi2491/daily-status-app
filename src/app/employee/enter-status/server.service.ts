import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ServerService{
    constructor(private http:Http){}
        storeStatus(onestatus:any[]){
           return  this.http.post('/api/dailystatus', onestatus);
        }
    
}