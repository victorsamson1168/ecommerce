

export const scrollToSection = (
  id: string | null | undefined,
  offset: number = 0
) => {
  if (!id) return;

  const element = document.getElementById(id);
  if (!element) return;

  const parent = element.parentNode;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - offset;
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Adds smooth scrolling animation
  });
};

export const areObjectsEqual = (obj1: any, obj2: any): boolean => {
  // Check if both are objects
  if (
    typeof obj1 === 'object' &&
    obj1 !== null &&
    typeof obj2 === 'object' &&
    obj2 !== null
  ) {
    // Check if both have the same number of keys
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    // Compare each key-value pair recursively
    return keys1.every(
      key => key in obj2 && areObjectsEqual(obj1[key], obj2[key])
    );
  }

  // If either value is an array, compare arrays deeply
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }
    return obj1.every((val, index) => areObjectsEqual(val, obj2[index]));
  }

  // Compare primitive values directly (null, number, string, etc.)
  return obj1 === obj2;
};

export const areAllObjectValuesEmpty = (filterState: any): boolean =>
  Object.values(filterState).every(
    value =>
      Array.isArray(value)
        ? value.length === 0 // Empty array
        : typeof value === 'string'
        ? value.trim() === '' // Empty string
        : typeof value === 'number'
        ? value === 0 // Zero value
        : value === null // Null value
  );

export const sortEmails = (data: any): any => {
  if (data && data?.length > 0) {
    // Sort the data array
    return data.sort((a: any, b: any) => {
      // Compare grades lexicographically (A < B < C < ... )
      if (a.grade < b.grade) return -1;
      if (a.grade > b.grade) return 1;

      // If grades are the same, prioritize 'professional' over 'personal'
      if (a.type === 'professional' && b.type === 'personal') return -1;
      if (a.type === 'personal' && b.type === 'professional') return 1;

      return 0;
    });
  } else return null;
};

export const getFinalEmail = async (talent: any) => {
  const priorityEmails = sortEmails(talent?.emails);

  // let priorityEmail = priorityEmails?.[0]?.email ?? talent?.email;
  // if (!priorityEmail) {
  //   try {
  //     let newEmail = await getTalentEmail(talent.id);
  //     newEmail = sortEmails(newEmail?.data?.emails);
  //     priorityEmail = newEmail?.[0]?.email;
  //   } catch (error) {
  //     return null;
  //   }
  // }
  return "priorityEmail";
};
