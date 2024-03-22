"use client";
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gradient Book</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center ">
      <iframe 
        src="https://online.flippingbook.com/view/232969535/" 
        style={{ width: "100%", height: "100vh", border: "none" }} 
        allowFullScreen>
      </iframe>
      </main>
    </>
  );
}
