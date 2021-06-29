export const getPaginationDataFromRequest = (ServerInstance, req) => {
  const { config } = ServerInstance;
  const { MAX_PAGE_LENGTH } = config;
  const maxLimit = Number(MAX_PAGE_LENGTH);
  const { query } = req;
  const { rawPage = 1, limit: rawLimit = maxLimit } = query;

  const page = isNaN(rawPage) ? 1 : Number(rawPage);
  const nLimit = isNaN(rawLimit) ? maxLimit : Number(rawLimit);

  const limit = nLimit > maxLimit ? maxLimit : nLimit;

  return {
    page,
    limit,
  };
};
