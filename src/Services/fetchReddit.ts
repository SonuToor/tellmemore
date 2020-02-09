const URL = [
  "https://www.reddit.com/search.json?q=",
  "&sort=top&limit=5&t=day"
];

const fetchReddit = (paramsString: string[]) => {
  let redditResources: string[][] = [];
  let fetchURL = `${URL[0]}${paramsString.join("")}${URL[1]}`;

  return fetch(fetchURL)
    .then(res => res.json())
    .then(function(res) {
      let redditPosts: [{ [x: string]: { [x: string]: string } }];
      redditPosts = res.data.children;

      redditPosts.forEach(post => {
        let postDetails = [];
        postDetails.push(post.data.title);
        postDetails.push(`https://www.reddit.com${post.data.permalink}`);
        redditResources.push(postDetails);
      });
      return redditResources;
    });
};

export default fetchReddit;
