const URL =
  "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=";

// to do limit results to only 3s
const fetchWiki = (paramsString: string[]) => {
  let wikiResources: string[][] = [];

  let fetchURL = `${URL}${paramsString.join("")}`;

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

export default fetchWiki;
