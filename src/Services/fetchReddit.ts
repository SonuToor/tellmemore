import Resource from "../Components/ResourceComponents/Resource";

// is this the only URL to pull from?
// what about r/popular
// what about sorting by hot?

const URL1 = [
  "https://www.reddit.com/r/all/search.json?q=",
  "&sort=top&limit=3"
];

const URL2 = [
  "https://www.reddit.com/r/popular/search.json?q=",
  "&sort=top&limit=3"
];

const fetchReddit = (paramsString: string[]) => {
  let redditResources: string[][] = [];
  let fetchURL = `${URL1[0]}${paramsString.join("")}${URL1[1]}`;

  fetch(fetchURL)
    .then(res => res.json())
    .then(function(res) {
      let redditPosts: [{ [x: string]: { [x: string]: string } }];
      redditPosts = res.data.children;

      redditPosts.forEach(post => {
        let postDetails = [];
        postDetails.push(post.data.title);
        postDetails.push(post.data.permalink);
        redditResources.push(postDetails);
      });
    });

  return redditResources;
};

export default fetchReddit;
