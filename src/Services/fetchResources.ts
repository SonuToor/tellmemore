import fetchReddit from "./fetchReddit";
import { fetchWiki } from "./fetchWiki";
import { fetchWikiSecondary } from "./fetchWiki";

const fetchResources = async (resource: string, params: string[]) => {
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
    let results = await fetchWiki(paramsString);
    // if querying Wikipedia with all words of the trend doesn't work, try each word invididually
    if (results.length === 0) {
      return await fetchWikiSecondary(paramsString);
    } else {
      return fetchWiki(paramsString);
    }
  }
};

export default fetchResources;
