import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Vidoecontext from '../../contextComponent/componetcontext'
import {
  ListItem,
  ThumbnailImage,
  TitleLogoCont,
  ChannelLogo,
  VideoDetailsCont,
  Title,
  ReachCont,
  ChannelName,
  ChannelNameDont,
  SmDot,
  Reach,
} from './styledComponents'

import './index.css'

const TrendingVideosItem = ({each}) => (
  <Vidoecontext.Consumer>
    {value => {
      const {isLight} = value
      const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = each
      const formattedChannel = {
        name: channel.name,
        profileImageUrl: channel.profile_image_url,
      }

      const {name, profileImageUrl} = formattedChannel
      return (
        <ListItem>
          <Link className="link-el" to={`/videos/${id}`}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <TitleLogoCont>
              <ChannelLogo src={profileImageUrl} alt={name} />
              <VideoDetailsCont>
                <Title isLight={isLight}>{title}</Title>
                <ReachCont>
                  <ChannelName isLight={isLight}>{name}</ChannelName>
                  <SmDot isLight={isLight}>.</SmDot>
                  <Reach>
                    <ChannelName isLight={isLight}>
                      {viewCount} views
                    </ChannelName>
                    <ChannelNameDont isLight={isLight}>.</ChannelNameDont>
                    <ChannelName as="p" isLight={isLight}>
                      {publishedAt}
                    </ChannelName>
                  </Reach>
                </ReachCont>
              </VideoDetailsCont>
            </TitleLogoCont>
          </Link>
        </ListItem>
      )
    }}
  </Vidoecontext.Consumer>
)

export default TrendingVideosItem
