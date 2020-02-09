import fetchReddit from "./fetchReddit";
import fetchWiki from "./fetchWiki";

const fetchResources = (resource: string, params: string[]) => {
  let paramsStringLength = params.length;
  let paramsString = params.map((param, index) => {
    if (index !== paramsStringLength - 1) {
      return `${param}+`;
    } else {
      return `${param}`;
    }
  });
  if (resource === "Reddit") {
    return fetchReddit(paramsString);
  } else if (resource === "Wiki") {
    return fetchWiki(paramsString);
  }
};

export default fetchResources;
