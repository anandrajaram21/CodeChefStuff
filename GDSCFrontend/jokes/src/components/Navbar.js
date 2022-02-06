import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import memoji1 from '../assets/memoji1.png';
import memoji2 from '../assets/memoji2.png';

export default function Nav() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Heading>
            Funny
            <Text as="span" color="teal">
              Jokes
            </Text>
          </Heading>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <ColorModeSwitcher />

              <Image src={memoji1} boxSize="80px" />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
