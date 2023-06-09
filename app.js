const InstaFetcherPro = require('./insta-fetcher-pro');

(async () => {
  const fetcher = new InstaFetcherPro();
  const posts = await fetcher.getPostsByUsername('instagram');
  
  for (const post of posts) {
    console.log(`ID: ${post.id}`);
    console.log(`Type: ${post.type}`);
    console.log(`Media URL(s): ${post.mediaUrl}`);
    console.log(`Caption: ${post.caption}`);
    console.log(`Timestamp: ${post.timestamp}`);
    console.log('-------------------------');
  }
  
})();
