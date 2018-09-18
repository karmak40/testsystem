import { Rating } from "./rating";
import { Answer } from "./answer";

export class Test {
    public id: number;
    public number: string;
    public name: string;
    public time: number; 
    public positionId: number;
    public answers: Array<Answer>;

    static parse(json: any): Test {
        return new Test(json.Id, json.Name, json.Number, json.Time, json.PositionId, 
            json.Answers.map());
    }

    public constructor(
        id?: number,
        Name?: string,
        number?: string,
        Answer?: string,
        Time?: number,
        PositionId?: number,
        Rating?: Rating[],  
    ) {
        this.id = id;
        this.number = number;
        this.name = Name;
        this.positionId = PositionId;
        this.time = Time
        this.answers = []  // answers; 
    }

    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

}
