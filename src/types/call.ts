export type ScheduleType = {
  /** Schedule - company name */
  companyName: string;
  /** Schedule - company logo */
  companyLogo: string;
  /** Schedule - candidate first name */
  candidateFirstName: string;
  /** Schedule - candidate last name */
  candidateLastName: string;
  /** Schedule - assessment time limit */
  timeLimit: 0;
  /** Schedule - assessment title */
  assessmentTitle: string;
  /** Schedule - access token */
  accessToken: ScheduleAssessTokenType;
  /** Company name of the client */
  clientCompanyName: string;
};

export type ScheduleAssessTokenType = {
  /** wss */
  wss: string;
  /** token */
  token: string;
};
