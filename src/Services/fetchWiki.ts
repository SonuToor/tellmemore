import { Promise } from "q";

const URL =
  "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=";

const wordsToSkip = ["the", "is", "a", "be", "and", "of", "a", "i", "for"];

export const fetchWiki = (paramsString: string[]) => {
  let wikiResources: string[][] = [];

  let fetchURL = `${URL}${paramsString.join("")}&limit=5`;

  return fetch(fetchURL)
    .then(res => res.json())
    .then(function(data) {
      let titles = data[1];
      let urls = data[3];
      titles.forEach((title: string, index: number) => {
        let articleDetails = [];
        articleDetails.push(title);
        articleDetails.push(urls[index]);
        wikiResources.push(articleDetails);
      });

      return wikiResources;
    });
};

export const fetchWikiSecondary = (paramsString: string[]) => {
  let wikiResources: string[][] = [];
  // @ts-ignore
  return Promise.all(
    paramsString.map(word => {
      if (!wordsToSkip.includes(word)) {
        return fetch(`${URL}${word}&limit=2`)
          .then(res => res.json())
          .then(function(data) {
            let titles = data[1];
            let urls = data[3];
            titles.forEach((title: string, index: number) => {
              let articleDetails = [];
              articleDetails.push(title);
              articleDetails.push(urls[index]);
              wikiResources.push(articleDetails);
            });
          });
      }
    })
  ).then(() => {
    return wikiResources;
  });
};
