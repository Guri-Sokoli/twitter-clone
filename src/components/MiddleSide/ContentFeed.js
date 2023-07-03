import UserTweet from "./UserTweet";
export default function ContentFeed() {
  return (
    <div className="flex-1 bg-black text-white pb-2">
      <UserTweet />
      <UserTweet />
      <UserTweet />
      <UserTweet />
    </div>
  );
}
