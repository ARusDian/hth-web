import { DiseaseModel } from "./Disease";
import { SymptomModel } from "./Symptom";
import { TreatmentModel } from "./Treatment";

export interface BaseMedicalRecordModel {
    id?: number;
    name: string;
    address: string;
    date_of_birth: string; // Assuming date_of_birth is stored as a string in the format 'YYYY-MM-DD'
    NIK: string;
    gender: 'L' | 'P';
    race: string;
    occupation: string;
    phone_number: string;
    family_phone_number?: string | null;
    main_complaint: string;
    additional_complaint?: string | null;
    blood_type?: 'A' | 'B' | 'AB' | 'O' | null;
    blood_pressure: string;
    pulse: number;
    body_temperature: number;
    is_respiratory_congestion: boolean;
    is_heart_disease: boolean;
    is_diabetes: boolean;
    is_hemophilia: boolean;
    is_hepatitis: boolean;
    is_mag: boolean;
    another_disease?: string | null;
    food_allergy?: string | null;
    drug_allergy?: string | null;
    symptoms_arr: Number[] | null | string; // Assuming symptom is stored as a JSON object
    created_at: string; // Assuming created_at is stored as a string in the format 'YYYY-MM-DD HH:MM:SS'
    updated_at: string; // Assuming updated_at is stored as a string in the format 'YYYY-MM-DD HH:MM:SS'
    diseases?: Array<DiseaseModel>;
    symptoms?: Array<SymptomModel>;
    treatments?: Array<TreatmentModel>;
}

export interface MedicalRecordModel extends BaseMedicalRecordModel {
    id: number;
}