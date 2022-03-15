import "@theme/normalize.css";
import "nprogress/nprogress.css"; //styles of nprogress
import "@theme/nprogress.css";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import { useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { wrapper } from "@store/.";
import theme from "@theme/index";
import Router from "next/router";
import "@theme/style.css";
import NProgress from "nprogress"; //nprogress module
import { Store } from "redux";
import { GlobalStyles } from "@theme/globalStyles";
NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

interface CustomStore extends Store {
  __persistor?: any;
}
function MyApp({ Component, pageProps }: AppProps) {
  const store: CustomStore = useStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {typeof window !== "undefined" ? (
          <PersistGate persistor={store.__persistor} loading={null}>
            <Main Component={Component} pageProps={pageProps} />
          </PersistGate>
        ) : (
          <Main Component={Component} pageProps={pageProps} />
        )}
      </ThemeProvider>
    </Provider>
  );
}

const Main = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
