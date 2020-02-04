const URL =
  "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=";

const fetchWiki = (paramsString: string[]) => {
  let wikiResources: string[][] = [];

  let fetchURL = `${URL}${paramsString.join("")}`;

  fetch(fetchURL)
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
  return wikiResources;
};

export default fetchWiki;

// [
//   "NFLSuperbowl",
//   ["NFL Super Bowl", "NFL Super Bowl 50"],
//   ["", ""],
//   [
//     "https://en.wikipedia.org/wiki/NFL_Super_Bowl",
//     "https://en.wikipedia.org/wiki/NFL_Super_Bowl_50"
//   ]
// ];
