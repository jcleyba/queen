import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { createContext, useState } from "react";

export const AppContext = createContext<any>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [opened, setOpened] = useState(new Set());

  return (
    <AppContext.Provider value={{ opened, setOpened }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
