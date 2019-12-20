import React from "react"
import fetch from 'isomorphic-unfetch'
import Layout from "../../components/Layout";

const Page = ({post}) => (
    <Layout>
        <pre>
            {JSON.stringify(post, null, 2)}
        </pre>
    </Layout>
)

Page.getInitialProps = async function ({query}) {
    const {slug} = query;
    const res = await fetch(`http://localhost:3001/blog?url=/blog/${slug}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    let post = await res.json();
    post = await post.pop()
    return {post}
}

export default Page