import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { organization } from "../data/siteData";

export default function Layout({ children, title, description }) {
  const metaTitle = title ? `${title} | ${organization.name}` : organization.name;
  const metaDescription = description || organization.description;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
