export type ProfileType = {
  /** User first name */
  firstName: string;
  /** User last name */
  lastName: string;
};

export type CompanyType = {
  /** User company name */
  name: string;
  /** User company description */
  description: string;
  /** User company location */
  location: string;
  /** User company link */
  link: string;
  /** User company logo image */
  profile: File | null;
};
