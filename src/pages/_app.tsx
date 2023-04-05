import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Lootsplosion</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
