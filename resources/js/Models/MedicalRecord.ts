import { DiseaseModel } from "./Disease";
import { SubDiseaseModel } from "./SubDisease";
import { SymptomModel } from "./Symptom";
import { TreatmentModel } from "./Treatment";

export interface BaseMedicalRecordModel {
    id?: number;
    name: string;
    address: string;
    place_of_birth: string;
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
    disease_records?: Array<DiseaseRecordModel>;
    symptoms?: Array<SymptomModel>;
    treatments?: Array<TreatmentModel>;
}

export interface MedicalRecordModel extends BaseMedicalRecordModel {
    id: number;
}

export interface DiseaseRecordModel {
    id: number;
    disease_id: number;
    sub_disease_id: number | null;
    medical_record_id: number;
    disease?: DiseaseModel;
    sub_disease_records?: SubDiseaseRecordModel[];
    sub_diseases?: SubDiseaseModel[];
    region?: Number[];
    created_at: string;
    updated_at: string;
}

export interface SubDiseaseRecordModel {
    id: number;
    sub_disease_id: number;
    medical_record_id: number;
    sub_disease?: SubDiseaseModel;
    region?: Number[];
    created_at: string;
    updated_at: string;
}
