import type { AppProps } from "next/app";
import "../styles/scss/style.scss";
import { wrapper } from "../store";

const WrappedApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
