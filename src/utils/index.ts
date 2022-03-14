export const formatErrMsg = (error: any) => {
  const err = { ...error };
  const { response, request, message } = err;
  let errMsg = response
    ? {
        status: response.status,
        message: response.data.message,
      }
    : request
    ? "Network error, please try again later"
    : message;

  return errMsg;
};

export const formatDate = (date: string) => {
  const newDate = new Date(date).toLocaleString();
  return newDate.split(",")[0];
};
