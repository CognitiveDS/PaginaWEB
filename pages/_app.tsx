import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import CustomCursor from '../components/CustomCursor';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <CustomCursor />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;