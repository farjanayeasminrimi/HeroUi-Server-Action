"use client";

import { ThemeProvider } from "next-themes";

const DualThemeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default DualThemeProvider;
