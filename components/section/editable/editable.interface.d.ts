export type FieldType = 'text' | 'textarea' | 'date' | "tags";
export interface EditableItem {
    id?: string;
    subtitle?: string;
    university?: string;
    company?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    isPresent?: boolean;
    description?: string;
    logoUrl?: string;
    tags?: string[];
    isEdit?: boolean;
}
export interface FieldConfig<T> {
    key: keyof T;
    label: string;
    type: FieldType;
}
export interface EditableSectionProps<T extends EditableItem> {
    sectionTitle?: string;
    fields: FieldConfig<T>[];
    defaultItem: T;
    displayOnly?: boolean;
    sectionItems?: T[];
    onSave?: (items: T[]) => void;
}
export interface FormValues<T> {
    [key: string]: T[];
}
