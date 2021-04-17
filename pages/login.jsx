import React, { useState, useEffect } from 'react';
import Layout from '@/components/layoutSub'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCurrentUser } from '@/hooks/index';
import NProgress from '@/components/nprogress';

const LoginPage = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  const [user, { mutate }] = useCurrentUser();
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.push('/');
  }, [user]);

  async function onSubmit(e) {
    e.preventDefault();

    // Start progress bar
    NProgress.start();

    const body = {
      email: e.currentTarget.phone.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try again!');
    }
  }

  return (
    <Layout title="Login Member">
    <div className="flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-full bg-white shadow-md rounded px-5 pt-6 pb-8">
        <div className="text-center"><img className="mx-auto" src="https://brebes-social.id/public/images/logo/cira-blue-transparent.png" style={{ width: '70px' }} /></div>
        <h1 className="mt-2 block text-gray-700 font-bold mb-2 text-xl text-center">Masuk ke Cira App</h1>
        <br/>
        <div>{errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}</div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="phone" id="phone" type="text" required/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="password" id="password" type="password" required/>
        </div>
        <div className="flex items-center justify-between">
          <button id="submit"
            className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
              Masuk
          </button>
        </div>
        <Link href="/forget-password">
          <a>Forget password</a>
        </Link>
        <div>Belum punya akun? <Link href="/register"><a>Daftar</a></Link></div>
      </form>
        </div>
  </Layout>
  );
};

export default LoginPage;
