export const normalizeResponseErrors = res => {
  // console.log('res utils.js', res)
  if (!res.ok) {
    if (
      res.headers.has("content-type") &&
      res.headers.get("content-type").startsWith("application/json")
    ) {
      return res.json().then(err => Promise.reject(err));
    }
    return Promise.reject({
      code: res.status,
      message: res.statusText
    });
  }
  // console.log('res utils', res)
  return res;
};
