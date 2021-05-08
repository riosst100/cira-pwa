import React from 'react';
import { useSWRInfinite } from 'swr';
import Link from 'next/link';
import fetcher from '@/lib/fetch';
import { defaultProfilePicture } from '@/lib/default';

export default function MemberList() {
    const {
        data, error, size, setSize,
    } = getMember();

    const members = data ? data.reduce((acc, val) => [...acc, ...val.member], []) : [];

    return (
        <>
            {members.map((member) => <Member key={member._id} member={member} />)}
        </>
    );
}

export function getMember() {
    return useSWRInfinite(() => {
      return `/api/member`;
    }, fetcher, {
      refreshInterval: 10000,
    });
}

function Member({ member }) {
    return (
      <>
        <div className="section" style={
            {
                "color":"#27173E",
                "cursor": "pointer",
                "marginTop": "10px"
            }
        }>
            <Link href={"/member/"+member._id}>
                <a>
                    <div className="content">
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
      </>
    );
  }