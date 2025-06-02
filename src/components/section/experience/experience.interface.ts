export type ExperienceItem = {
  title?: string;
  subtitle?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  tags?: string[];
  logoUrl?: string;
  email?: string;
  phone?: string;
  website?: string;
  company?: string;
};

export type ExperienceSectionProps = {
  sectionTitle?: string;
  itemDisplayDirection?: 'row' | 'column';
  barColor?: string;
  items: ExperienceItem[];
  onEdit?: (index: number) => void; 
};