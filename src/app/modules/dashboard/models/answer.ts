import { Test } from "./test";
import { Rating } from "./rating";

export class Answer {
    public id: number;
    public content: string;
    public candidatId: number;
    public testId: number;
    public test: string;
    public reference: string;
    public ratings: Array<Rating>;


    static parse(json: any): Answer {
        return new Answer(json.Id, json.Content, json.CandidatId, json.TestId, json.Reference, json.Test, json.Ratings.map(rating => Rating.parse(rating)));
    }

    public constructor(
        id?: number,
        content?: string,
        candidatId?: number,
        testId?: number,
        reference?: string,
        test?: string,
        Ratings?: Rating[],
    ) {
        this.id = id;
        this.content = content;
        this.testId = testId;
        this.reference = reference;
        this.test = test;
        this.candidatId = candidatId;
        this.ratings = Ratings;
    }

    toDateTime(secs) {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }
}