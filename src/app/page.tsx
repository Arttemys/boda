'use client'

import styles from "./page.module.css";
import { MainPage } from "@/components/MainPage/MainPage";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme/theme";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeProvider theme={theme}>
        <MainPage /></ThemeProvider>
    </main>
  );
}
