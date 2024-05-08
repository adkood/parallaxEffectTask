import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Intro = () => {
    return (
        <Flex
            width='1440px'
            height='5633px'
            position={"relative"}
            backgroundImage={"./parallaxTop/Grafika_bez_nazwy-2.png"}
        >
            {/* line */}
            <Flex
                position="absolute"
                width='0px'
                height='4193px'
                top='821px'
                left='718.59px'
                border='1px dotted #000000'
            >
            </Flex>

            {/* dots */}

            <Image
                position={"absolute"}
                width='23px'
                height='23px'
                top='799px'
                left='708px'
                border='1px 0px 0px 0px'
                src="./intro/Ellipse 2219.png"
            />

            <Image
                position={"absolute"}
                width='23px'
                height='23px'
                top='1461px'
                left='708px'
                border='1px 0px 0px 0px'
                src="./intro/Ellipse 2219.png"
            />

            <Image
                position={"absolute"}
                width='23px'
                height='23px'
                top='2138px'
                left='708px'
                border='1px 0px 0px 0px'
                src="./intro/Ellipse 2219.png"
            />

            <Image
                position={"absolute"}
                width='23px'
                height='23px'
                top='2823px'
                left='708px'
                border='1px 0px 0px 0px'
                src="./intro/Ellipse 2219.png"
            />

            <Image
                position={"absolute"}
                width='23px'
                height='23px'
                top='4998px'
                left='708px'
                border='1px 0px 0px 0px'
                src="./intro/Ellipse 2219.png"
            />

            <Image
                position={"absolute"}
                width='7px'
                height='7px'
                top='5006px'
                left='716px'
                border='1px 0px 0px 0px'
                src="./intro/Rectangle 89.png"
            />


            {/* first */}
            <Flex
                direction={"column"}
                position={"absolute"}
                width='234px'
                height='372px'
                top='274px'
                left='72px'
                gap='24px'
                alignItems={"center"}
            >
                <Box
                    width='185px'
                    height='42px'
                    padding='9px 32px 9px 32px'
                    gap='10px'
                    borderRadius='50px'
                    boxShadow='0px 4px 4px 0px #00000040'
                    bgColor={"#252762"}
                    cursor={"pointer"}
                >
                    <Text
                        width='100%'
                        height='24px'
                        fontSize='20px'
                        fontWeight='600'
                        lineHeight='23.87px'
                        textAlign='left'
                        color={"white"}
                    >
                        All Products
                    </Text>
                </Box>

                <Box
                    width='196px'
                    height='42px'
                    padding='9px 32px 9px 32px'
                    gap='10px'
                    borderRadius='50px'
                    border={"1px solid #252762"}
                    boxShadow='0px 4px 4px 0px #00000040'
                    cursor={"pointer"}
                >
                    <Text
                        width='100%'
                        height='24px'
                        fontSize='20px'
                        fontWeight='600'
                        lineHeight='23.87px'
                        textAlign='left'
                        color="#252762"
                    >
                        Health Sector
                    </Text>
                </Box>

                <Box
                    width='207px'
                    height='42px'
                    padding='9px 32px 9px 32px'
                    gap='10px'
                    borderRadius='50px'
                    border={"1px solid #252762"}
                    boxShadow='0px 4px 4px 0px #00000040'
                    cursor={"pointer"}
                >
                    <Text
                        width='100%'
                        height='24px'
                        fontSize='20px'
                        fontWeight='600'
                        lineHeight='23.87px'
                        textAlign='left'
                        color="#252762"
                    >
                        Petcare Sector
                    </Text>
                </Box>

                <Box
                    width='262px'
                    height='42px'
                    padding='9px 32px 9px 32px'
                    gap='10px'
                    border={"1px solid #252762"}
                    borderRadius='50px'
                    boxShadow='0px 4px 4px 0px #00000040'
                    cursor={"pointer"}
                >
                    <Text
                        width='100%'
                        height='24px'
                        fontSize='20px'
                        fontWeight='600'
                        lineHeight='23.87px'
                        textAlign='left'
                        color="#252762"
                    >
                        Construction Sector
                    </Text>
                </Box>

                <Box
                    width='190px'
                    height='42px'
                    padding='9px 32px 9px 32px'
                    gap='10px'
                    border={"1px solid #252762"}
                    borderRadius='50px'
                    boxShadow='0px 4px 4px 0px #00000040'
                    cursor={"pointer"}
                >
                    <Text
                        width='100%'
                        height='24px'
                        fontSize='20px'
                        fontWeight='600'
                        lineHeight='23.87px'
                        textAlign='left'
                        color="#252762"
                    >
                        Event Sector
                    </Text>
                </Box>

                <Box
                    width='264px'
                    height='42px'
                    padding='9px 32px 9px 32px'
                    gap='10px'
                    border={"1px solid #252762"}
                    borderRadius='50px'
                    boxShadow='0px 4px 4px 0px #00000040'
                    cursor={"pointer"}
                >
                    <Text
                        width='100%'
                        height='24px'
                        fontSize='20px'
                        fontWeight='600'
                        lineHeight='23.87px'
                        textAlign='left'
                        color="#252762"
                    >
                        Management Sector
                    </Text>
                </Box>
            </Flex>

            <Flex
                position={"absolute"}
                width='640px'
                height='480px'
                top='123px'
                left='400px'
                gap='18px'
            >
                <Image src="./intro/iPhone 15 Pro.svg">

                </Image>
            </Flex>

            <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                position={"absolute"}
                width='312px'
                height='363px'
                top='227px'
                left='1056px'
                padding='26px 19px 20px 19px'
                gap='0px'
                borderRadius='30px'
                border={"1px solid"}
            >
                <Text
                    width='177px'
                    height='42px'
                    fontSize='35px'
                    fontWeight='600'
                    lineHeight='41.77px'
                    textAlign='left'
                >
                    CONNECT
                </Text>
                <Text
                    width='257px'
                    height='264px'
                    fontSize='20px'
                    fontWeight='400'
                    lineHeight='23.87px'
                    textAlign='left'
                >
                    Egohet kaplatuna. Ana. Id. Psykotyp nötigt. Nenat. Isam. Teleligt supravanade. Antere dekas. Reangar. Snackis but. Dekang trejon. Virad. Diar naning. Donera avis. Lånegarderob nede. Deepfake reaform. Tetisävis e-learning. Kroviling nyvis. Gardinhängarjobb kyhet. Spement.
                </Text>
            </Flex>

            {/* second */}

            <Text
                position={"absolute"}
                width='522px'
                height='54px'
                top='953px'
                left='88px'
                fontSize='45px'
                fontWeight='800'
                lineHeight='53.7px'
                textAlign='left'
            >
                Construction  Sector
            </Text>

            <Text
                position={"absolute"}
                width='540px'
                height='180px'
                top='1020px'
                left='88px'
                fontSize='30px'
                fontWeight='400'
                lineHeight='35.8px'
                textAlign='left'
            >
                Cementing Dreams, Crafting Futures": At Connect, our success is built on the dedication of every member of our team, from skilled labourers to seasoned professionals...
            </Text>

            <Flex
                position={"absolute"}
                width='177px'
                height='57px'
                top='1250px'
                left='88px'
                borderRadius='5px'
                border='1px solid'
                justifyContent={"space-evenly"}
                alignItems={"center"}
                cursor={"pointer"}
            >
                <Image
                    src="./intro/grommet-icons_expand.png"
                    width='17px'
                    height='17px'
                    padding='0.71px'
                />
                <Box
                    width='130px'
                    height='30px'
                    fontSize='23px'
                    fontWeight='400'
                    lineHeight='29.83px'
                    textAlign='left'
                >
                    More details
                </Box>
            </Flex>

            <Flex
                width='645px'
                height='528px'
                top='866px'
                left='714px'
                position={"absolute"}
            >
                <Image
                    width={"100%"}
                    height={"100%"}
                    src="./intro/Frame 1171275616.svg"
                />
            </Flex>

            {/* third */}

            <Text
                position={"absolute"}
                width='522px'
                height='54px'
                top='1630px'
                left='821px'
                fontSize='45px'
                fontWeight='800'
                lineHeight='53.7px'
                textAlign='left'
            >
                Healthcare Sector
            </Text>

            <Text
                position={"absolute"}
                width='540px'
                height='180px'
                top='1706px'
                left='821px'
                fontSize='30px'
                fontWeight='400'
                lineHeight='35.8px'
                textAlign='left'
            >
                “Healing Hearts, Enriching Lives”.
                At Connect Healthcare, we forge bonds between caregivers, infusing empathy and unity. Our platform fosters heartfelt connections among...
            </Text>

            <Flex
                position={"absolute"}
                width='177px'
                height='57px'
                top='1936px'
                left='821px'
                borderRadius='5px'
                border='1px solid'
                justifyContent={"space-evenly"}
                alignItems={"center"}
                cursor={"pointer"}

            >
                <Image
                    src="./intro/grommet-icons_expand.png"
                    width='17px'
                    height='17px'
                    padding='0.71px'
                />
                <Box
                    width='130px'
                    height='30px'
                    fontSize='23px'
                    fontWeight='400'
                    lineHeight='29.83px'
                    textAlign='left'
                >
                    More details
                </Box>
            </Flex>

            <Flex
                width='645px'
                height='528px'
                top='1551px'
                left='88px'
                position={"absolute"}
            >
                <Image
                    width={"100%"}
                    height={"100%"}
                    src="./intro/Frame 1171275617.svg"
                />
            </Flex>

            {/* fourth */}

            <Text
                position={"absolute"}
                width='522px'
                height='54px'
                top='2328px'
                left='88px'
                fontSize='45px'
                fontWeight='800'
                lineHeight='53.7px'
                textAlign='left'
            >
                Entertainment Sector
            </Text>

            <Text
                position={"absolute"}
                width='540px'
                height='180px'
                top='2404px'
                left='88px'
                fontSize='30px'
                fontWeight='400'
                lineHeight='35.8px'
                textAlign='left'
            >
                At Connect Entertainment, we're igniting excitement by assembling a dynamic team of talents and together, we'll light up the stage and leave audiences in awe...
            </Text>

            <Flex
                position={"absolute"}
                width='177px'
                height='57px'
                top='2598px'
                left='88px'
                borderRadius='5px'
                border='1px solid'
                justifyContent={"space-evenly"}
                alignItems={"center"}
                cursor={"pointer"}
            >
                <Image
                    src="./intro/grommet-icons_expand.png"
                    width='17px'
                    height='17px'
                    padding='0.71px'
                />
                <Box
                    width='130px'
                    height='30px'
                    fontSize='23px'
                    fontWeight='400'
                    lineHeight='29.83px'
                    textAlign='left'
                >
                    More details
                </Box>
            </Flex>

            <Flex
                width='645px'
                height='528px'
                top='2228px'
                left='714px'
                position={"absolute"}
            >
                <Image
                    width={"100%"}
                    height={"100%"}
                    src="./intro/Frame 1171275618.svg"
                />
            </Flex>

            {/* fifth */}
            <Text
                position={"absolute"}
                width='522px'
                height='54px'
                top='3014px'
                left='822px'
                fontSize='45px'
                fontWeight='800'
                lineHeight='53.7px'
                textAlign='left'
            >
                Event Sector
            </Text>

            <Text
                position={"absolute"}
                width='540px'
                height='180px'
                top='3090px'
                left='822px'
                fontSize='30px'
                fontWeight='400'
                lineHeight='35.8px'
                textAlign='left'
            >
                At Connect Entertainment, we're igniting excitement by assembling a dynamic team of talents and together, we'll light up the stage and leave audiences in awe...
            </Text>

            <Flex
                position={"absolute"}
                width='177px'
                height='57px'
                top='3284px'
                left='822px'
                borderRadius='5px'
                border='1px solid'
                justifyContent={"space-evenly"}
                alignItems={"center"}
                cursor={"pointer"}
            >
                <Image
                    src="./intro/grommet-icons_expand.png"
                    width='17px'
                    height='17px'
                    padding='0.71px'
                />
                <Box
                    width='130px'
                    height='30px'
                    fontSize='23px'
                    fontWeight='400'
                    lineHeight='29.83px'
                    textAlign='left'
                >
                    More details
                </Box>
            </Flex>

            <Flex
                width='645px'
                height='528px'
                top='2913px'
                left='88px'
                position={"absolute"}
            >
                <Image
                    width={"100%"}
                    height={"100%"}
                    src="./intro/Frame 1171275619.svg"
                />
            </Flex>

            {/* sixth */}

            <Text
                position={"absolute"}
                width='522px'
                height='54px'
                top='3699px'
                left='80px'
                fontSize='45px'
                fontWeight='800'
                lineHeight='53.7px'
                textAlign='left'
            >
                Home Sector
            </Text>

            <Text
                position={"absolute"}
                width='540px'
                height='180px'
                top='3775px'
                left='80px'
                fontSize='30px'
                fontWeight='400'
                lineHeight='35.8px'
                textAlign='left'
            >
                At Connect Entertainment, we're igniting excitement by assembling a dynamic team of talents and together, we'll light up the stage and leave audiences in awe...
            </Text>

            <Flex
                position={"absolute"}
                width='177px'
                height='57px'
                top='3969px'
                left='80px'
                borderRadius='5px'
                border='1px solid'
                justifyContent={"space-evenly"}
                alignItems={"center"}
                cursor={"pointer"}
            >
                <Image
                    src="./intro/grommet-icons_expand.png"
                    width='17px'
                    height='17px'
                    padding='0.71px'
                />
                <Box
                    width='130px'
                    height='30px'
                    fontSize='23px'
                    fontWeight='400'
                    lineHeight='29.83px'
                    textAlign='left'
                >
                    More details
                </Box>
            </Flex>

            <Flex
                width='645px'
                height='528px'
                top='3598px'
                left='713px'
                position={"absolute"}
            >
                <Image
                    width={"100%"}
                    height={"100%"}
                    src="./intro/Frame 1171275623.svg"
                />
            </Flex>

            {/* seventh */}

            <Text
                position={"absolute"}
                width='522px'
                height='54px'
                top='4384px'
                left='830px'
                fontSize='45px'
                fontWeight='800'
                lineHeight='53.7px'
                textAlign='left'
            >
                Pets Sector
            </Text>

            <Text
                position={"absolute"}
                width='540px'
                height='180px'
                top='4460px'
                left='830px'
                fontSize='30px'
                fontWeight='400'
                lineHeight='35.8px'
                textAlign='left'
            >
                At Connect Entertainment, we're igniting excitement by assembling a dynamic team of talents and together, we'll light up the stage and leave audiences in awe...
            </Text>

            <Flex
                position={"absolute"}
                width='177px'
                height='57px'
                top='4654px'
                left='830px'
                borderRadius='5px'
                border='1px solid'
                justifyContent={"space-evenly"}
                alignItems={"center"}
                cursor={"pointer"}
            >
                <Image
                    src="./intro/grommet-icons_expand.png"
                    width='17px'
                    height='17px'
                    padding='0.71px'
                />
                <Box
                    width='130px'
                    height='30px'
                    fontSize='23px'
                    fontWeight='400'
                    lineHeight='29.83px'
                    textAlign='left'
                >
                    More details
                </Box>
            </Flex>

            <Flex
                width='645px'
                height='528px'
                top='4283px'
                left='88px'
                position={"absolute"}
            >
                <Image
                    width={"100%"}
                    height={"100%"}
                    src="./intro/Frame 1171275627.svg"
                />
            </Flex>

            {/* last */}
            <Flex
                position={"absolute"}
                justifyContent={"center"}
                alignItems={"center"}
                width='1268px'
                height='390px'
                top='5025px'
                left='83px'
                padding='65px 69px 65.37px 69px'
                gap='0px'
                borderRadius='15px'
                boxShadow=' 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
            >
                <Flex
                    width='1130px'
                    height='259.63px'
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Flex
                        width='641px'
                        height='219px'
                        direction={"column"}
                        justifyContent={"space-between"}
                    >
                        <Flex
                            width='350px'
                            height='42px'
                            padding='9px 32px 9px 32px'
                            gap='10px'
                            borderRadius='50px'
                            bgColor={"#252762"}
                        >
                            <Text
                                width='350px'
                                height='24px'
                                fontSize='20px'
                                fontWeight='600'
                                lineHeight='23.87px'
                                textAlign='left'
                                color={"white"}
                            >
                                CONNECT Privacy Day 2024
                            </Text>
                        </Flex>

                        <Text
                            width='641px'
                            height='130px'
                            fontSize='50px'
                            fontWeight='600'
                            lineHeight='59.67px'
                            textAlign='left'
                        >
                            Three important measures to protect user information
                        </Text>

                    </Flex>

                    <Flex
                        width='258px'
                        height='259.63px'
                    >
                        <Image
                            width={"100%"}
                            height={"100%"}
                            src="./intro/Illustration.svg"
                        />
                    </Flex>

                </Flex>
            </Flex>
        </Flex >
    );
}

export default Intro;