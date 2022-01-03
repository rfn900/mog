export default function Webmail() {
  return <div></div>
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://gnldm1070.siteground.biz/webmail/log-in',
      permanent: false,
    },
  }
}
