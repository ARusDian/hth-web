import { DiseaseModel } from "./Disease";
import { SymptomModel } from "./Symptom";
import { TreatmentModel } from "./Treatment";

export interface BaseSubDiseaseModel {
    id?: number;
    disease_id: number;
    name: string;
    disease?: DiseaseModel;
    treatments?: TreatmentModel[];
    symptoms?: SymptomModel[];
}

export interface SubDiseaseModel extends BaseSubDiseaseModel {
    id: number;
    disease: DiseaseModel;
}
