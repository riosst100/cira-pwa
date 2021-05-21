import React, { useState } from 'react';
import { useCurrentUser } from '@/hooks/index';
import { useRouter } from 'next/router'
import NProgress from '@/components/nprogress';

export default function PostEditor() {
  const [user] = useCurrentUser();
  const router = useRouter();

  const [msg, setMsg] = useState(null);

  if (!user) {
    return (
      <div style={{ color: '#555', textAlign: 'center' }}>
        Please sign in to post
      </div>
    );
  }

  async function hanldeSubmit(e) {
    e.preventDefault();

    // Start progress bar
    NProgress.start();

    const body = {
      content: e.currentTarget.content.value,
    };
    if (!e.currentTarget.content.value) return;
    e.currentTarget.content.value = '';
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      setMsg('Posted!');
      setTimeout(() => setMsg(null), 5000);

      // router.push('/feed?success=1');
      router.push({ pathname: '/feed', query: { success: 1 }});
    }
  }

  return (
    <>
      <div className="flex items-center justify-center">
      <form onSubmit={hanldeSubmit} className="w-full bg-white shadow-md p-2"  autoComplete="off">
        <label htmlFor="name">
          <textarea
            name="content"
            placeholder="Ada info apa?"
            style={{
              "width":"100%",
              "border":"1px solid #cecece",
              "padding":"10px"
            }}
          ></textarea>
        </label>
        <div style={{"float":"right"}}>
          <button type="submit" className="mt-1 bg-primary hover:bg-green-700 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline">Kirim</button>
        </div>
      </form>
      </div>
    </>
  );
}
