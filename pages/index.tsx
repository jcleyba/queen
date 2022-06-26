import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import { CollapsableText } from "../components/collapse";
import { AppContext } from "./_app";

const Home: NextPage = () => {
  const { opened } = useContext(AppContext);
  const [isValid, setIsValid] = useState(false);
  const [pass, setPass] = useState("");
  const [dirty, setDirty] = useState(false);

  const validate = () => {
    setDirty(true);
    setIsValid(pass.toLocaleLowerCase().includes("batman"));
  };

  return (
    <div>
      <Head>
        <title>Tha Queen 👸</title>
      </Head>

      <Flex
        p={2}
        maxW="container.sm"
        margin="auto"
        justifyContent={"space-around"}
        flexDir="column"
      >
        <Heading alignSelf={"center"}>Tha Queen 👸</Heading>
        <Heading alignSelf={"center"} fontSize={"sm"}>
          by Me
        </Heading>
        <Box marginY={16}>
          <FormLabel>Pregunta de seguridad: MI SUPERHEROE PREFERIDO?</FormLabel>
          {!dirty ? null : isValid ? (
            <Text color={"green.500"}>Correcto!</Text>
          ) : (
            <Text color={"red.500"}>Intente de nuevo LOSER</Text>
          )}
          <Flex>
            <Input
              value={pass}
              type="password"
              onChange={(e: any) => setPass(e.target.value)}
            />
            <Button onClick={validate}>Enviar</Button>
          </Flex>
        </Box>
        <Box>
          <Tabs>
            <TabList>
              <Tab disabled={!isValid}>Valoraciones Negativas 👎</Tab>
              <Tab disabled={!isValid}>Valoraciones Positivas 👍</Tab>
            </TabList>

            <TabPanels>
              <TabPanel textAlign={"center"}>
                <CollapsableText
                  disabled={!isValid}
                  buttonText="Tha Queen PROCRASTINA"
                  text="Decisiones importantes que analizarlas o tomarlas le generan ansiedad o stress, prefiere dejarlas para otro momento y esperar a que las papas quemen para llegar a tomar alguna acción. Ejemplo: Cortar con David, renunciar al trabajo."
                />
                <CollapsableText
                  disabled={!isValid}
                  buttonText="Tha Queen NO SE QUIERE LO SUFICIENTE"
                  text="Puede ser una reina y mostrarse de esa forma, invencible. Pero cuando alguien o algo toca un punto sensible, toda esa confianza y auto suficiencia desaparece como si nunca hubiera existido y aparece una Queen sin autoestima ni amor propio."
                />
                <CollapsableText
                  disabled={!isValid}
                  buttonText="Tha Queen NO SE PERMITE EQUIVOCARSE"
                  text="Autoexigente al extremo, no hay lugar para errores ni tiempo para sentirse mal. Siempre todo tiene que estar bien y cuando se manda alguna cagada, se auto castiga en muchos sentidos."
                />
                <CollapsableText
                  disabled={!isValid}
                  buttonText="Tha Queen ES CABRONA"
                  text="Cuando algo no le va o no le gusta, se enoja con ganas y pone todo su cuerpo y alma a ese enojo. Primero reacciona y después reflexiona."
                />
                <CollapsableText
                  disabled={!isValid}
                  buttonText="Tha Queen NO SE PRIORIZA"
                  text="Aunque no tenga fuerzas o ganas hará lo mejor para ayudar a sus afectos aunque a veces le cueste su propio bienestar."
                />
              </TabPanel>
              <TabPanel textAlign={"center"}>
                <CollapsableText
                  disabled={!isValid}
                  buttonText="Tha Queen es MUY FUERTE"
                  text="Se sobrepone a todos los golpes que le de la vida, incluso los autoinflingidos que son los que mas duelen. La vida no fue la mejor con ella y sin embargo hizo lo mejor con lo que le tocó"
                />
                <CollapsableText
                  disabled={!isValid}
                  buttonText="Tha Queen es LEAL"
                  text="Siempre será la primera en estar cuando uno de sus afectos lo necesite. No lo va a dudar ni un segundo y dará todo por los q quiere."
                />
                <CollapsableText
                  disabled={!isValid}
                  buttonText="Tha Queen ES VALIENTE"
                  text="Dicen que un corazón no se endurece porque si, pero ella no tiene miedo a querer y poner su corazon en las cosas y las personas. Eso requiere mucho coraje en especial cuando te lo rompieron más de una vez"
                />
                <CollapsableText
                  disabled={!isValid}
                  buttonText="Tha Queen ES INTELIGENTE"
                  text="Tiene un enorme sentido del humor y una complejidad en sus pensamientos y análisis que no es fácil de encontrar."
                />
                <CollapsableText
                  disabled={!isValid}
                  buttonText="Tha Queen PERDONA"
                  text="Gran poder: el perdón. A pesar de las heridas de la vida, ha sabido perdonar sin olvidar y poder seguir adelante buscando el amor de sus seres queridos que no siempre fueron lo que ella merece"
                />
                <CollapsableText
                  disabled={!isValid || opened.size < 10}
                  buttonText="BONUS TRACK (debe leer todo para habilitar)"
                  text="Te extraño"
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </div>
  );
};

export default Home;
