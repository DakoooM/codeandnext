import Head from "next/head";
import React from "react";

function HtmlHead({ 
  title = "Accueil",
  description = "Générée par nextjs"
}) {
  return (
    <Head>
      <title>{`${title} - Code & Chill`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HtmlHead;