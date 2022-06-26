import { Box, Button, Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { AppContext } from "../pages/_app";

export const CollapsableText = ({ buttonText, text, disabled }: any) => {
  const { isOpen, onToggle } = useDisclosure();
  const { opened, setOpened } = useContext(AppContext);

  return (
    <Box mb={4}>
      <Button
        disabled={disabled}
        onClick={() => {
          onToggle();
          if (!isOpen) {
            setOpened((old: any) => new Set(old).add(buttonText));
          }
        }}
      >
        {buttonText}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Text>{text}</Text>
        </Box>
      </Collapse>
    </Box>
  );
};
