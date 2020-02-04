import fetchReddit from "./fetchReddit";
import fetchWiki from "./fetchWiki";

// interface Resource {
//   [title: string]: string;
// }

// interface Resources {
//   [type: string]: Resource;
// }

const fetchResources = (resource: string, params: string[]) => {
  let paramsStringLength = params.length;
  let paramsString = params.map((param, index) => {
    if (index !== paramsStringLength - 1) {
      return `${param}+`;
    } else {
      return `${param}`;
    }
  });
  if (resource === "reddit") {
    return fetchReddit(paramsString);
  } else if (resource === "wiki") {
    return fetchWiki(paramsString);
  }
};

export default fetchResources;
