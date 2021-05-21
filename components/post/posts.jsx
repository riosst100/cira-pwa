import React from 'react';
import { useSWRInfinite } from 'swr';
import Link from 'next/link';
import { useUser } from '@/hooks/index';
import fetcher from '@/lib/fetch';
import { defaultProfilePicture } from '@/lib/default';
import { ChatboxEllipsesOutline } from 'react-ionicons'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Post({ post }) {
  const user = useUser(post.creatorId);
  return (
    <>
      <Link href={"/"+ post._id}>
                <a style={
                {
                    "backgroundColor": "white",
                    "borderRadius": "5px",
                    "display": "block",
                    "marginBottom":"15px"
                }
                }>
                    <div className="content">
                        <div className="pl-2 pr-2 pt-2">
                            <img src={user && !user.profile_img && defaultProfilePicture(user._id)} className="imaged" style={
                                {
                                    "width": "40px",
                                    "position": "absolute"
                                }
                            }
                            />
                            <div style={{ "paddingRight": "5px"}}>
                                <div style={{ "marginLeft": "50px", "fontWeight":"500" }}>{user && user.name}</div>
                                <div style={{ "marginLeft": "50px", "color": "grey", "fontSize":"12px" }}>{new Date(post.createdAt).toLocaleString()}</div>
                            </div>
                            <div style={{"padding":"2px", "marginTop":"8px"}}><hr /></div>
                            {/* <div style={{"padding":"5px"}}>{item.bio}</div> */}
                        </div>
                        <div className="pl-3 pr-3">
                          {post.content}
                        </div>
                        {/* <div>
                            <img src="http://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/040/307/medium/japanese-supermarket-p70745807_M_%281%29.jpg?2021" style={{"height":"200px","width":"100%","objectFit":"cover"}} />
                        </div> */}
                        <div style={{"padding":"8px"}}>
                            <table style={{
                                "width":"100%",
                                "textAlign":"center"
                            }}>
                                <tbody>
                                    <tr>
                                        <td style={
                                            {
                                                "backgroundColor": "rgb(0, 202, 0)"
                                            }
                                        }>
                                            <Link href={"/store/"}>
                                                <a className="bg" style={
                                                    {
                                                        "padding": "8px",
                                                        "color": "white",
                                                        "display":"block"
                                                    }
                                                }><ChatboxEllipsesOutline
                                                color={'white'} 
                                                height="22px"
                                                width="22px"
                                            /> <span style={{ "marginLeft": "5px" }}>Komentar</span></a>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </a>
            </Link>
    </>
  );
}

const PAGE_SIZE = 10;

export function usePostPages({ creatorId } = {}) {
  return useSWRInfinite((index, previousPageData) => {
    // reached the end
    if (previousPageData && previousPageData.posts.length === 0) return null;

    // first page, previousPageData is null
    if (index === 0) {
      return `/api/posts?limit=${PAGE_SIZE}${
        creatorId ? `&by=${creatorId}` : ''
      }`;
    }

    // using oldest posts createdAt date as cursor
    // We want to fetch posts which has a datethat is
    // before (hence the .getTime() - 1) the last post's createdAt
    const from = new Date(
      new Date(
        previousPageData.posts[previousPageData.posts.length - 1].createdAt,
      ).getTime() - 1,
    ).toJSON();

    return `/api/posts?from=${from}&limit=${PAGE_SIZE}${
      creatorId ? `&by=${creatorId}` : ''
    }`;
  }, fetcher, {
    refreshInterval: 10000, // Refresh every 10 seconds
  });
}

export default function Posts({ creatorId }) {
  const {
    data, error, size, setSize,
  } = usePostPages({ creatorId });

  const skeleton = (
    <>
      <SkeletonTheme color="#e5e5e5" highlightColor="#e9e9e9">
        <Skeleton height={100} />
      </SkeletonTheme>
    </>
  );

  const posts = data ? data.reduce((acc, val) => [...acc, ...val.posts], []) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = isLoadingInitialData || (data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0].posts?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.posts.length < PAGE_SIZE);

  return !data ? <div className="text-center"><img src="/icon/loading.webp" style={{"width":"30px"}}/><div className="mt-2" style={{"color":"#7f7f7f"}}>Memuat info terbaru...</div></div> : (
    <div>
      {posts.map((post) => <Post key={post._id} post={post} />)}
      {!isReachingEnd && (
      <button
        type="button"
        style={{
          background: 'transparent',
          color: '#000',
        }}
        onClick={() => setSize(size + 1)}
        disabled={isReachingEnd || isLoadingMore}
      >
        {isLoadingMore ? '...' : 'load more'}
      </button>
      )}
    </div>
  );
}
