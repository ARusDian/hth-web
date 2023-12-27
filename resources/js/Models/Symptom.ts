export interface BaseSymptomModel {
    id?: number;
    description: string;
}

export interface SymptomModel extends BaseSymptomModel{
    id: number;
}
