import { useEffect, useRef, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import LogoIntro from './components/LogoIntro';
import ParallaxTop from './components/ParallaxTop';
import Intro from './components/Intro';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const boxRef = useRef(null);

  const handleScroll = () => {
    if (boxRef.current) {
      setScrollY(boxRef.current.scrollTop);
    }
  };

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (boxRef.current) {
        boxRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  console.log(scrollY);

  return (
    <Flex
      direction={"column"}
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        ref={boxRef}
        width={"1455px"}
        height={"1024px"}
        overflowX={"hidden"}
        overflowY={"scroll"}
      >
        <LogoIntro scrollY={scrollY} />
        <ParallaxTop scrollY={scrollY} />
        <Intro />
      </Box>
    </Flex>
  );
}

export default App;
