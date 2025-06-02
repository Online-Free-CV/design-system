import { EditableItem, EditableSectionProps } from './editable.interface';
export declare function EditableSection<T extends EditableItem>({ sectionTitle, itemDisplayDirection, fields, defaultItem, name, onSave, }: EditableSectionProps<T> & {
    name: string;
}): import("react/jsx-runtime").JSX.Element;
