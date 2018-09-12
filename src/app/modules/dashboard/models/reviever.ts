

export class Reviewer {
    public id: number;
    public number: string;
    public name: string;
    public email: string;
    public InvitationDate: Date

    static parse(json: any): Reviewer {
        return new Reviewer(json.Id, json.Name, json.Email, json.Number, json.InvitationDate);
    }

    constructor(id?: number, name?: string, Email?: string, number?: string, InvitationDate?: number) {
        this.id = id;
        this.name = name;
        this.email = Email;
        this.number = number;
        this.InvitationDate = this.toDateTime(InvitationDate);
    }

    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
}

