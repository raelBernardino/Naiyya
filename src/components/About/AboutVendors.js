import React from 'react';
import styled from 'styled-components';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import {
  Container,
  colors,
  Typography,
  FadeIn
} from '../atoms';
import sample2 from "../../images/sample2.jpg";
import sample3 from "../../images/sample3.jpg";
import sample4 from "../../images/sample4.jpg";

const ProgressBar = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  bottom: 0;
  background-color: ${colors.mist3};
  `;

const ProgressTracker = styled.div`
  width: ${p => `${1 / p.reelLength * 100}%`};
  background-color: ${colors.stone3};
  height: 5px;
  transition: .75s;
  transform: translateX(${p => p.reelIndex * 100}%);
  `;

const ImageContainer = styled(Container)`
  height: 100%;
  width: 100%;
  background-color: white;
  overflow: hidden;
  `;

const ImageReel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${p => `${100 * p.reelLength}%`};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .75s;
  transform: translateX(${p => p.reelIndex * (-1 / p.reelLength * 100)}%);
`;

const IconButton = styled.div`
  color: ${colors.dawn2};
`;

export const AboutVendors = () => {
  const [currentReel, setCurrentReel] = React.useState(0)
  const [reel,] = React.useState([
    { src: sample2 },
    { src: sample3 },
    { src: sample4 },
  ])

  React.useEffect(() => {
    if (currentReel > reel.length - 1) setCurrentReel(0)
    if (currentReel < 0) setCurrentReel(reel.length - 1)
  }, [currentReel])

  const incrementReel = () => {
    setCurrentReel(currentReel + 1)
  }

  const decrementReel = () => {
    setCurrentReel(currentReel - 1)
  }

  return (
    <Container
      height="85vh"
      backgroundColor={colors.mist1}
      padding="7% 80px"
    >
      <ImageContainer>
        <ImageReel reelLength={reel.length} reelIndex={currentReel}>
          {
            reel.map((img, i) => <Container height="100%" width="100%" backgroundImage={img.src} />)
          }
        </ImageReel>
        <ProgressBar>
          <ProgressTracker reelLength={reel.length} reelIndex={currentReel} />
        </ProgressBar>
      </ImageContainer>
      <Typography
        padding="10px 0">
        {(currentReel + 1) + "/" + reel.length}
      </Typography>
      <Container
        flex
        padding="10px 0"
        justifyContent="space-between"
        height="auto">
        <IconButton>
          <BsArrowLeftShort size="32px" onClick={decrementReel} />
        </IconButton>
        <IconButton>
          <BsArrowRightShort size="32px" onClick={incrementReel} />
        </IconButton>
      </Container>
    </Container>
  )
}