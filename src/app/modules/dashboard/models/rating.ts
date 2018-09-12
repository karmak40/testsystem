export class Rating {
    public id: string;
    public viewer_id: number;
    public nummer: number;
    public grade: number;
    public test_id: string;
}


/*
    static parse(json: any): Candidat {
        return new Candidat(json.Id, json.Name, json.Number, json.Email, json.InvitationDate, 
            json.ExpiredDate, json.Phone, json.Tests.map(test => Test.parse(test)));
    }

    public constructor(
        id?: number,
        Name?: string,
        Number?: string,
        Email?: string,
        InvitationDate?: number,
        ExpiredDate?: number,
        Phone?: string,
        Tests?: Test[],  
    ) {
        this.id = id;
        this.number = Number;
        this.name = Name;
        this.email = Email;
        this.invitationDate = this.toDateTime(InvitationDate) ;
        this.expiredDate = this.toDateTime(ExpiredDate) ;
        this.phone = Phone;
        this.tests = Tests; 
    }

    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

*/