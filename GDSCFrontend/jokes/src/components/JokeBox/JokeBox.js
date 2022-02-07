import { SlideFade, Box, Text } from '@chakra-ui/react';
export default function JokeBox(props) {
  return (
    <Box
      padding={7}
      backgroundColor="green.300"
      textColor={'black'}
      fontWeight="bold"
      fontSize={'xl'}
      width="450px"
      borderRadius={'lg'}
    >
      <SlideFade in>
        <Text>{props.setup}</Text>
        <Text marginTop={'20px'}>{props.delivery}</Text>
      </SlideFade>
    </Box>
  );
}
