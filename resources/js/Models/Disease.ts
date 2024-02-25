import { EvaluationMethodModel } from './EvaluationMethod';
import { ReasonModel } from "./Reason";
import { SuccessIndicatorModel } from "./SuccessIndicator";
import { SymptomModel } from "./Symptom";
import { TreatmentModel } from "./Treatment";
import { TreatmentGoalModel } from "./TreatmentGoal";

export interface BaseDiseaseModel {
    id?: number;
    name: string;
    problem: string;
    diagnosis: string;
    treatments?: TreatmentModel[];
    symptoms?: SymptomModel[];
    reasons?: ReasonModel[];
    sub_diseases?: DiseaseModel[];
    treatment_goals?: TreatmentGoalModel[];
    success_indicators?: SuccessIndicatorModel[];
    evaluation_methods?: EvaluationMethodModel[];
}

export interface DiseaseModel extends BaseDiseaseModel {
    id: number;
}
