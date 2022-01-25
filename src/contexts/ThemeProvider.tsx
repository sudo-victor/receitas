import React, { ReactNode } from "react";
import { ThemeProvider as Provider } from "styled-components";

import lightTheme from "../global/themes/light";

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return <Provider theme={lightTheme}>{children}</Provider>;
}
