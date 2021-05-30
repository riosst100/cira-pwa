import React from 'react';
import { useSWRInfinite } from 'swr';
import Link from 'next/link';
import fetcher from '@/lib/fetch';
import { defaultProfilePicture } from '@/lib/default';

export default function SearchMember({ query }) 
{
    const { data } = getMember(query);
    const members = data ? data.reduce((acc, val) => [...acc, ...val.member], []) : [];

    return (
        <> 
            <hr />
            <div className="p-2">
                <b>Pengguna</b>
                <span style={{"float":"right","color":"grey","fontSize":"12px", "paddingTop":"2px"}}>{members.length} hasil</span>
            </div>
            <hr />
            {members.map((member) => <Member key={member._id} member={member} />)}
        </>
    )
}

export function getMember(query) {
    return useSWRInfinite(() => {
      return `/api/member/search?q=${query}`;
    }, fetcher, {
      refreshInterval: 10000
    });
}

function Member({ member }) {
    return (
      <>
        <div className="section" style={
            {
                "color":"#27173E",
                "cursor": "pointer"
            }
        }>
            <Link href={"/member/"+member._id}>
                <a>
                    <div className="content p-2">
                        <img src={!member.profile_img && defaultProfilePicture(member._id)} className="imaged" style={
                            {
                                "width": "40px",
                                "position": "absolute"
                            }
                        }
                        />
                        <div style={{ "paddingRight": "5px"}}>
                        <div style={{ "marginLeft": "50px", "fontWeight":"500" }}>{member.name} <span className="badge badge-danger" style={{ "float":"right", "fontSize":"10px", "height":"18px" }}>{member.role ? member.role : 'Member'}</span></div>
                        <div style={{ "marginLeft": "50px", "color": "grey", "fontSize":"12px" }}>{member.desa && 'Desa ' + member.desa}{member.desa && member.kecamatan ? ', ' : 'Alamat tidak diketahui'} {member.kecamatan && 'Kec. '+member.kecamatan}</div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
        <hr />
      </>
    );
  }