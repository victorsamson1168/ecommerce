// will be responsible for global data transformations
class Formatter {
  static slugify(title: string) {
    if (title) {
      return title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    } else return '';
  }

  static formatDateString(dateString: string | undefined): string {
    if (dateString) {
      const date = new Date(dateString);

      const year = date.getUTCFullYear();
      const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
      const day = date.getUTCDate().toString().padStart(2, '0');
      const hours = date.getUTCHours().toString().padStart(2, '0');
      const minutes = date.getUTCMinutes().toString().padStart(2, '0');
      const seconds = date.getUTCSeconds().toString().padStart(2, '0');

      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
    } else return '';
  }
}

export { Formatter };
