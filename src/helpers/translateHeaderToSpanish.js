export const translateHeaderToSpanish = (text) => {
  switch (text) {
    case 'name':
      return 'Nombre';

    case 'seat':
      return 'Asiento';

    default:
      return text;
  }
};
