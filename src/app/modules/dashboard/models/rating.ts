export class Rating {

    public id: number;
    public grade: number;
    public number: number;
    public viewerId: number;
    public answerId: number;


    static parse(json: any): Rating {
        return new Rating(json.Id, json.Grade, json.Number, json.ViewerId, json.answerId);
    }

    public constructor(
        id?: number,
        grade?: number,
        number?: number,
        viewerId?: number,
        answerId?: number,
    ) {
        this.id = id;
        this.grade = grade;
        this.number = number
        this.viewerId = viewerId;
        this.answerId = answerId;
    }
}
