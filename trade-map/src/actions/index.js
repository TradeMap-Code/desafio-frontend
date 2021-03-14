export const dataFetched = (data) => {
  return {
    type: 'DATA_FETCHED',
    value: data,
  };
};
