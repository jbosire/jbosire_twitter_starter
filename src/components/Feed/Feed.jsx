import * as React from "react";
import Tweet from "../Tweet/Tweet";
import TweetBox from "../TweetBox/TweetBox";
import UserProfile from "../UserProfile/UserProfile";
import "./Feed.css";

export default function Feed(props) {
  return (
    <div className="col feed">
      {/* Update tweetbox props here?*/}
      <TweetBox
        tweets={props.tweets}
        setTweetText={props.setTweetText}
        tweetText={props.tweetText}
        userProfile={props.userProfile}
        setUserProfile={props.setUserProfile}
        setTweets={props.setTweets}
      />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {props.tweets.map((tweet, idx) => (
          <Tweet tweet={tweet} key={idx} />
        ))}
      </div>
    </div>
  );
}
