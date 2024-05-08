import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ParallaxTop = ({ scrollY }) => {
    const [fadeOpacity, setFadeOpacity] = useState(0);

    const calculateTranslation = (speed,second=0) => {
        if(scrollY > 920) scrollY = 920;
        if(second === 1) return -scrollY * speed * 3;
        else if(second === 2) return -scrollY * speed * 6;
        else if(second === -1) return scrollY * speed * 1.5;
        return -scrollY/2 * speed;
    };

    useEffect(() => {
        const newFadeOpacity = Math.min(1, scrollY / 700);
        setFadeOpacity(newFadeOpacity);
    }, [scrollY]);


    return (
        <Box width={"1440px"} height={"1024px"} position={"relative"} zIndex={13} backgroundImage={"./parallaxTop/Grafika_bez_nazwy-2.png"}
            overflow={"hidden"}>
            <Image
                width='100%'
                height='1024px'
                gap='0px'
                opacity={fadeOpacity < 0.2 ? 0.2 : fadeOpacity}
                src="./parallaxTop/chmury1.png"
                zIndex={12}
                style={{ transform: `translateY(${calculateTranslation(0.1)}px)` }}
            />

            {/* special */}
            <Image
                width='100%'
                // height='1087.53px'
                top='555px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-14 (Traced).png"
                position={"absolute"}
                zIndex={11}
                style={{ transform: `translateY(${calculateTranslation(0.1,1)}px)` }}
            />

            <Image
                width='100%'
                height='2498.4px'
                top={"-1066px"}
                gap='0px'
                left={"17px"}
                opacity={fadeOpacity < 0.4 ? 0.4 : fadeOpacity}
                src="./parallaxTop/chmury2.png"
                position={"absolute"}
                zIndex={10}
                style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />

            <Image
                width='100%'
                // height='1082.6px'
                top='739px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-11 (Traced).png"
                position={"absolute"}
                zIndex={9}
                style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />

            <Image
                width='100%'
                height='2498.4px'
                top={"-1138px"}
                gap='0px'
                opacity={scrollY >= 750 ? 0 : (fadeOpacity < 0.4 ? 0.4 : fadeOpacity)}
                src="./parallaxTop/chmury3.png"
                position={"absolute"}
                zIndex={8}
                style={{ transform: `translateY(${calculateTranslation(0.2)}px)` }}
            />

            <Image
                width='100%'
                // height='1261.58px'
                top='678px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-9 (Traced).png"
                position={"absolute"}
                zIndex={7}
                style={{ transform: `translateY(${calculateTranslation(0.4)}px)` }}
            />

            <Image
                width='100%'
                height='2498.4px'
                top={"-596px"}
                gap='0px'
                opacity={scrollY >= 750 ? 0 : (fadeOpacity < 0.6 ? 0.6 : fadeOpacity)}
                src="./parallaxTop/chmury4.png"
                position={"absolute"}
                zIndex={6}
                style={{ transform: `translateY(${calculateTranslation(0.4)}px)` }}
            />

            {/* special */}
            <Image
                width='100%'
                // height='1501.53px'
                top='490px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-7 (Traced).png"
                position={"absolute"}
                zIndex={5}
                style={{ transform: `translateY(${calculateTranslation(0.5)}px)` }}
            />

            <Image
                width='100%'
                height='2498.4px'
                top={"-928px"}
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/chmury5.png"
                position={"absolute"}
                zIndex={5}
                style={{ transform: `translateY(${calculateTranslation(0.4)}px)` }}
            />
            <Image
                width='100%'
                // height='1852.9px'
                top='209px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-5 (Traced).png"
                position={"absolute"}
                zIndex={4}
                style={{ transform: `translateY(${calculateTranslation(0.5)}px)` }}
            />


            <Image
                width='100%'
                // height='1705.72px'
                top='127px'
                gap='0px'
                opacity={fadeOpacity}
                src="./parallaxTop/Grafika_bez_nazwy-4 (Traced).png"
                position={"absolute"}
                zIndex={3}
                style={{ transform: `translateY(${calculateTranslation(0.1,-1)}px)` }}
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
                style={{ transform: `translateY(${calculateTranslation(0.7)}px)` }}
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
                style={{ transform: `translateY(${calculateTranslation(0.7)}px)` }}
            />


            {/* special */}
            <Image
                width='100%'
                height='458.94px'
                position="absolute"
                left="-2px"
                top="1052px"
                opacity={fadeOpacity < 0.2 ? 0.2 : fadeOpacity}
                src="./parallax/Grafika_bez_nazwy-17 (Traced).png"
                zIndex={12}
                style={{ transform: `translateY(${calculateTranslation(0.1,2)}px)` }}
            />
        </Box>
    );
}

export default ParallaxTop;