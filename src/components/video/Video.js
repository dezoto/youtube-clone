import React, { useEffect, useState } from "react";
import request from "../../api";
import "./_video.scss";
import moment from "moment";
import numeral from "numeral";

function Video({ video }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null)

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: id,
        },
      });
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
    };
    getVideoDetails();
  }, [id]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default.url)
    };
    getChannelIcon();
  }, [channelId]);
  return (
    <div className="video">
      <div className="video__top">
        <img src={medium.url} alt={title} />
        <span>{_duration}</span>
      </div>
      <div className="video__info">
        <img alt={channelTitle} src={channelIcon} />
        <div className="video__text">
          <h5>{title}</h5>
          <p>{channelTitle}</p>
          <p>
            {numeral(views).format("0.a").toUpperCase()} • {moment(publishedAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
