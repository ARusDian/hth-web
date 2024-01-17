import { DiseaseModel } from "./Disease";
import { SubDiseaseModel } from "./SubDisease";

export interface BaseSymptomModel {
    id?: number;
    description: string;
    diseases?: Array<DiseaseModel>;
    sub_diseases?: Array<SubDiseaseModel>;
}

export interface SymptomModel extends BaseSymptomModel{
    id: number;
}
