export const getError = (body) => {
  if (body.message) {
    return body.message;
  }

  if (body.errors) {
    let error = '';

    for (const field in body.errors) {
      if (Object.hasOwnProperty.call(body.errors, field)) {
        const element = body.errors[field];
        error += element.msg + ', ';
      }
    }

    if (error.length > 2) {
      error = error.slice(0, -2);
    }

    return error;
  }

  return '';
};
