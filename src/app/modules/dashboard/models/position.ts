import { Candidat } from "./candidat";
import { Reviewer } from "./reviever";


export class Position {
    public id: number;
    public name: string;
    public status: string
    public openDate: Date;
    public closeDate: Date;
    public number: string;
    public candidats: Array<Candidat>;
    public viewers: Array<Reviewer>


    static parse(json: any): Position {
        return new Position(json.Id, json.Name, json.Status, json.OpenDate, json.CloseDate, json.Number, json.Candidats.map(cand => Candidat.parse(cand)), 
        json.Viewers.map(viewer => Reviewer.parse(viewer)));
     }

     constructor(id?: number, name?: string, status?: string, openDate?: number, closeDate?: number, number?: string,  candidats?: Candidat[], viewer?: Reviewer[] ) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.openDate = this.toDateTime(openDate);
        this.closeDate = this.toDateTime(closeDate);
        this.number = number;
        this.candidats = candidats;
    }

    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
}

