import { gql, useQuery } from "@apollo/client";
// import PostUpvoter from "../PostUpvoter";

const POSTS_PER_PAGE = 10;

const GET_POSTS = gql`
  query getAllUser {
    user {
      id
      name
    }
  }
`;

function PostList() {
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: {},
    notifyOnNetworkStatusChange: true
  });
  if (data && data.user) {
    // const areMorePosts = data.allPosts.length < data._allPostsMeta.count;
    return (
      <div>
      {data.user.map((user, index) => (
        <div>{user.name}</div>
      ))}
      </div>
      // <Container>
      //   <List data-testid="postListList">
      //     {data.allPosts.map((post, index) => (
      //       <ListItem key={post.id} data-testid="postListListItem">
      //         <ListItemContainer>
      //           <Num>{index + 1}. </Num>
      //           <A href={post.url}>{post.title}</A>
      //           {/* <PostUpvoter id={post.id} votes={post.votes} /> */}
      //         </ListItemContainer>
      //       </ListItem>
      //     ))}
      //   </List>
      //   {areMorePosts ? (
      //     <Button onClick={() => loadMorePosts(data, fetchMore)}>
      //       {loading ? "Loading..." : "Show More"}
      //     </Button>
      //   ) : (
      //     ""
      //   )}
      // </Container>
    );
  }
  return <div>Loading...</div>;
}

function loadMorePosts(data, fetchMore) {
  return fetchMore({
    variables: {
      skip: data.allPosts.length
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult;
      }
      return Object.assign({}, previousResult, {
        // Append the new posts results to the old one
        allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
      });
    }
  });
}

export default PostList;