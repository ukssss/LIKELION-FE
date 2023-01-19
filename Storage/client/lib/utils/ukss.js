const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

export const ukss = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  console.log(restOptions);

  let response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

ukss.get = async (url, options) => {
  return ukss({
    url,
    ...options,
  });
};

ukss.post = (url, body, options) => {
  return ukss({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

ukss.put = (url, body, options) => {
  return ukss({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

ukss.delete = (url, options) => {
  return ukss({
    method: "DELETE",
    url,
    ...options,
  });
};
