import { Button, Container, Flex, HStack, Link, Text } from '@chakra-ui/react'
import { PlusSquareIcon } from '@chakra-ui/icons'
import React from 'react'

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"} // two items will be on opposite ends
        flexDir={{
            base:"column",
            sm:"row"
        }} 
        >
            <Text
                fontSize={{ base: "22", sm: "28" }}
				fontWeight={"bold"}
				textTransform={"uppercase"}
				textAlign={"center"}
				bgGradient='linear(to-l, #7928CA, #FF0080)'
				bgClip={"text"}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>

            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <PlusSquareIcon />
                    </Button>
                </Link>
            </HStack>
            
            
        </Flex>

    </Container>
  )
}

export default Navbar