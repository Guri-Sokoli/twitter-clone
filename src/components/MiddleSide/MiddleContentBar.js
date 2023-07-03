import ContentHeader from "./ContentHeader";
import ContentTweet from "./ContentTweet";
import ContentFeed from "./ContentFeed";
export default function MiddleContentBar() {
  return (
    <div className="flex-1 bg-black">
      <ContentHeader />
      <ContentTweet />
      <ContentFeed />
    </div>
  );
}
