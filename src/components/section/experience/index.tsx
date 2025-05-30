import React from "react";
import {
  experienceItem,
  logo,
  content,
  titleRow,
  title,
  dateRange,
  subtitle,
  location,
  description,
  tags,
  tag,
  experienceList,
  editButton
} from "./experience.css";
import { ExperienceSectionProps } from "./experience.interface";
import { calculateDuration, formatDate } from "../../../utils/dateUtils";

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  sectionTitle,
  items,
  onEdit
}) => {
  return (
    <>
      {
        sectionTitle && <h2 className={sectionTitle}>{sectionTitle}</h2>
      }

      <ul className={experienceList}>
        {items.map((item, idx) => (
          <li key={idx} className={experienceItem}>
            {item.logoUrl ? (
              <img
                src={item.logoUrl}
                alt={`${item.title} logo`}
                className={logo}
              />
            ) : (
              <div className={logo}>
                <svg
                  style={{ width: "100%" }}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="80" height="80" rx="12" fill="#E0E0E0" />
                  <path d="M20 60V40H30V60H20Z" fill="#757575" />
                  <path d="M35 60V30H45V60H35Z" fill="#616161" />
                  <path d="M50 60V20H60V60H50Z" fill="#424242" />
                  <circle cx="40" cy="15" r="8" fill="#BDBDBD" />
                </svg>
              </div>
            )}
            <div className={content}>
              <div className={titleRow}>
                <h3 className={title}>{item.title}</h3>
                {onEdit && (
                  <button onClick={() => onEdit(idx)} className={editButton}>
                    ✏️ Edit
                  </button>
                )}
              </div>
              <span className={dateRange}>
                {item.startDate && formatDate(item.startDate)} –{" "}
                {item.endDate ? formatDate(item.endDate) : "Present"}
                <span>
                  {" "}
                  {item.startDate &&
                    item.endDate &&
                    `• ${calculateDuration(item.startDate, item.endDate)}`}
                </span>
              </span>
              {item.subtitle && (
                <div className={subtitle}>
                  {item.subtitle}
                  {item.location && (
                    <span className={location}> • {item.location}</span>
                  )}
                </div>
              )}

              {item.description && (
                <p className={description}>{item.description}</p>
              )}
              {(item.tags?.length ?? 0) > 0 && (
                <div className={tags}>
                  {item.tags &&
                    item.tags.map((t, tagIdx) => (
                      <span key={tagIdx} className={tag}>
                        {t}
                      </span>
                    ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
