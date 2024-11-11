import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

const theme = createTheme({})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={theme}>
            <Component {...pageProps} />
        </MantineProvider>
    );
}
