import type { Meta, StoryObj } from '@storybook/react';
import { EditableSection } from './index';
import {EditableItem, FieldConfig } from "./editable.interface"

const meta: Meta<typeof EditableSection> = {
  title: 'DesignSystem/OnlineFreeCV/Section/EditableSection',
  component: EditableSection,
};

export default meta;
type Story = StoryObj<typeof EditableSection>;

const workFields: FieldConfig<EditableItem>[] = [
  { key: 'title', label: 'Title', type: 'text' },
  { key: 'subtitle', label: 'Company', type: 'text' },
  { key: 'startDate', label: 'Start Date', type: 'date' },
  { key: 'endDate', label: 'End Date', type: 'date' },
  { key: 'description', label: 'Description', type: 'textarea' },
];
const workDefaultItem: EditableItem = {
  title: 'Software Engineer',
  subtitle: 'Awesome Company',
  startDate: '2020-01-01',
  endDate: '2022-06-01',
  isPresent: false,
  isEdit: true,
  description: 'Worked on developing cool apps.',
};

export const WorkExperience: Story = {
  args: {
    title: 'Work Experience',
    fields: workFields,
    defaultItem: workDefaultItem,
  },
};

const educationFields: FieldConfig<EditableItem>[] = [
  { key: 'title', label: 'Degree', type: 'text' },
  { key: 'subtitle', label: 'School', type: 'text' },
  { key: 'startDate', label: 'Start Date', type: 'date' },
  { key: 'endDate', label: 'End Date', type: 'date' },
  { key: 'description', label: 'Details', type: 'textarea' },
];
const educationDefaultItem: EditableItem = {
  title: 'B.Sc. Computer Science',
  subtitle: 'State University',
  startDate: '2016-08-01',
  endDate: '2020-05-01',
  isPresent: false,
  isEdit: false,
  description: 'Studied software engineering and algorithms.',
};

export const Education: Story = {
  args: {
    title: 'Education',
    fields: educationFields,
    defaultItem: educationDefaultItem,
  },
};

const projectsFields: FieldConfig<EditableItem>[] = [
  { key: 'title', label: 'Project Name', type: 'text' },
  { key: 'subtitle', label: 'Role', type: 'text' },
  { key: 'startDate', label: 'Start Date', type: 'date' },
  { key: 'endDate', label: 'End Date', type: 'date' },
  { key: 'description', label: 'Summary', type: 'textarea' },
];
const projectsDefaultItem: EditableItem = {
  title: 'Portfolio Website',
  subtitle: 'Creator',
  startDate: '2023-01-01',
  endDate: '',
  isPresent: true,
  isEdit: true,
  description: 'Built a personal website to showcase projects.',
};

export const Projects: Story = {
  args: {
    title: 'Projects',
    fields: projectsFields,
    defaultItem: projectsDefaultItem,
  },
};
