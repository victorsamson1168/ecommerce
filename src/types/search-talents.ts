

export type SearchTalentType = {
  /** Talent - page number */
  skip: number;
  /** Talent - slice page limit */
  limit: number;
  /** Talent - job list */
  job: string[];
  /** Talent - skills list */
  skills: string[];
  /** Talent - least experience year */
  leastExperienceYear: string | undefined;
  /** Talent - maximum experience year */
  maxExperienceYear: string | undefined;
  /** Talent - salary start value */
  salaryStart: string | undefined;
  /** Talent - salary end value */
  salaryEnd: string | undefined;
  /** Talent - salary currency */
  salaryCurrency: string | undefined;
  /** Talent - company list */
  company: string[];
  /** Talent - school list */
  school: string[];
  /** Talent - location */
  location: string | undefined;
  /** Talent - degree list */
  degree: string[];
  /** Talent - highly open to work */
  isOpenToWork: boolean;
};

export type SearchResultType = {
  /** next to use pagination */
  hasNext: true;
  /** result total count */
  totalCount: 0;
  /** result list */
  result: any[];
};

export type SearchTagType = {
  /** tag id */
  id: string;
  /** tag frequency */
  frequency: number;
  /** tag value */
  value: string;
  /** tag type */
  type: string;
};

export type SearchTalentFilterType = {
  noticePeriod: string[];
  location: any[];
  experience: {
    experienceStart: string;
    experienceEnd: string;
  };
  salary: { currency: string; minSalary: string; maxSalary: string };
  position: any[];
};
