import { UserType } from '.';

export enum JobNoticePeriodEnum {
  /** Job notice period - immediate */
  IMMEDIATE = 'DAY0',
  /** Job notice period - up to 15 days */
  DAY15 = 'DAY15',
  /** Job notice period - up to 30 days */
  DAY30 = 'DAY30',
  /** Job notice period - up to 45 days */
  DAY45 = 'DAY45',
  /** Job notice period - up to 60 days */
  DAY60 = 'DAY60',
  /** Job notice period - up to 90 days */
  DAY90 = 'DAY90',
}

export enum JobCurrencyEnum {
  /** Job currency - inr */
  INR = 'INR',
  /** Job currency - kwr */
  KRW = 'KRW',
  /** Job currency - usd */
  USD = 'USD',
}

export enum JobEducationEnum {
  /** Job education - irrelevant */
  IRRELEVANT = 'IRRELEVANT',
  /** Job education - bachelor */
  BACHELOR = 'BACHELOR',
  /** Job education - master */
  MASTER = 'MASTER',
  /** Job education - doctorate */
  DOCTORATE = 'DOCTORATE',
}

export enum JobExperienceEnum {
  /** Job experience - irrelevant */
  IRRELEVANT = 'IRRELEVANT',
  /** Job experience - fresher */
  FRESHER = 'FRESHER',
  /** Job experience - experienced */
  EXPERIENCED = 'EXPERIENCED',
}

export enum JobEmploymentEnum {
  /** Job employment - negotiable */
  NEGOTIABLE = 'NEGOTIABLE',
  /** Job employment - full time */
  FULL_TIME = 'FULL_TIME',
  /** Job employment - part time */
  PART_TIME = 'PART_TIME',
  /** Job employment - intern */
  INTERN = 'INTERN',
  /** Job employment - Contractual */
  CONTRACTUAL = 'CONTRACTUAL',
}

export type JopWithCount = {
  data: JobPostType[];
  count: any;
};

export type JobPostType = {
  /** Job Post id */
  id: string;
  /** job post id according  new api  */
  _id: string;
  /** Assessent title */
  title: string;
  /** Job Post description */
  description: string;
  /** Job Post state */
  isOpen: boolean;
  /** Job Post created time */
  createdAt: string;
  /** Job Post updated time */
  updatedAt: string;
  /** Job Post notice period */
  noticePeriod: string;
  /** Job Post expected salary */
  expectedSalary: number;
  /** Job Post expected salary */
  minSalary: number;
  /** Job Post expected salary */
  maxSalary: number;
  /** Job Post negotiable */
  negotiable: boolean;
  /** Job Post employment type */
  employmentType: string;
  /** Job Post location */
  locations: string;
  /** Job experience */
  experience: string;
  /** Min job experience */
  minExperience: number;
  /** Max job experience */
  maxExperience: number;
  /** Job education */
  education: string;
  /** Job skills */
  skills: string[];
  /** Job publishedAt */
  publishedAt: string;
  /** Job closedAt */
  closedAt: string;
  /** Job archiveAt */
  archivedAt: string;
  /** Job currency */
  currency: string;
  /** Job stages */
  stages: JobCount;
  /** Job overview */
  overview: any;
  /** Job applications */
  applications: JobCount;
  /**  count  */
  count: string;
  /**  job boosted  */
  jobBoosted: string;
  /** Job count */
  _count: JopCountType;
  isSalaryDisclosed: boolean;
  /** Internship/Contract duration */
  duration: number;
  /** is Remote job */
  isRemote: boolean;
  isArchived: boolean;
  /** Locations */
  locationIds: { _id: string; name: string };
};

export type JopCountType = {
  applications: number;
};
export type JobCount = {
  split(arg0: string): string | TrustedHTML;
  count: number;
};

export type ApplicationType = {
  /** Application id */
  id: string;
  /** Application created date */
  createdAt: string;
  /** Application currency option */
  currency: string;
  /** Application education option */
  education: string;
  /** Application expected salary option */
  expectedSalary: number;
  /** Application expected experience option */
  experience: number;
  /** Job id */
  jobId: string;
  /** Job type */
  jobType: string;
  /** Job location */
  location: string;
  /** Job notice period */
  noticePeriod: string;
  /** Job phone number */
  phoneNumber: string;
  /** Job need skills option */
  skills: string[];
  /** Job need stage option */
  stage: string;
  /** Job updated date */
  updatedAt: string;
  /** Job apply user */
  user: UserType;
  /** Job apply user id */
  userId: string;
};

export type Experience = 'INTERN' | 'FRESHER' | 'EXPERIENCED' | '';
export type ScoreCriteriaOption = 'MORE_THAN_OR_EQUAL' | 'MORE_THAN';

export type ApplicationFilterType = {
  noticePeriod: string[];
  location: any[];
  experience: {
    experience: Experience;
    experienceStart: string;
    experienceEnd: string;
  };
  salary: { currency: string; minSalary: string; maxSalary: string };
  preScreening: boolean;
};

export type LocationType = {
  _id: string;
  value?: string;
  key?: string;
};

export type PrescreenQuestionsType = {
  question: string;
  type: string;
  options: { value: string; isPreferredAnswer: boolean }[];
  isStarred: boolean;
};

export type QuestionType = {
  id: string;
  question: string;
  type: 'string';
  isStarred?: boolean;
  options: {
    id: string;
    option: string;
    isPreferredAnswer?: boolean;
  };
  action?: string;
};

export type StageType = {
  /** order of the stage */
  order: number;
  /** name of the stage */
  name: string;
  /** label of the stage */
  label: string;
  /** minimum score of the stage */
  minScore?: number | null;
  /** score criteria of the stage */
  scoreCriteria?: ScoreCriteriaOption | null;
  /** assessment for the given stage */
  assessmentId?: any;
  /** automation to move to next stage */
  allowAutomation: boolean;
};
