import { UserType } from '.';

export enum AssessmentChoiceEnum {
  /** Question type - single choice */
  SCQ = 'SCQ',
  /** Question type - multiple choice */
  MCQ = 'MCQ',
  /** Question type - coding */
  CQ = 'CQ',
  /** Question type - writing */
  WQ = 'WQ',
  /** Question type - verbal */
  VQ = 'VQ',
  /** Question type - attachment */
  AQ = 'AQ',
  /** Question type - logic */
  LQ = 'LQ',
  /** Question type - situational */
  SQ = 'SQ',
  /** Question type - File upload */
  FQ = 'FQ',
  /** Question type - Interactive AI questions */
  IAIQ = 'IAIQ',
}

export enum AssessmentStatusEnum {
  /** Assessment status - graded */
  GRADED = 'GRADED',
  /** Assessment status - started */
  STARTED = 'STARTED',
  /** Assessment status - completed */
  COMPLETED = 'COMPLETED',
}

export enum AssessmentLevelEnum {
  /** Question level type - easy */
  EASY = 'EASY',
  /** Question level type - intermediate */
  INTERMEDIATE = 'INTERMEDIATE',
  /** Question level type - advanced */
  ADVANCED = 'ADVANCED',
}

export type AssessmentChoiceType = {
  /** Assessment choice id */
  id?: string;
  /** Assessment choice order */
  order: number;
  /** Assessment choice input value */
  body: string;
  /** Assessment choice answer */
  answer: boolean;
  /** Assessment section id */
  assessmentSectionId?: string;
  /** Assessment question id */
  assessmentQuestionId?: string;

  /** Assessment choice input value new field */
  name?: string;
};

export type AssessmentQuestionType = {
  /** Assessment question id */
  id?: string;
  /** Max attainable score on the quesetion */
  score?: number;
  /** Assessment question order */
  order?: number;
  /** Assessment question prompt */
  prompt?: string;
  /** Assessment question enum type - mcq/cq/wq/vq */
  type?: AssessmentChoiceEnum;
  /** Assessment question image */
  image?: File;
  /** Desired length of the WQ response */
  length?: number;
  /** Desired keywords of the WQ response */
  keywords?: string[];
  /** Assessment question setion id */
  assessmentSectionId?: string;
  /** Assessment question choices array */
  choices?: AssessmentChoiceType[];
  /** Assessment logic question exemplary */
  lqData?: any[];
  /** Assessment situational question data */
  sqData?: any;
  description?: any;
};

export type AssessmentSectionType = {
  /** Assessment setion id */
  id: string;
  /** Assessment setion unique id */
  assessmentId: string;
  /** Assessment section order */
  order: number;
  /** Assessment questions */
  questions: AssessmentQuestionType[];
  /** Assessment title */
  title: string;
};

export type AssessmentType = {
  _id: any;
  /** Assessment id */
  id: string;
  /** Assessent title */
  title: string;
  /** Assessment description */
  description: string;
  /** Assessment state */
  isOpen: boolean;
  /** Assessment live state */
  isLive: boolean;
  /** Assessment archived state */
  isArchived: boolean;
  /** Assessment section count */
  sectionCount: number;
  /** Assessment question count */
  questionCount: number;
  /** Assessment section - assessment id, title */
  sections: AssessmentSectionType[];
  /** Assessment submission count */
  submissionCount?: number;
  /** Assessment created time */
  createdAt: string;
  /** Assessment updated time */
  updatedAt: string;
  /** Assessment average score */
  averageScore?: number;
  /** Assessment average completion time */
  averageTimeTaken?: number;
  averageTime?: number;

  /** Assessment by top companies */
  topCompanies: { name: string; logo: string }[];

  /** Assessment used by total companies */
  companyCount: number;

  /** Assessment badges */
  badges?: { type: string; label: string }[];

  seniorityLevel?: string;
  isScheduled: boolean;

  /** Assessment type : psychometric or normal */
  isPsychometric: boolean;
  timeLimit: string;
  isOngoing: boolean;
  /** company name */
  clientCompanyName?:string;
};

export type QuestionType = {
  id: string;
  /** Question title */
  name: string;
  /** Question title */
  title: string;
  /** question category */
  category: string;
  /** Question description */
  description: string;
  /** Question estimated time */
  estimateTime: number;
  /** tags */
  tags: string[];
  /** created at date and time */
  createdAt: string;
  /** question type */
  type: AssessmentChoiceEnum;
  /** question difficulty */
  difficulty: string;
  /** Question badges */
  badges?: { type: string; label: string }[];
};

export type AssessmentWithCount = {
  data: AssessmentType[];
  count: any;
};

export type AssessmentSubmissionType = {
  /** status of assessment evaluation */
  status?: string;
  /** Table information - section id */
  id: string;
  /** Table information - assessment id */
  assessmentId: string;
  /** Table information - user */
  user: UserType;
  /** Table information - stauts */
  category: string;
  /** Table information - score */
  score: number;
  /** Table information - result */
  result: string;
  /** Table information - completed date */
  completedAt: string;
  /** Table information - completed time */
  time: number;
};

export type AssessmentSubmissionPagiantionType = {
  /** Assessment id */
  aid: string;
  /** Assessment status */
  status: string;
  /** Clicked page */
  skip: number;
  /** Sliced page limit */
  limit: number;
};

export type AssessmentQuestionBankType = {
  /** Assessment question - choices */
  choices: any[];
  /** Assessment question - difficulty */
  difficulty: string;
  /** Assessment question - hashtags */
  hashtags: string[];
  /** Assessment question - length */
  length: number;
  /** Assessment question - prompt */
  prompt: string;
  /** Assessment question - score */
  score: number;
  /** Assessment question - type */
  type: AssessmentChoiceEnum;
  /** Assessment question - id */
  _id: string;
};
