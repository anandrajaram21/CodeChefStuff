import { Box, Stack, Flex, Center, Text, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import JokeBox from '../JokeBox/JokeBox';

import './DankJokes.css';

export default function DankJokes() {
  const [joke, setJoke] = useState('');
  const [delivery, setDelivery] = useState('');
  const [nextJoke, setNextJoke] = useState(true);
  const [avatar, setAvatar] = useState('face3');
  const [rotateImg, setRotateImg] = useState(0);

  const clickAvatarOrBox = () => {
    if (nextJoke === true) {
      fetchJoke('Pun');
      setAvatar('face3');
    } else {
      setDelivery(joke.delivery);
      setNextJoke(true);
      setAvatar('face4');
    }
    setRotateImg(1);
  };

  const fetchJoke = jokeType => {
    fetch(`https://v2.jokeapi.dev/joke/Dark?type="twopart"`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setJoke(data);
      })
      .then(() => {
        setDelivery('');
      })
      .then(() => {
        setNextJoke(false);
      });
  };

  useEffect(() => {
    fetchJoke('Pun');
  }, []);

  return (
    <Center marginTop={'5%'}>
      <Stack direction={'row'} spacing="150px">
        <Box marginY={'auto'}>
          <JokeBox setup={joke.setup} delivery={delivery} />
        </Box>

        <Box marginY={'auto'}>
          <Box
            className={`dankImage ${avatar}`}
            cursor="pointer"
            onClick={clickAvatarOrBox}
            rotateImg={rotateImg}
            onAnimationEnd={() => setRotateImg(0)}
          ></Box>
          <Text textAlign={'center'} margin="5px">
            Click me!
          </Text>
        </Box>
      </Stack>
    </Center>
  );
}
