import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Parallax = ({ scrollY }) => {
    const [fadeOpacity, setFadeOpacity] = useState(0);
    const [navbarFixed, setNavbarFixed] = useState(true);
    const [b1, setb1] = useState(0);
    const [o1, setO1] = useState(1);

    const calculateTranslation = (speed, second = 0) => {
        if (scrollY > 1110) scrollY = 1110;
        if (second === 1) return -scrollY * speed * 8;
        if (second === 2) return -scrollY * speed * 5;
        if (second === 3) return -scrollY * speed * 6.5;
        return -scrollY / 2 * speed;
    };

    useEffect(() => {

        let b1 = 1.0;
        if (scrollY >= 950 && scrollY <= 965) {
            b1 = 0.93;
        } else if (scrollY > 965 && scrollY <= 980) {
            b1 = 0.89;
        } else if (scrollY > 980 && scrollY <= 985) {
            b1 = 0.87;
        } else if (scrollY > 985 && scrollY <= 990) {
            b1 = 0.85;
        } else if (scrollY > 990 && scrollY <= 995) {
            b1 = 0.83;
        } else if (scrollY > 995 && scrollY <= 1000) {
            b1 = 0.81;
        } else if (scrollY > 1000 && scrollY <= 1010) {
            b1 = 0.8;
        } else if (scrollY > 1010 && scrollY <= 1020) {
            b1 = 0.78;
        } else if (scrollY > 1020 && scrollY <= 1030) {
            b1 = 0.75;
        } else if (scrollY > 1030 && scrollY <= 1040) {
            b1 = 0.73;
        } else if (scrollY > 1040 && scrollY <= 1050) {
            b1 = 0.7;
        } else if (scrollY > 1050 && scrollY <= 1060) {
            b1 = 0.68;
        } else if (scrollY > 1060 && scrollY <= 1070) {
            b1 = 0.65;
        } else if (scrollY > 1070 && scrollY <= 1080) {
            b1 = 0.63;
        } else if (scrollY > 1080 && scrollY <= 1090) {
            b1 = 0.6;
        } else if (scrollY > 1090) {
            b1 = 0.58;
        }
        setb1(b1);

        if (scrollY < 1110) {
            setNavbarFixed(true);
        } else {
            setNavbarFixed(false);
        }

        const newFadeOpacity = Math.min(1, scrollY / 700);
        setFadeOpacity(newFadeOpacity);
    }, [scrollY]);

    return (
        <Flex width={"1440px"} height={"1024px"} justifyContent={"center"} position={"relative"} zIndex={14} backgroundImage={"./parallaxTop/Grafika_bez_nazwy-2.png"}
            overflow={"hidden"} >

            {/* navbar */}
            <Flex
               position={navbarFixed ? "fixed" : "absolute"}
                width='1242px'
                height='41px'
                top='57px'
                opacity={fadeOpacity}
                zIndex={14}
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

            {/* type 3 */}
            <Image
                width='100%'
                height='558.94px'
                position="absolute"
                left="-2px"
                top="1452px"
                opacity={fadeOpacity}
                src="./parallax/Grafika_bez_nazwy-17 (Traced).png"
                zIndex={14}
                style={{ transform: `translateY(${calculateTranslation(0.1, 3)}px)` }}
            />

            <Image
                width='100%'
                height='1024px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/chmury1.png"
                zIndex={13}
            // style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />

            {/*  type 1 */}
            <Image
                width='100%'
                top='2930px'
                height={"800px"}
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-14 (Traced).png"
                position={"absolute"}
                zIndex={12}
                style={{ transform: `translateY(${calculateTranslation(0.3, 1)}px)`, filter: `brightness(${b1})` }}
            />

            <Image
                width='100%'
                height='2498.4px'
                top={"-1066px"}
                gap='0px'
                left={"17px"}
                opacity={fadeOpacity}
                src="./parallaxTop/chmury2.png"
                position={"absolute"}
                zIndex={11}
            // style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />

            <Image
                width='100%'
                top='739px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-11 (Traced).png"
                position={"absolute"}
                zIndex={10}
            // style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />

            <Image
                width='100%'
                top={"-8px"}
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/chmury3.png"
                position={"absolute"}
                zIndex={9}
            // style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />

            <Image
                width='100%'
                top='678px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-9 (Traced).png"
                position={"absolute"}
                zIndex={8}
            // style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />

            <Image
                width='100%'
                // height='2498.4px'
                top={"5px"}
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/chmury4.png"
                position={"absolute"}
                zIndex={7}
            // style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />

            {/* type 2 */}
            <Image
                width='100%'
                // height='1501.53px'
                top='950px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-7 (Traced).png"
                position={"absolute"}
                zIndex={6}
                style={{ transform: `translateY(${calculateTranslation(0.1, 2)}px)` }}
            />


            {/* // bigsmoke */}

            <Image
                width='100%'
                top={"-5px"}
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/chmury5.png"
                position={"absolute"}
                zIndex={5}
            // style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />

            <Image
                width='100%'
                top='209px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-5 (Traced).png"
                position={"absolute"}
                zIndex={4}
            // style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />


            <Image
                width='100%'
                top='427px'
                gap='0px'
                opacity={o1}
                src="./parallaxTop/Grafika_bez_nazwy-4 (Traced).png"
                position={"absolute"}
                zIndex={3}
            // style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />

            <Image
                width='100%'
                height='1638.98px'
                top='490px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-3 (Traced).png"
                position={"absolute"}
                zIndex={2}

            />

            <Image
                width='100%'
                height='2498.4px'
                top='-677px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-2.png"
                position={"absolute"}
                zIndex={1}
            />

        </Flex>
    );
}

export default Parallax;