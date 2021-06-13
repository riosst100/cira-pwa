import React, { useState, useEffect } from 'react';
import Layout from '@/components/layoutSub'
import Router from 'next/router';
import { useCurrentUser } from '@/hooks/index';
import Link from 'next/link'
import NProgress from '@/components/nprogress';
import { logoBlueTrans } from '@/lib/core-data';
import { isAndroid } from '@/lib/helpers';

export default function SignupPage() {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    // redirect to home if user is authenticated
    // if (user) Router.replace('/');
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

  const selectPartnerType = (e) => {
    const radioBtn = document.querySelector('#select-'+e.target.id);
    const all_container = document.querySelectorAll('[id^="container-"]');
    if (all_container) {
        all_container.forEach(container=> { 
            container.style.background='#eaeaea';
        });
    }
    
    const container = document.querySelector('#container-'+e.target.id);
    if (container) {
        container.style.background='rgb(184, 225, 255)';
        radioBtn.checked = true;
    }
  }

  return (
    <Layout title="Buat Toko">
    <div className="flex items-center justify-center mt-1">
    <form onSubmit={handleSubmit} className="w-full bg-white p-3 mb-1">
        <div>{errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}</div>
        <div className="mb-2" style={
          {
            "fontWeight":"bold",
            "fontSize":"20px",
            "color": "#369bff"
          }
        }>Data Toko</div>
        <hr />
        <div className="mb-4 mt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Kategori Toko
            </label>
            <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option>Toko Mainan</option>
              <option>Toko Kendaraan</option>
            </select>
            {/* <div onClick={selectPartnerType} id="container-shop" style={{"backgroundColor":"rgb(184, 225, 255)","display": "inline-block"}} className="p-2 m-1">
                <img src="/images/icon/shop.webp" id="shop" style={{"width":"50px"}} /></div>
            <input type="radio" id="select-shop" name="partner_type" value="shop" style={{"display": "none"}} defaultChecked />
            <div onClick={selectPartnerType} id="container-travel" style={{"backgroundColor":"#eaeaea","display": "inline-block"}} className="p-2 m-1">
                <img src="/images/icon/travel.webp" id="travel" style={{"width":"50px"}} /></div>
            <input type="radio" id="select-travel" name="partner_type" value="travel" style={{"display": "none"}} />
            <div onClick={selectPartnerType} id="container-bengkel" style={{"backgroundColor":"#eaeaea","display": "inline-block"}} className="p-2 m-1">
                <img src="/images/icon/bengkel24.webp" id="bengkel" style={{"width":"50px"}} /></div>
            <input type="radio" id="select-bengkel" name="partner_type" value="bengkel" style={{"display": "none"}} /> */}
        </div>
        <div className="mb-4 mt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Nama Toko
            </label>
            <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="full_name" id="full_name" type="text" required/>
        </div>
        <div className="mb-4 mt-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Deskripsi/Bio Toko
            </label>
            <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="bio" id="bio" placeholder="Jelaskan tentang toko kamu.." required />
        </div>
        <div className="mb-2 mt-5" style={
          {
            "fontWeight":"bold",
            "fontSize":"20px",
            "color": "#369bff"
          }
        }>Alamat Toko</div>
        <hr></hr>
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
        <div className="mt-4 mb-2" style={{"textAlign":"center"}}>
            <button id="submit"
                className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                <i className="fab fa-whatsapp"></i> Buat Toko
            </button>
        </div>
    </form>
</div>

</Layout>
  );
};
