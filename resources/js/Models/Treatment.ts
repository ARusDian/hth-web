import { DiseaseModel } from "./Disease";
import { SubDiseaseModel } from "./SubDisease";

export interface BaseTreatmentModel {
    id?: number;
    description: string;
    diseases?: Array<DiseaseModel>;
    sub_diseases?: Array<SubDiseaseModel>;
}

export interface TreatmentModel extends BaseTreatmentModel {
    id: number;
}
