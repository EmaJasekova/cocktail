import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CommunicationService {
    readonly stream = new Subject<string>();

    sendData(data: string) {
        this.stream.next(data);
    }

    getStream() {
        return this.stream.asObservable();
    }
}