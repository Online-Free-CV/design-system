export type FieldType = 'text' | 'textarea' | 'date';

export interface EditableItem {
  id?: string;
  subtitle?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  isPresent?: boolean;
  description?: string;
  logoUrl?: string;
  isEdit?: boolean
}

export interface FieldConfig<T> {
  key: keyof T;
  label: string;
  type: 'text' | 'textarea' | 'date';
}

export interface EditableSectionProps<T extends EditableItem> {
  sectionTitle?: string;
  fields: FieldConfig<T>[];
  defaultItem: T;
  onSave?: (items: T[]) => void;
}
