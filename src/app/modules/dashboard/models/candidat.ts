import { Test } from "./test";

export class Candidat {
    public id: number;
    public number: string;
    public name: string;
    public email: string;
    public invitationDate: number;
    public expiredDate: number
    public phone: string;
    public positionId;
    public tests: Array<Test> 

    static parse(json: any): Candidat {
        return new Candidat(json.Id, json.Name, json.Number, json.Email, json.InvitationDate, 
            json.ExpiredDate, json.Phone, json.PositionId, json.Tests.map(test => Test.parse(test)));
    }

    public constructor(
        id?: number,
        Name?: string,
        Number?: string,
        Email?: string,
        InvitationDate?: number,
        ExpiredDate?: number,
        Phone?: string,
        PositionId?: number,
        Tests?: Test[],  
    ) {
        this.id = id;
        this.number = Number;
        this.name = Name;
        this.email = Email;
        this.invitationDate = InvitationDate ;
        this.expiredDate = ExpiredDate;
        this.phone = Phone;
        this.positionId = PositionId;
        this.tests = Tests; 
    }

    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
}