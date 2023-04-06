import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import Head from "next/head";
import { PageLayout } from "~/components/PageLayout";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Lootsplosion</title>
      </Head>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
