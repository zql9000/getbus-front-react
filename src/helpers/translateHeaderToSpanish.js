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

    case 'lastName':
      return 'Apellido';

    case 'username':
      return 'Usuario';

    case 'roleName':
      return 'Rol';

    case 'documentTypeShortName':
      return 'Tipo Doc.';

    case 'documentNumber':
      return 'Nro. Doc.';

    case 'birthdate':
      return 'Fec. Nacimiento';

    default:
      return text;
  }
};
