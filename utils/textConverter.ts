import { AssessmentChoiceEnum } from '@/types';

export const convertCapsAndUnderscore = (inputString: string): string => {
  if (!inputString) {
    return inputString;
  }
  // Convert full caps to only first letter caps
  let convertedString: string = inputString
    ?.toLowerCase()
    ?.replace(/^./, inputString[0].toUpperCase());

  // Replace underscore with space
  convertedString = convertedString?.replace(/_/g, ' ');

  // Correct the capitalization of the second and subsequent words
  // convertedString = convertedString?.replace(/\b\w/g, firstLetter => {
  //   return firstLetter?.toUpperCase();
  // });

  return convertedString;
};

export const expandQuestionTypeToFullForm = (type: string) => {
  const assessmentChoiceDescriptions = {
    [AssessmentChoiceEnum.SCQ]: 'Single choice',
    [AssessmentChoiceEnum.MCQ]: 'Multiple choice ',
    [AssessmentChoiceEnum.CQ]: 'Coding question',
    [AssessmentChoiceEnum.WQ]: 'Writing question',
    [AssessmentChoiceEnum.VQ]: 'Video question',
    [AssessmentChoiceEnum.AQ]: 'Attachment question',
    [AssessmentChoiceEnum.LQ]: 'Logic question',
    [AssessmentChoiceEnum.SQ]: 'Situational',
    [AssessmentChoiceEnum.FQ]: 'File upload',
    [AssessmentChoiceEnum.IAIQ]: 'Interactive AI',
  };
  return assessmentChoiceDescriptions?.[type as AssessmentChoiceEnum];
};

export const htmlToNormalText = (htmlText: string) => {
  let d = document.createElement('div');
  d.innerHTML = htmlText;
  let textContent = d.textContent || d.innerText;
  return textContent;
};



// text convert into sentance case

export const toSentenceCase = (str:any) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};