import { QueryClientProvider } from "@tanstack/react-query";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { queryClient } from "@/configuration/react-query";
import { theme } from "@/theme/styled-components";

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
