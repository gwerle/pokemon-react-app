import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";

import PokemonsContainer from "./components/PokemonsContainer";
import { queryClient } from "./configuration/react-query";
import { theme } from "./theme/styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <main style={{ padding: "10vh 3vw" }}>
          <PokemonsContainer />
        </main>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
