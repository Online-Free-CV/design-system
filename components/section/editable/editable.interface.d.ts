export type FieldType = 'text' | 'textarea' | 'date' | "tags" | "select";
export interface EditableItem {
    id?: string;
    subtitle?: string;
    university?: string;
    company?: string;
    email?: string;
    phone?: string;
    website?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    isPresent?: boolean;
    description?: string;
    logoUrl?: string;
    tags?: string[];
    isEdit?: boolean;
    sectionName?: "experience" | "simple";
}
export interface FieldConfig<T> {
    key: keyof T;
    label: string;
    type: FieldType;
    options?: {
        label: string;
        value: string;
    }[];
}
export interface EditableSectionProps<T extends EditableItem> {
    sectionTitle?: string;
    itemDisplayDirection?: 'row' | 'column';
    fields: FieldConfig<T>[];
    defaultItem: T;
    displayOnly?: boolean;
    sectionItems?: T[];
    onSave?: (items: T[]) => void;
}
export interface FormValues<T> {
    [key: string]: T[];
}
