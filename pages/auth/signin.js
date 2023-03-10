import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className=" mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              width={300}
              height={100}
              alt="logo"
              className="w-52 object-cover"
            />
            <p className="text-sm italic my-10 text-center">
              This website is created only for learning purposes
            </p>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}{' '}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers }, // will be passed to the page component as props
  };
}
