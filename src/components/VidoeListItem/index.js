import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import Vidoecontext from '../../contextComponent/componetcontext'

import {
  ListItemVideo,
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
} from './styledComponent'
import './index.css'

const VidoeListItem = ({each}) => (
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
        <Link className='vidoeListItemLink' to={`/videos/${id}`}>
          <ListItemVideo>
            <ThumbnailImage src={thumbnailUrl} alt='video thumbnail' />
            <TitleLogoCont>
              <ChannelLogo src={profileImageUrl} alt='channel logo' />
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
                    <ChannelName as='p' isLight={isLight}>
                      {publishedAt}
                    </ChannelName>
                  </Reach>
                </ReachCont>
              </VideoDetailsCont>
            </TitleLogoCont>
          </ListItemVideo>
        </Link>
      )
    }}
  </Vidoecontext.Consumer>
)
export default VidoeListItem
