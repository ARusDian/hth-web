export interface BaseTreatmentModel {
    id?: number;
    description: string;
}

export interface TreatmentModel extends BaseTreatmentModel {
    id: number;
}
