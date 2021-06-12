export default function Index() {
    return <></>;
}

export async function getServerSideProps(context) {
    return {
        redirect: {
          permanent: false,
          destination: "/"
        }
      }
  }
