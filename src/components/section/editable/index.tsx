import { getIn, useFormikContext, FormikTouched } from "formik";
import { useEffect, useMemo, useState } from "react";
import { ExperienceSection } from "../experience";
import { ExperienceItem } from "../experience/experience.interface";
import { Section } from "../section";
import {
  addButton,
  fieldLabel,
  formGroup,
  input,
  itemBox,
  saveButton,
  smallInput,
  textarea,
} from "./editable.css";
import {
  EditableItem,
  EditableSectionProps,
  FormValues,
} from "./editable.interface";

function generateUniqueId() {
  return Date.now().toString() + Math.random().toString(36).substring(2);
}

export function EditableSection<T extends EditableItem>({
  sectionTitle,
  fields,
  defaultItem,
  name,
  onSave,
}: EditableSectionProps<T> & { name: string }) {
  const { values, setFieldValue, validateForm, setTouched, errors } =
    useFormikContext<FormValues<T>>();

  const formikItems = useMemo(() => values[name] || [], [values, name]);

  const [items, setItems] = useState<T[]>([]);

  // Sync local state with formik on mount or change
  useEffect(() => {
    if (formikItems?.length) {
      setItems(formikItems);
    }
  }, [formikItems]);

  const syncAndUpdate = (updated: T[]) => {
    setItems(updated);
    setFieldValue(name, updated);
  };

  const handleChange = (
    index: number,
    key: keyof T,
    value: string | boolean | string[]
  ) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [key]: value };
    syncAndUpdate(updated);
  };

  const handleTogglePresent = (index: number) => {
    const updated = [...items];
    updated[index].isPresent = !updated[index].isPresent;
    if (updated[index].isPresent) updated[index].endDate = "";
    syncAndUpdate(updated);
  };

  const handleAdd = () => {
    const newItem = { ...defaultItem, isEdit: true, id: generateUniqueId() };
    const updated = [...items, newItem];
    syncAndUpdate(updated);
  };

  const handleDelete = (index: number) => {
    if (items.length === 1) return;
    const updated = [...items];
    updated.splice(index, 1);
    syncAndUpdate(updated);
  };

  const handleSave = (index: number) => {
    const updated = [...items];
    updated[index].isEdit = false;
    syncAndUpdate(updated);
    onSave?.(updated);
  };

  const toggleEditModeById = (id: string, isEdit: boolean) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, isEdit } : item
    );
    syncAndUpdate(updated);
  };

  const viewOnlyItems = useMemo(
    () => items.filter((item) => !item.isEdit),
    [items]
  );
  const editItems = useMemo(() => items.filter((item) => item.isEdit), [items]);

  return (
    <Section
      title={sectionTitle}
      rightContent={
        <button onClick={handleAdd} className={addButton}>
          + Add
        </button>
      }
    >
      {/* <div className={sectionHeader}>
        <button onClick={handleAdd} className={addButton}>
          + Add
        </button>
      </div> */}

      {viewOnlyItems.length > 0 && (
        <ExperienceSection
          items={viewOnlyItems as ExperienceItem[]}
          onEdit={(index) => toggleEditModeById(viewOnlyItems[index].id!, true)}
        />
      )}

      {editItems.map((item) => {
        const originalIndex = items.findIndex((i) => i.id === item.id);
        return (
          <div key={item.id} className={itemBox}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <div style={{ fontWeight: 600 }}>Item {originalIndex + 1}</div>
              {items.length > 1 && (
                <button
                  onClick={() => handleDelete(originalIndex)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#d00",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  🗑 Remove
                </button>
              )}
            </div>

            {fields.map(({ key, label, type }) => {
              const value = item[key] as string;

              if (key === "startDate") {
                return (
                  <div key="date-block" style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <input
                        type="checkbox"
                        name={`${name}.[${originalIndex}].${key as string}`}
                        checked={item.isPresent || false}
                        onChange={() => handleTogglePresent(originalIndex)}
                      />
                      I am currently working in this role
                    </label>

                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className={
                          getIn(
                            errors,
                            `${name}.[${originalIndex}].${key as string}`
                          )
                            ? formGroup.error
                            : ""
                        }
                        data-placeholder={"Required"}
                      >
                        <label className={fieldLabel}>Start Date</label>
                        <input
                          type="month"
                          name={`${name}.[${originalIndex}].${key as string}`}
                          className={smallInput}
                          value={item.startDate || ""}
                          onChange={(e) =>
                            handleChange(
                              originalIndex,
                              "startDate",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div
                        className={
                          getIn(
                            errors,
                            `${name}.[${originalIndex}].${key as string}`
                          )
                            ? formGroup.error
                            : ""
                        }
                        data-placeholder={"Required"}
                      >
                        <label className={fieldLabel}>End Date</label>
                        <input
                          type="month"
                          className={smallInput}
                          name={`${name}.[${originalIndex}].${key as string}`}
                          value={item.isPresent ? "" : item.endDate || ""}
                          disabled={item.isPresent}
                          onChange={(e) =>
                            handleChange(
                              originalIndex,
                              "endDate",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              }

              if (key === "endDate") return null;

              if (type === "textarea") {
                return (
                  <div
                    key={String(key)}
                    className={
                      getIn(
                        errors,
                        `${name}.[${originalIndex}].${key as string}`
                      )
                        ? formGroup.error
                        : ""
                    }
                    data-placeholder={"Required"}
                  >
                    <label className={fieldLabel}>{label}</label>
                    <textarea
                      className={textarea}
                      name={`${name}.[${originalIndex}].${key as string}`}
                      value={value || ""}
                      onChange={(e) =>
                        handleChange(originalIndex, key, e.target.value)
                      }
                    />
                  </div>
                );
              }

              if (type === "tags") {
                const tags = (item[key] as string[]) || [];

                const handleAddTag = (
                  e: React.KeyboardEvent<HTMLInputElement>
                ) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    const newTag = e.currentTarget.value.trim();
                    if (newTag && !tags.includes(newTag)) {
                      const updatedTags = [...tags, newTag];
                      handleChange(originalIndex, key, updatedTags);
                      e.currentTarget.value = "";
                    }
                  }
                };

                const handleRemoveTag = (tagToRemove: string) => {
                  const updatedTags = tags.filter((t) => t !== tagToRemove);
                  handleChange(originalIndex, key, updatedTags);
                };

                return (
                  <div
                    key={String(key)}
                    className={
                      getIn(
                        errors,
                        `${name}.[${originalIndex}].${key as string}`
                      )
                        ? formGroup.error
                        : ""
                    }
                    data-placeholder={"Required"}
                  >
                    <label className={fieldLabel}>{label}</label>
                    <input
                      type="text"
                      onKeyDown={handleAddTag}
                      placeholder="Type and press Enter"
                      className={input}
                    />
                    <div
                      style={{
                        marginTop: "0.5rem",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            background: "#eee",
                            padding: "0.3rem 0.6rem",
                            borderRadius: "20px",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            style={{
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                              fontWeight: "bold",
                              color: "#c00",
                            }}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={String(key)}
                  className={
                    getIn(errors, `${name}.[${originalIndex}].${key as string}`)
                      ? formGroup.error
                      : ""
                  }
                  data-placeholder={"Required"}
                >
                  <label className={fieldLabel}>{label}</label>
                  <input
                    type={type === "date" ? "month" : type}
                    name={`${name}.[${originalIndex}].${key as string}`}
                    className={type === "date" ? smallInput : input}
                    value={value || ""}
                    onChange={(e) =>
                      handleChange(originalIndex, key, e.target.value)
                    }
                  />
                </div>
              );
            })}

            <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
              <button
                type="button"
                className={saveButton}
                onClick={async () => {
                  const touchedFields = {} as FormikTouched<T>;

                  (Object.keys(items[originalIndex]) as (keyof T)[]).forEach(
                    (key) => {
                      touchedFields[key] = true as FormikTouched<T>[keyof T];
                    }
                  );

                  const formikTouched = {
                    [name]: Array(items.length).fill({}) as FormikTouched<T>[],
                  } as FormikTouched<FormValues<T>>;

                  (formikTouched[name] as FormikTouched<T>[])[originalIndex] =
                    touchedFields;

                  setTouched(formikTouched, false);

                  const formErrors = await validateForm();

                  // ✔ grab only the errors for this array element
                  const itemErrors = getIn(
                    formErrors,
                    `${name}[${originalIndex}]`
                  );
                  const hasErrors =
                    itemErrors && Object.keys(itemErrors).length > 0; // true if any keys

                  if (!hasErrors) {
                    handleSave(originalIndex); // no errors → switch to view mode
                  }
                }}
              >
                Save
              </button>
            </div>
          </div>
        );
      })}
    </Section>
  );
}
