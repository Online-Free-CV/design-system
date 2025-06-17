import React from "react";
import { calculateDuration, formatDate } from "../../../utils/dateUtils";
import {
  content,
  dateRange,
  description,
  editButton,
  experienceItem,
  experienceList,
  location,
  logo,
  paragraph,
  subtitle,
  tag,
  tags,
  title,
  titleRow,
} from "./experience.css";
import { ExperienceSectionProps } from "./experience.interface";

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  sectionTitle,
  itemDisplayDirection = "column",
  items,
  themeColor,
  onEdit,
}) => {
  debugger;
  return (
    <>
      {sectionTitle && <h2 className={sectionTitle}>{sectionTitle}</h2>}

      <ul className={experienceList({ layout: itemDisplayDirection })}>
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
                  <button
                    onClick={() => onEdit(idx)}
                    className={editButton}
                    aria-label="Edit"
                    type="button"
                    title="Edit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                    </svg>
                  </button>
                )}
              </div>
              <span className={dateRange}>
                {item.startDate && formatDate(item.startDate)}
                {item.endDate
                  ? ` – ${formatDate(item.endDate)}`
                  : item.startDate && " - Present"}
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

              {item.email && (
                <p className={paragraph}>
                  <b>Email: </b>
                  {item.email}
                </p>
              )}
              {item.phone && (
                <p className={paragraph}>
                  <b>Phone: </b> {item.phone}
                </p>
              )}

              {item.website && (
                <p className={paragraph}>
                  <b>Website: </b>
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.website}
                  </a>
                </p>
              )}
              {item.description && (
                <p className={description}>{item.description}</p>
              )}
              {(item.tags?.length ?? 0) > 0 && (
                <div className={tags}>
                  {item.tags &&
                    item.tags.map((t, tagIdx) => (
                      <span key={tagIdx} className={tag} style={{ backgroundColor: themeColor?.base, color: 'white' }}>
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
