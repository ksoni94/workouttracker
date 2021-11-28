import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";

import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
