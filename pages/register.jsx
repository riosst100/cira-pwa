import React, { useState, useEffect } from 'react';
import Layout from '@/components/layoutSub'
import { useCurrentUser } from '@/hooks/index';
import Link from 'next/link'
import NProgress from '@/components/nprogress';
import { isAndroid } from '@/lib/helpers';

export default function SignupPage() {
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
      kecamatan: e.currentTarget.kecamatan.value,
      desa: e.currentTarget.desa.value,
    };
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      const userObj = await res.json();
      if (isAndroid()) {
        app.updateFcmToken(userObj.user._id);
      }
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
        <form onSubmit={handleSubmit} className="w-full bg-white p-2 mt-1 mb-1">
          <div>{errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}</div>
          <div className="mb-2" style={
            {
              "fontWeight":"bold",
              "fontSize":"20px",
              "color": "#369bff"
            }
          }>Data Diri</div>
          <hr />
          <div className="mb-4 mt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Nama Lengkap
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="full_name" id="full_name" type="text" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Nama Panggilan
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="call_name" id="call_name" type="text" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Tanggal Lahir
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="birthdate" id="birthdate" type="date" placeholder="Ingresa tu Fecha de Nacimiento" required/>
          </div>
          <div className="mb-2 mt-5" style={
            {
              "fontWeight":"bold",
              "fontSize":"20px",
              "color": "#369bff"
            }
          }>Alamat</div>
          <hr />
          <div className="mb-4 mt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Kecamatan
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="kecamatan" id="kecamatan" type="text" placeholder="Cth. Banjarharjo" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Desa
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="desa" id="desa" type="text" placeholder="Cth. Tiwulandu" required/>
          </div>
          <div className="mb-2 mt-5" style={
            {
              "fontWeight":"bold",
              "fontSize":"20px",
              "color": "#369bff"
            }
          }>Data Akun</div>
          <hr />
          <div className="mb-4 mt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Nomor HP
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phone" id="phone" type="number" placeholder="Cth. 087812345678" required/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
            </label>
            <div>Tentukan password untuk akun member kamu.</div>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="password" id="password" type="password" required/>
          </div>
          <hr />
          <div className="mt-4" style={{"textAlign":"center"}}>
            <button id="submit"
                className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                <i className="fab fa-whatsapp"></i> Daftar Sekarang
            </button>
            <div style={{"padding":"10px","textDecoration":"underline"}} className="color-primary">
              <Link href="/login"><a>Sudah jadi member? Klik untuk masuk</a></Link>
            </div>
        </div>
    </form>
</div>

</Layout>
  );
};
