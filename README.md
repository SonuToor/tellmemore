# Tell Me More

##### [Learn more about a Twitter trend instantly.](https://tellmemore.netlify.com/)

![logo](https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/08/twitter-796x417.png)

Trending topics on Twitter can be a great snapshot of what is popular or possibly going viral at the time, it can be a breaking news source. Tell Me More allows you to quickly learn more about a trend with a click.

Tell Me More will find you more information about a given trend, whether that be some relevant Wikipedia articles or a Reddit post that has some pertinent information.

This app was built using React and Typescript, with an Express (Node.js) API server that fetches and parses trends. There is some global state that is created and accessed using the React Context API to keep track of trends and avoid unnecessary prop drilling. I made use of styled-components but no other UI framework. With integration and unit tests written with Jest. It makes use of several external API's (Twitter, Reddit, Wikipedia). It is deployed using Netlify and AWS Lambda.

### Get Started

In the root directory:

1. Head over to Twitter's Developer portal [(here)](https://developer.twitter.com/) and make an account.
2. From the Twitter Developer console create an App to get an API Key and API Secret to be stored as environment variables (stored as TWITTER_APIKEY, TWITTER_APISECRET respectively).
3. npm / yarn install
4. npm run dev
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Next steps

In the near future the plan is to add more resources to Tell Me More to increase the breadth and depth of information that can be found.

There is room for improvement on the parseTrends algorithm as it doesn't cover all the edge cases (although the vast majority of trends are covered). The edge cases are listed [here](https://github.com/SonuToor/tellmemore/blob/master/server/ParseTrends.ts). The same goes for fetching from Reddit and Wikipedia, there is room for improvement there as well.

Lastly adding a feature to change the location of trends would be helpful although this would be limited to English speaking or at the very least countries that use a Latin script (as parseTrends relies fundamentally on some assumptions that are present in English grammar).
