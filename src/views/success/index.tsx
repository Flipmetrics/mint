// Next, React
import { FC, useEffect } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { useRouter } from 'next/router';

import Button from 'components/Button';
import IlustrationCredit from "components/IllustrationCredit"

export const SuccessView: FC = ({ }) => {
  const router = useRouter();

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#5CA0FF', '#7BC192', '#F3B73F', '#FF9D47', '#E87879', '#E27EBA', '#9C7EE2']
    });
  }, [])

  return (

    <div className="min-h-[calc(100vh-6rem)] flex justify-center flex-col">
      <Image src="/illustration-pass.svg" alt="" width="600" height="400" className="-mt-10" />
      <IlustrationCredit/>
      <div className='text-center'>
        <h1 className='my-4 text-2xl font-semibold'>Welcome to the club!</h1>
        <p className='text-primary my-4 text-balance'>Your founders pass has been stored safely in your wallet. Look after it, it&rsquo;s the key to an exciting future.</p>
      </div>
      <Button href={router?.query?.redirect ? `${router?.query?.redirect}?mintTx=${router?.query?.mintTx}` : `https://talk.xyz/verify-pass?mintTx=${router?.query?.mintTx}`} className='mt-4 mb-0'>Continue</Button>
    </div>
  );
};
