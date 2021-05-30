import { useRouter } from 'next/router'
import { ArrowBackOutline, CartOutline } from 'react-ionicons'
import { logoWhiteTrans } from '@/lib/core-data';
import { useSWRInfinite } from 'swr';
import fetcher from '@/lib/fetch';
import Skeleton from "react-loading-skeleton";

export default function Navbar({ title, isShop }) {
  const router = useRouter();
  return (
    <div className="header bg-primary">
    <div className="left">
        <div className="headerButton" onClick={() => router.back()}>
            <ArrowBackOutline
            color={'#ffffff'} 
            height="25px"
            width="25px"
            />
        </div>
    </div>
    <div className="pageTitle">
        {title}
    </div>
    {isShop ? (
      <div className="right" style={{"right":"15px"}} onClick={() => router.push('/shop/cart')}>
        <TotalCartProductBadge />
        <CartOutline color={'#ffffff'} height="30px" width="30px" />
      </div>
    ) : (
      <div className="right">
        <img onClick={() => router.push('/')} className="block lg:hidden h-7 w-auto mr-1" src={logoWhiteTrans} /></div>
      )
    }
  </div>
  )
}

function TotalCartProductBadge() 
{
  const member_id = "fXeJml-Kl9qQ";
  const { data } = getCarts(member_id);
  const carts = data ? data.reduce((acc, val) => [...acc, ...val.carts], []) : [];
  let length = 0;
  
  carts && (
    carts.map((cart) => 
        length += cart.product_ids.length
    )
  )

  return length ? (<span className="badge badge-danger" style={{"right": "-5px","top": "5px"}}>{length}</span>) : ''
}

export function getCarts(member_id) {
  return useSWRInfinite(() => {
      return `/api/shop/cart?member_id=${member_id}`;
  }, fetcher, {});
}