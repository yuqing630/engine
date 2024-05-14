import type { AppProps } from 'next/app'
import "../globals.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}