import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const LogoIntro = ({ scrollY }) => {
    const [fadeOpacity1, setFadeOpacity1] = useState(1);
    const [fadeOpacity2, setFadeOpacity2] = useState(0);

    useEffect(() => {
        const newFadeOpacity1 = Math.max(0, 1 - scrollY / 500);
        setFadeOpacity1(newFadeOpacity1);

        if (scrollY > 920) {
            setFadeOpacity2(0);
        } else {
            const newFadeOpacity2 = Math.min(1, scrollY / 1000);
            setFadeOpacity2(newFadeOpacity2);
        }
    }, [scrollY]);

    return (
        <Flex
            width={"1440px"}
            height={"1024px"}
            zIndex={14}
            position={"relative"}
            justifyContent="center"
            backgroundImage={"./parallaxTop/Grafika_bez_nazwy-2.png"}
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

            {/* navbar */}
            <Flex
                position={"fixed"}
                width='1242px'
                height='41px'
                top='57px'
                gap='256px'
                opacity={fadeOpacity2}
            >
                <Image
                    width='182px'
                    height='41px'
                    gap='0px'
                    src="./parallaxTop/logoWithoutTagline.png"
                />
                <Flex
                    position={"absolute"}
                    justifyContent={"space-between"}
                    width='384px'
                    height='26px'
                    top='7px'
                    left='438px'
                    gap='0px'
                >
                    <Flex
                        width='41px'
                        height='26px'
                        fontSize='16px'
                        fontWeight='400'
                        lineHeight='22px'
                        textAlign='left'
                        cursor={'pointer'}
                        color={"#252762"}
                    >
                        Home
                    </Flex>
                    <Flex
                        width='41px'
                        height='26px'
                        fontSize='16px'
                        fontWeight='400'
                        lineHeight='22px'
                        textAlign='left'
                        cursor={'pointer'}
                        color={"#252762"}
                    >
                        Offer
                    </Flex>
                    <Flex
                        width='41px'
                        height='26px'
                        fontSize='16px'
                        fontWeight='400'
                        lineHeight='22px'
                        textAlign='left'
                        cursor={'pointer'}
                        color={"#252762"}
                    >
                        Pricing
                    </Flex>
                    <Flex
                        width='41px'
                        height='26px'
                        fontSize='16px'
                        fontWeight='400'
                        lineHeight='22px'
                        textAlign='left'
                        cursor={'pointer'}
                        color={"#252762"}
                    >
                        Guides
                    </Flex>
                    <Flex
                        width='41px'
                        height='26px'
                        fontSize='16px'
                        fontWeight='400'
                        lineHeight='22px'
                        textAlign='left'
                        cursor={'pointer'}
                        color={"#252762"}
                    >
                        Contact
                    </Flex>
                </Flex>

                <Flex
                    position='absolute'
                    width='178px'
                    height='40px'
                    left='1064px'
                    gap='0px'
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Flex
                        width={"56px"}
                        height={"22px"}
                        fontSize='16px'
                        fontWeight='400'
                        lineHeight='22px'
                        textAlign='left'
                        color={"#252762"}
                    >
                        Sign In
                    </Flex>
                    <Flex
                        width={"100px"}
                        height={"40px"}
                        borderRadius='20px'
                        border={"1px solid"}
                        bgColor={"#252762"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Text
                            fontSize='16px'
                            fontWeight='400'
                            lineHeight='22px'
                            color={"white"}
                        >
                            Sign Up
                        </Text>
                    </Flex>
                </Flex>
            </Flex>

            {/* socail */}
            <Flex
                width='180px'
                height='170px'
                top='562px'
                left='43px'
                position={"fixed"}
                zIndex={15}
                opacity={fadeOpacity1}
                direction={"column"}
                justifyContent={"space-around"} 
                alignItems={"center"}
            >
                <Box
                    width={'180px'}
                    height='21px'
                    color={"white"}
                    style={{ transform: 'rotate(90deg)' }}
                    fontSize='18px'
                    fontWeight='400'
                    lineHeight='21.48px'
                    textAlign='left'
                >
                    FOLLOW US
                </Box>
                <Image
                    src="./parallax/instagram.png"
                    width='34px'
                    height='34px'
                    padding='2px'
                />
                <Image
                    src="./parallax/twitter.png"
                    width='34px'
                    height='34px'
                    padding='2px'
                />
            </Flex>
        </Flex>
    );
}

export default LogoIntro;
