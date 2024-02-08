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
    is_symetric_face: boolean;

    // teeth abnormality
    is_teeth_shape_normal: boolean;
    is_teeth_amount_normal: boolean;
    is_teeth_color_normal: boolean;
    is_teeth_position_normal: boolean;
    is_teeth_size_normal: boolean;

    // teeth anomaly
    occlusion: "Normal Bite" | "Cross Bite" | "Steep Bite"
    is_teeth_shape_anomaly: boolean;
    is_teeth_color_anomaly: boolean;
    is_teeth_position_anomaly: boolean;
    is_teeth_size_anomaly: boolean;
    is_teeth_structure_anomaly: boolean;

    spleen_gland: {
        right: SpleenGland;
        left: SpleenGland;
    }

    odontogram: { [key: string]: string | null };
    hard_tissue_abnormalities: HardTissueAbnormalities;
    teeth_condition_vitalities: TeethConditionVitality[];
    periodontal_tissues: PeriodontalTissue[];
    mucose_tongue: Mucose;
    mucose_cheek: Mucose;
    mucose_palatum: Mucose;
    mucose_gingiva: Mucose;
    mucose_lips: Mucose;

    symptoms_arr: Number[] | null | string; // Assuming symptom is stored as a JSON object
    created_at: string; // Assuming created_at is stored as a string in the format 'YYYY-MM-DD HH:MM:SS'
    updated_at: string; // Assuming updated_at is stored as a string in the format 'YYYY-MM-DD HH:MM:SS'
    disease_records?: Array<DiseaseRecordModel>;
    symptoms?: Array<SymptomModel>;
    treatments?: Array<TreatmentModel>;
};

export interface PeriodontalTissue {
    id?: number;
    tooth_number: string;
    location: string;
    pocket_true: string;
    pocket_false: string;
    pocket_depth: string;

    inflammation_rubor: string;
    inflammation_tumor: string;
    inflammation_kolor: string;
    inflammation_dolor: string;
    inflammation_functio_laesa: string;

    attachment_normal: string;
    attachment_decline: string;

    PUS: string;
    other: string;
    problem: string;
};

export interface Mucose {
    is_color_change: boolean;
    is_inflammation: boolean; 
    is_ulcer: boolean;
}

export interface TeethConditionVitality {
    id? : number;
    tooth_number: string;
    inspection: string;
    thermis: string;
    sondasi: string;
    percussion: string;
    druk: string;
    mobility: string;
    problem: string;
};

export interface HardTissueAbnormalities {
    permanent_teeth: {
        d: string;
        m: string;
        f: string;
        dmft: string;
    },
    milk_teeth: {
        d: string;
        e: string;
        f: string;
        deft: string;
    }
};


export interface SpleenGland {
    is_palpable: boolean;
    is_hard: boolean;
    is_painful: boolean;
}

export interface MedicalRecordModel extends BaseMedicalRecordModel {
    id: number;
};

export interface DiseaseRecordModel {
    id: number;
    disease_id: number;
    sub_disease_id: number | null;
    medical_record_id: number;
    disease?: DiseaseModel;
    sub_disease_records?: SubDiseaseRecordModel[];
    sub_diseases?: SubDiseaseModel[];
    region?: number[];
    created_at: string;
    updated_at: string;
};

export interface SubDiseaseRecordModel {
    id: number;
    sub_disease_id: number;
    medical_record_id: number;
    sub_disease?: SubDiseaseModel;
    region?: number[];
    created_at: string;
    updated_at: string;
};
