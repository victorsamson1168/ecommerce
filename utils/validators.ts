export class Validator {
  static isValidPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) return true;
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  };

  static isValidEmail = (email: string) => {
    if (!email) return false;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  static isValidString = (str: string, min?: number): boolean => {
    // include the rules for removing the special character
    const len = String(str).trim().length;
    if (min) {
      return len > min;
    } else return len > 0;
  };

  static isValidDomain(domain: string) {
    const urlRegex = /^((https?):\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/i;
    return urlRegex.test(domain);
  }
  static isValidNumber(text: string) {
    if (!text) return true;
    const integerRegex = /^[-+]?\d+$/;
    return integerRegex.test(text);
  }
  static isValidFloat(text: string) {
    if (!text) return true;
    const floatRegex = /^[+-]?(\d+([.]?\d*)?)$/;
    return floatRegex.test(text);
  }
  static isAnsweredQuestion(response: any) {
    if (!response) return false;
    if (response?.type === 'MCQ' || response?.type === 'SCQ') {
      return response.choices?.length > 0;
    } else if (response?.type === 'IAIQ') {
      return !!response?.conversation;
    } else if (response.type === 'AQ') {
      return !!response.file;
    } else if (response.type === 'CQ') {
      return response?.isAnswered;
    } else {
      return !!response?.text?.trim();
    }
  }
  static isValidLinkedInUrl(url: string): boolean {
    const linkedInRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*/i;
    return linkedInRegex.test(url);
  }
}
