import Image from "next/image";
import Header from "../components/Header";
import Head from "next/head";
import { getSession } from "next-auth/react";
import Login from "../components/Login";

export default function Home({ session }) {
  if (!session) return <Login />;

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
  return {
    props: {
      session: await getSession(ctx),
    },
  };
}
