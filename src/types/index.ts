export interface UserType {
  /** User Id */
  id: string;
  /** User createdAt */
  createdAt: string;
  /** User updatedAt */
  updatedAt: string;
  /** User email */
  email: string | null;
  /** User first name */
  firstName: string | null;
  /** User last name */
  lastName: string | null;
  /** User's company's pricing plan */
  pricingPlan?: any;
}

export interface ModuleFeatureType {
  /** Feature card title */
  title: string;
  /** Feature card image */
  image: string;
  /** Feature card content */
  content: string;
  /** Feature card subtitle */
  subtitle: string;
}

export interface AssessmentTemplateType {
  /** Assess main/premade template card types - title */
  title: string;
  /** Assess main/premade template card types - card image */
  image: string;
  /** Assess main/premade template card types - card content */
  content: string;
  /** Assess main/premade template card types - card link */
  href: string;
}

export interface ExplanationTypes {
  /** Assess main/explanation card types - title */
  title: string;
  /** Assess main/explanation card types - content */
  content: string;
}

export interface RadioOptionsTypes {
  /** Radio option label */
  label: string;
  /** Radio option value */
  value: string;
}

export type ModalType = {
  /** Modal title name */
  title: string;
  /** Modal link */
  link: string;
};

export type JobPostTabOptionsType = {
  /** Job post tab label */
  label: string;
  /** Job post tab value */
  value: string;
};

export enum InputType {
  /** Input type - radio */
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
}
export * from './asessment';
