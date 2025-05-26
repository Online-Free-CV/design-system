import { Meta, StoryObj } from '@storybook/react';
import { ExperienceSection } from './index';

const meta: Meta<typeof ExperienceSection> = {
  title: 'DesignSystem/OnlineFreeCV/Section/ExperienceSection',
  component: ExperienceSection,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ExperienceSection>;

export const WorkExperience: Story = {
  args: {
    sectionTitle: 'Work Experience',
    items: [
      {
        title: 'Software Engineer',
        subtitle: 'Tech Company Inc.',
        startDate: '2021-01-01',
        endDate: '2023-04-01',
        location: 'Remote',
        description:
          'Led frontend development for a SaaS platform using React, improving performance by 30%.',
        tags: ['React', 'TypeScript', 'Agile'],
        logoUrl: 'https://onlinefreecv.com/assets/images/logo/online-free-cv-logo.svg',
      },
    ],
  },
};

export const Education: Story = {
  args: {
    sectionTitle: 'Education',
    items: [
      {
        title: 'B.Sc. Computer Science',
        subtitle: 'University of Innovation',
        startDate: '2021-01-01',
        endDate: '2023-04-01',
        location: 'New York, NY',
        description: 'Focused on software engineering, algorithms, and UI/UX.',
        tags: ['GPA: 3.9', 'Dean’s List'],
        logoUrl: '/logos/university.svg',
      },
    ],
  },
};

export const Projects: Story = {
  args: {
    sectionTitle: 'Projects',
    items: [
      {
        title: 'Online Portfolio',
        subtitle: 'Personal Project',
        startDate: '2021-01-01',
        endDate: '2023-04-01',
        description:
          'Built a portfolio website using Next.js and deployed with Vercel. Integrated a custom design system.',
        tags: ['Next.js', 'Tailwind CSS', 'Design System'],
        logoUrl: '/logos/portfolio.svg',
      },
    ],
  },
};
