import { JobCurrencyEnum } from '@/types/job';

export const featureList = [
  {
    subtitle: 'Step 1',
    title: 'Choose your keyword',
    image: '/app/images-jp/stepone.svg',
    content: 'Either choose from our suggested keywords or type your own.',
  },
  {
    subtitle: 'Step 2',
    title: 'Let our AI do your job',
    image: '/app/images-jp/steptwo.svg',
    content:
      'It will generate your skill test questions for you to get started.',
  },
  {
    subtitle: 'Step 3',
    title: 'Edit your skill test questions',
    image: '/app/images-jp/stepthree.svg',
    content: 'Customize your skill test questions to suit your needs.',
  },
  {
    subtitle: 'Step 4',
    title: 'Share with a single click',
    image: '/app/images-jp/stepfour.svg',
    content: 'Share links on job posts or directly  with your candidates.',
  },
];

export const hireStepList = [
  {
    subtitle: 'Step 1',
    title: 'Choose the position you need',
    image: '/app/images-jp/hireStep1.svg',
    content: 'Either choose from our suggested keywords or type your own.',
  },
  {
    subtitle: 'Step 2',
    title: 'Let our AI do your job',
    image: '/app/images-jp/hireStep2.svg',
    content: 'It will generate your job post for you to get started.',
  },
  {
    subtitle: 'Step 3',
    title: 'Edit your job post',
    image: '/app/images-jp/hireStep3.svg',
    content: 'Customize your job post to suit your needs.',
  },
  {
    subtitle: 'Step 4',
    title: 'Now, wait for the applications',
    image: '/app/images-jp/hireStep4.svg',
    content: 'Share links on other platforms or directly with your candidates.',
  },
];

export const premadeTemplateList = [
  {
    title: 'Frontend Developer',
    image: '/app/images-jp/premade-temp.svg',
    content: 'Lorem ipsum dolorvoluptatibus, edis.',
    href: '/assess/test',
  },
  {
    title: 'Create template with simple clicks',
    image: '/app/images-jp/premade-temp.svg',
    content: 'Lorem ipsum dolorvoluptatibus, edis.',
    href: '/assess/test',
  },
  {
    title: 'Take a look at the preview of the template',
    image: '/app/images-jp/premade-temp.svg',
    content: 'Lorem ipsum dolorvoluptatibus, edis.',
    href: '/assess/test',
  },
  {
    title: 'Take a look at the preview of the template',
    image: '/app/images-jp/premade-temp.svg',
    content: 'Lorem ipsum dolorvoluptatibus, edis.',
    href: '/assess/test',
  },
];

export const profilePopperMenus = [
  { id: 1, title: 'Account setting', link: '/app/profile' },
  // { id: 2, title: 'My Organization', link: '/org' },
];

export const reportCategory = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Neuroticism',
    value: 'NEUROTICISM',
  },
  {
    label: 'Extraversion',
    value: 'EXTRAVERSION',
  },
  {
    label: 'Openness To Experience',
    value: 'OPENNESS_TO_EXPERIENCE',
  },
  {
    label: 'Agreeableness',
    value: 'AGREEABLENESS',
  },
  {
    label: 'Conscientiousness',
    value: 'CONSCIENTIOUSNESS',
  },
];

export const currencyOptions: any[] = [
  {
    label: 'USD ($)',
    value: JobCurrencyEnum.USD,
  },
  {
    label: 'KRW (원)',
    value: JobCurrencyEnum.KRW,
  },
  {
    label: 'INR (₹)',
    value: JobCurrencyEnum.INR,
  },
];

export const mobileCodeOptions: any[] = [
  { label: '+91', value: '+91' },
  { label: '+82', value: '+82' },
  { label: '+1', value: '+1' },
];

export const upcomingFeature: any[] = [
  {
    title: 'Linkedin',
    description: `Connect with top talent through LinkedIn's professional network, leveraging advanced recruitment tools`,
    icon: 'linkedin.svg',
  },
  {
    title: 'Deel',
    description: `Manage payroll for teams across multiple countries, ensuring seamless global operations`,
    icon: 'deel.svg',
  },
  {
    title: 'Naukri',
    description: `India's leading job search platform, offering powerful assistance for talent acquisition and job postings`,
    icon: 'naukri.svg',
  },
  {
    title: 'Remote',
    description: `Full-service HR, payroll, and compliance platform for managing distributed teams globally`,
    icon: 'remote.svg',
  },
  {
    title: 'Upwork',
    description: `Access a global pool of freelancers for flexible project-based work`,
    icon: 'upwork.svg',
  },
  {
    title: 'Testgorilla',
    description: `Assess candidates with over 400 skills-based tests to make data-driven decisions`,
    icon: 'testgorila.svg',
  },

  {
    title: 'Drive',
    description: `Collaborate on files with your team in real-time, ensuring seamless document management.`,
    icon: 'gdrive.svg',
  },
  {
    title: 'Gmail',
    description: `Centralize your email communications to manage candidate hiring process.`,
    icon: 'gmail.svg',
  },
];
