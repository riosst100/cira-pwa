import React, { useState, useEffect } from 'react';
import Layout from '@/components/layoutSub'
import Router from 'next/router';
import { useCurrentUser } from '@/hooks/index';
import Link from 'next/link'
import NProgress from '@/components/nprogress';
import { logoBlueTrans } from '@/lib/core-data';

const SignupPage = () => {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start progress bar
    NProgress.start();

    const body = {
      phone: e.currentTarget.phone.value,
      name: e.currentTarget.full_name.value,
      call_name: e.currentTarget.call_name.value,
      birthdate: e.currentTarget.birthdate.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      const userObj = await res.json();
      mutate(userObj);
    } else {
      // Start progress bar
      NProgress.done();

      setErrorMsg(await res.text());
    }
  };

  return (
    <Layout title="Daftar Jadi Member">
    <div className="flex items-center justify-center">
    <form onSubmit={handleSubmit} className="w-full bg-white shadow-md rounded px-5 pt-6 pb-8">
        <div className="text-center"><img className="mx-auto" src={logoBlueTrans} style={{ width: '70px' }} /></div>
        <h1 className="mt-2 block text-gray-700 font-bold mb-2 text-xl text-center">Daftar jadi member Cira</h1>
        <br/>
        <div>{errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}</div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Nama Lengkap
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="full_name" id="full_name" type="text" required/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Nama Panggilan
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="call_name" id="call_name" type="text" required/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Tanggal Lahir
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="birthdate" id="birthdate" type="date" placeholder="Ingresa tu Fecha de Nacimiento" required/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Nomor HP
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phone" id="phone" type="number" required/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
            </label>
            <div>Tentukan password untuk akun member kamu.</div>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password" id="password" type="password" required/>
        </div>
        <div className="flex items-center justify-between">
            <button id="submit"
                className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                <i className="fab fa-whatsapp"></i> Daftar Sekarang
            </button>
        </div>
        <div>Sudah punya jadi member? <Link href="/login"><a>Login</a></Link></div>
    </form>
</div>

</Layout>
  );
};

export default SignupPage;
