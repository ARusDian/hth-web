import { ReasonModel } from "./Reason";
import { SymptomModel } from "./Symptom";
import { TreatmentModel } from "./Treatment";

export interface BaseDiseaseModel {
    id?: number;
    name: string;
    problem: string;
    diagnosis: string;
    treatments?: TreatmentModel[];
    symptoms?: SymptomModel[];
    reasons?: ReasonModel[];
    sub_diseases?: DiseaseModel[];
}

export interface DiseaseModel extends BaseDiseaseModel {
    id: number;
}
