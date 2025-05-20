import { useState, useMemo } from 'react';
import { EditableItem, EditableSectionProps } from './editable.interface';
import {
  section,
  sectionHeader,
  sectionTitle,
  addButton,
  itemBox,
  fieldLabel,
  smallInput,
  textarea,
  input,
  saveButton,
} from './editable.css';
import { ExperienceSection } from '../experience';
import { ExperienceItem } from '../experience/experience.interface';

function generateUniqueId() {
  return Date.now().toString() + Math.random().toString(36).substring(2);
}

export function EditableSection<T extends EditableItem>({
  title,
  fields,
  defaultItem,
  onSave,
}: EditableSectionProps<T>) {
  const [items, setItems] = useState<T[]>([
    { ...defaultItem, isEdit: true, id: generateUniqueId() },
  ]);

  const handleChange = (index: number, key: keyof T, value: string | boolean) => {
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [key]: value };
      return updated;
    });
  };

  const handleTogglePresent = (index: number) => {
    setItems((prev) => {
      const updated = [...prev];
      updated[index].isPresent = !updated[index].isPresent;
      if (updated[index].isPresent) updated[index].endDate = '';
      return updated;
    });
  };

  const handleAdd = () => {
    setItems((prev) => [
      ...prev,
      { ...defaultItem, isEdit: true, id: generateUniqueId() },
    ]);
  };

  const handleDelete = (index: number) => {
    setItems((prev) => {
      if (prev.length === 1) return prev;
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleSave = (index: number) => {
    const updated = [...items];
    updated[index].isEdit = false;
    setItems(updated);
    onSave?.(updated);
  };

  const toggleEditModeById = (id: string, isEdit: boolean) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isEdit } : item
      )
    );
  };

  const viewOnlyItems = useMemo(
    () => items.filter((item) => !item.isEdit),
    [items]
  );
  const editItems = useMemo(
    () => items.filter((item) => item.isEdit),
    [items]
  );

  return (
    <div className={section}>
      <div className={sectionHeader}>
        <div className={sectionTitle}>{title}</div>
        <button onClick={handleAdd} className={addButton}>+ Add</button>
      </div>

      {viewOnlyItems.length > 0 && (
        <ExperienceSection
          items={viewOnlyItems as ExperienceItem[]}
          onEdit={(index) => toggleEditModeById(viewOnlyItems[index].id!, true)}
        />
      )}

      {editItems.map((item, index) => {
        const originalIndex = items.findIndex((i) => i.id === item.id);
        return (
          <div key={item.id} className={itemBox}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ fontWeight: 600 }}>Item {originalIndex + 1}</div>
              {items.length > 1 && (
                <button
                  onClick={() => handleDelete(originalIndex)}
                  style={{ background: 'transparent', border: 'none', color: '#d00', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  🗑 Remove
                </button>
              )}
            </div>

            {fields.map(({ key, label, type }) => {
              const value = item[key] as string;

              if (key === 'startDate') {
                return (
                  <div key="date-block" style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <input
                        type="checkbox"
                        checked={item.isPresent || false}
                        onChange={() => handleTogglePresent(originalIndex)}
                      />
                      I am currently working in this role
                    </label>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div>
                        <label className={fieldLabel}>Start Date</label>
                        <input
                          type="month"
                          className={smallInput}
                          value={item.startDate || ''}
                          onChange={(e) => handleChange(originalIndex, 'startDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className={fieldLabel}>End Date</label>
                        <input
                          type="month"
                          className={smallInput}
                          value={item.isPresent ? '' : item.endDate || ''}
                          disabled={item.isPresent}
                          onChange={(e) => handleChange(originalIndex, 'endDate', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                );
              }

              if (key === 'endDate') return null;

              if (type === 'textarea') {
                return (
                  <div key={String(key)}>
                    <label className={fieldLabel}>{label}</label>
                    <textarea
                      className={textarea}
                      value={value || ''}
                      onChange={(e) => handleChange(originalIndex, key, e.target.value)}
                    />
                  </div>
                );
              }

              return (
                <div key={String(key)}>
                  <label className={fieldLabel}>{label}</label>
                  <input
                    type={type === 'date' ? 'month' : type}
                    className={type === 'date' ? smallInput : input}
                    value={value || ''}
                    onChange={(e) => handleChange(originalIndex, key, e.target.value)}
                  />
                </div>
              );
            })}

            <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
              <button
                onClick={() => handleSave(originalIndex)}
                className={saveButton}
              >
                Save
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}