export const getBaseUrl = () => 'https://node-api-j076.onrender.com/';
// export const getBaseUrl = () => 'http://10.0.20.132:5000/';
//
export const getParams = (
  obj: Record<string, string | Array<string> | undefined>
) =>
  Object.entries(obj)
    .filter((entry) => entry[1])
    .map(([key, val]) => `${key}=${val}`)
    .join('&');
