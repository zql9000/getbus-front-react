export const translateHeaderToSpanish = (text) => {
  switch (text) {
    case 'name':
      return 'Nombre';

    case 'shortName':
      return 'Nombre corto';

    case 'provinceName':
      return 'Provincia';

    case 'cityName':
      return 'Ciudad';

    default:
      return text;
  }
};
