import { Tabs, Tab, TabPanel, TabList, TabPanels } from '@chakra-ui/react';
import Nav from './components/Navbar/Navbar';
import DankPanel from './components/DankPanel/DankPanel';
import DadPanel from './components/DadPanel/DadPanel';

export default function App() {
  return (
    <>
      <Nav />
      <Tabs isLazy variant={'enclosed'} marginX="5" marginTop={'5'}>
        <TabList>
          <Tab>Dank</Tab>
          <Tab>Dad</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DankPanel />
          </TabPanel>

          <TabPanel>
            <DadPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
