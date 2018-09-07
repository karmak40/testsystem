import { Candidat } from "./candidat";
import { Reviewer } from "./reviever";


export class Position {
    public id: string;
    public name: string;
    public active: boolean
    public openDate: Date;
    public closeDate: Date;
    public candidats: Array<Candidat>;
    public reviewers: Array<Reviewer>

}