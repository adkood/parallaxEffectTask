import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const LogoIntro = ({ scrollY }) => {
    const [fadeOpacity1, setFadeOpacity1] = useState(1);
    const [fadeOpacity2, setFadeOpacity2] = useState(0);

    useEffect(() => {
        const newFadeOpacity1 = Math.max(0, 1 - scrollY / 600);
        const newFadeOpacity2 = Math.min(1, scrollY / 700);
        setFadeOpacity1(newFadeOpacity1);
        setFadeOpacity2(newFadeOpacity2);
    }, [scrollY]);

    return (
        <Flex
            width={"1440px"}
            height={"1024px"}
            zIndex={14}
            position={"relative"}
            justifyContent="center"
        >
            <Image position="fixed" top={`239px`} width={"741px"} height={"212px"} opacity={fadeOpacity1} src="./logoIntro/ConnectLogo.png" />
            <Flex
                direction={"column"}
                position="fixed"
                top={`594px`}
                width='467px'
                height='178px'
                gap='0px'
                fontSize='24px'
                fontWeight='400'
                lineHeight='28.64px'
                letterSpacing='0.1em'
                textAlign={'center'}
                alignItems={"center"}
                justifyContent={"space-between"}
                color='#252762'
                opacity={fadeOpacity1}
            >
                <Text>
                    Scroll down to discover All in one app - Explore the click of world where dreams are fulfilled
                </Text>
                <Image width='51.92px' height='63.79px' src="./logoIntro/mouse-scroll-wheel.png" />
            </Flex>

            <Flex
                zIndex={14}
                position={"fixed"}
                width='1242px'
                height='41px'
                top='57px'
                gap='256px'
                opacity={fadeOpacity2}
                border={"1px solid"}
            >
                <Image
                    width='182px'
                    height='41px'
                    gap='0px'
                    src="./parallaxTop/logoWithoutTagline.png"
                >
                </Image>

                <Flex
                    position={"absolute"}
                    width='384px'
                    height='26px'
                    top='7px'
                    left='438px'
                    gap='0px'
                    border={"1px solid"}
                >
                </Flex>

                <Flex
                    position='absolute'
                    width='178px'
                    height='40px'
                    left='1064px'
                    gap='0px'
                    border={"1px solid"}
                >
                </Flex>
            </Flex>
        </Flex>
    );
}

export default LogoIntro;
