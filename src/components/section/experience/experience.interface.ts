export type ImageLikeProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "high" | "low" | "auto";
};

export type ImageLikeComponent = React.ComponentType<ImageLikeProps>;

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
  themeColor?: {
  gradient: string;
  base: string;
  };
  items: ExperienceItem[];
  imageComponent?: ImageLikeComponent;
  onEdit?: (index: number) => void; 
};