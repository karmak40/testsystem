import { Rating } from "./rating";

export class Test {
    public id: number;
    public number: string;
    public name: string;
    public time: Date; 
    public answer: string;
    public rating: Array<Rating>;


    static parse(json: any): Test {
        return new Test(json.Id, json.Name, json.Number, json.Answer, json.Time, 
            json.Rating.map());
    }

    public constructor(
        id?: number,
        Name?: string,
        number?: string,
        Answer?: string,
        Time?: number,
        Rating?: Rating[],  
    ) {
        this.id = id;
        this.number = number;
        this.name = Name;
        this.answer = Answer;
        this.time = this.toDateTime(Time) ;
        this.rating = []; 
    }

    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

}
