import { Candidat } from "./candidat";
import { Reviewer } from "./reviever";
import { Test } from "./test";


export class Position {
    public id: number;
    public name: string;
    public status: string
    public openDate: number;
    public closeDate: number;
    public number: string;
    public availableTime: number;
    public companyInfo: string;
    public about: string;
    public instruction: string;
    public candidats: Array<Candidat>;
    public viewers: Array<Reviewer>
    public tests: Array<Test>;


    static parse(json: any): Position {
        return new Position(json.Id, json.Name, json.Status, json.OpenDate, json.CloseDate, json.Number, json.CompanyInfo, json.About, json.instruction, json.AvailableTime,

            json.Candidats.map(cand => Candidat.parse(cand)),
            json.Viewers.map(viewer => Reviewer.parse(viewer)),
            json.Tests.map(test => Test.parse(test)));
    }

    constructor(id?: number, name?: string, status?: string, openDate?: number, closeDate?: number, number?: string, companyInfo?: string, about?: string, instruction?: string, 
        availableTime? : number,
        candidats?: Candidat[],
        viewer?: Reviewer[],
        tests?: Test[])
    {
        this.id = id;
        this.name = name;
        this.status = status;
        this.availableTime = availableTime;
        this.instruction = instruction;
        this.openDate = openDate;
        this.closeDate = closeDate;
        this.number = number;
        this.companyInfo = companyInfo;
        this.about = about;
        this.candidats = candidats;
        this.viewers = viewer;
        this.tests = tests
    }

    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
}

