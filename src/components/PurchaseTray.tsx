import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import useOnClickOutside from 'use-onclickoutside';

const Mint = dynamic(
  async () => (await import('./Mint')),
  { ssr: false }
);

const PurchaseTray = ({ showMint, setShowMint }) => {
  const trayRef = useRef();
  useOnClickOutside(trayRef, () => (showMint ? setShowMint(false) : null));

  return (
    <div ref={trayRef} className='fixed inset-x-0 bottom-0 right-0 bg-neutral py-4'>
      <div className='container max-w-xl mx-auto flex flex-col min-h-[33vh]'>
        <div className='flex flex-col items-center justify-center flex-grow'>
          <Mint setShowMint={setShowMint} />
        </div>
      </div>
    </div>
  );
};

export default PurchaseTray;
