import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    console.log('postdata in static props:',postData);
    return {
      props: {
        postData,
      },
    };
}


export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        {postData.contents}
      </Layout>
    );
  }