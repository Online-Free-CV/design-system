export type ExperienceItem = {
  title?: string;
  subtitle?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  tags?: string[];
  logoUrl?: string;
};

export type ExperienceSectionProps = {
  sectionTitle?: string;
  items: ExperienceItem[];
  onEdit?: (index: number) => void; 
};