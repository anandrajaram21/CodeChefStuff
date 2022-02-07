import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import './Navbar.css';

export default function Nav() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Heading cursor={'pointer'}>
            Funny
            <Text as="span" color="teal">
              Jokes
            </Text>
          </Heading>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <ColorModeSwitcher />
              <Box
                className="navbarImage memoji1"
                onMouseOver={e => {
                  e.currentTarget.classList.add('memoji2');
                  e.currentTarget.classList.remove('memoji1');
                }}
                onMouseOut={e => {
                  e.currentTarget.classList.remove('memoji2');
                  e.currentTarget.classList.add('memoji1');
                }}
                href="https://github.com/anandrajaram21"
                cursor={'pointer'}
              ></Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
