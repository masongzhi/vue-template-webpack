import axios from 'axios';
import URI from 'urijs';

export default function fetch(url, options) {
  const config = handleConfig(url, options);

  return axios(config).then(handleResponse);
}

function ensureAbsoluteUrl(input) {
  if (typeof input !== 'string') return input;
  if (URI(input).is('absolute')) return input;
  // return URI('/api/v1' + input)
  return URI(input)
    .normalize()
    .toString();
}

function handleConfig(url, options) {
  const defaultOptions = {
    method: 'get',
    url: ensureAbsoluteUrl(url),
    timeout: 30 * 1000, // 30秒超时
    withCredentials: true, // 是否允许带cookie
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  };

  if (!options) return defaultOptions;

  let finalOptions = {
    ...defaultOptions,
    ...options,
  };

  finalOptions.method = String.prototype.toLowerCase.call(finalOptions.method);

  if (options && options.query) {
    finalOptions.params = options.query;
  } else if (options && options.body) {
    finalOptions.data = options.body;
  }

  return finalOptions;
}

export function handleResponse(response) {
  return response.data;
}
