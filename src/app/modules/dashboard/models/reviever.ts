import { Rating } from "./rating";


export class Reviewer {
    public id: number;
    public number: string;
    public name: string;
    public email: string;
    public positionId: number;
    public invitationDate: number

    static parse(json: any): Reviewer {
        return new Reviewer(json.Id, json.Name, json.Email, json.Number, json.InvitationDate, json.PositionId);
    }

    constructor(id?: number, name?: string, Email?: string, number?: string, InvitationDate?: number, PositionId?: number) {
        this.id = id;
        this.name = name;
        this.email = Email;
        this.number = number;
        this.invitationDate = InvitationDate;
        this.positionId = PositionId;
    }

    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
}

