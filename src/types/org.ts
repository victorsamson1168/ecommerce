export type OrgCoverImageType = {
  /** ID of the image, represented as a string. */
  id: string;
  /** Name of the file, represented as a string. */
  name: string;
  /** S3 URL of the file, represented as a string. */
  url: string;
  /** Extension of the file, represented as a string. */
  extension: string;
  /** Size of the file in MB, represented as a string. Note: It may be more appropriate to represent size as a number if performing calculations. */
  size: string;
};

export type OrgType = {
  /** The hexadecimal color code for the banner. */
  bannerColor: string;
  /** The hexadecimal color code for buttons. */
  buttonColor: string;
  /** The size of the company, represented as a string. */
  companySize: string;
  /** The URL or null for the cover image. This can be a string URL or null if no cover image is set. */
  coverImage: OrgCoverImageType | File | null;
  /** A brief description of the organization, represented as a string. */
  description: string;
  /** The organization's Facebook page URL. Can be null if not available. */
  facebook: string | null;
  /** An array of galleries associated with the organization. Should be an array of a specific type if galleries have a defined structure. */
  galleries: any[];
  /** The title of the gallery. Can be null if not available. */
  galleryTitle: string | null;
  /** A unique identifier for the organization, represented as a string. */
  id: string;
  /** Industry field scheduled to be eliminated */
  industry: string;
  /** The industry the organization operates within, represented as a string. */
  industryId: string;
  /** The location array render as string */
  locationId: string[];
  /** The profile image as formdata */
  profile: FormData;
  /** The organization's Instagram page URL. Can be null if not available. */
  instagram: string | null;
  /** The website link of the organization, represented as a string. */
  link: string;
  /** The organization's LinkedIn page URL. Can be null if not available. */
  linkedin: string | null;
  /** The location of the organization, represented as a string. */
  location: string;
  /** The URL of the organization's logo. Represented as a string URL. */
  logo: string;
  /** The name of the organization, represented as a string. */
  name: string;
  /** An array of office locations for the organization. Should be an array of a specific type if offices have a defined structure. */
  offices: any[];
  /** The organization's misc social page URL. Can be null if not available. */
  otherSocial: string | null;
  /** The annual revenue of the organization, represented as a string. It could be an actual revenue figure or a range. */
  revenue: string;
  /** The annual revenue of the organization is disclosed or not : represented as boolean */
  isRevenueDisclosed: boolean;
  /** An array of reviews for the organization. Should be an array of a specific type if reviews have a defined structure. */
  reviews: any[];
  /** A unique slug identifying the organization, represented as a string. */
  slug: string;
  /** Areas the organization specializes in, represented as an array of strings. */
  specialized: string[];
  /** The organization's Twitter page URL. Can be null if not available. */
  twitter: string | null;
  /** A welcome text for visitors, can be null if not set. */
  welcomeText: string | null;
  /**  company industry    */
  companyIndustry: { id: string; title: string } | null;
};
