import Trends from "./Trends";
import FollowRec from "./FollowRec";
import SearchBar from "./SearchBar";
export default function RightWidgets() {
  const TrendsList = [
    {
      topic: "Newgrounds",
      tweets: "1.2M Tweets",
    },
    {
      topic: "Snapchat",
      tweets: "60.7K Tweets",
    },
    {
      topic: "TikTok",
      tweets: "2,247 Tweets",
    },
    {
      topic: "Europe",
      tweets: "184K Tweets",
    },
    {
      topic: "Africa",
      tweets: "31.9K Tweets",
    },
    {
      topic: "Cobra Tate",
      tweets: "420M Tweets",
    },
    {
      topic: "Nigeria",
      tweets: "69K Tweets",
    },
  ];
  const FollowRecList = [
    {
      name: "Elon Musk",
      username: "@elonmusk",
    },
    {
      name: "Mark Zuckerberg",
      username: "@zuck",
    },
    {
      name: "Bill Gates",
      username: "@billgates",
    },
  ];

  return (
    <div className="bg-black border-l border-gray-700">
      <div className="ml-6 mr-32 sticky top-0">
        <SearchBar />

        <Trends TrendsList={TrendsList} />

        <FollowRec FollowRecList={FollowRecList} />
      </div>
    </div>
  );
}
