import React from 'react';
import Header from "@components/Header"
import Nav from "@common/Nav"

function MainLayout({ childern }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{childern}</div>
        </main>
      </div>
    </>
  );
}

export default MainLayout;
