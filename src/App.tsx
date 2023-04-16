import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import styles from "./App.module.css";
import TextInput from "./components/TextInput";
import { queryClient } from "./configuration/react-query";
import { theme } from "./theme/styled-components";

export default function App() {
  const pokemonMock = new Array(10).fill(0);
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <main className={styles.main}>
          <section>
            <TextInput />
          </section>

          <section>
            <ul>
              {pokemonMock.map((p, i) => {
                return <li key={i}>pokemon {i}</li>;
              })}
            </ul>
          </section>
        </main>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
