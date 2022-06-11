import Image from "next/image";
import Header from "../components/Header";
import Head from "next/head";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />

      <main>{/* Feed */}</main>
      <section>
        {/* Sidebar */}
        {/* Widget */}
      </section>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  return {
    props: {
      session,
    },
  };
}
