export const translateHeaderToSpanish = (text) => {
  switch (text) {
    case 'name':
      return 'Nombre';

    case 'shortName':
      return 'Nombre corto';

    default:
      return text;
  }
};
