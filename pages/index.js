import React from "react"
import fetch from 'isomorphic-unfetch'
import Layout from "../components/Layout";

const Home = props => (
    <Layout>
        {props.blog.map(post =>
            <pre key={post.url}>
               {JSON.stringify(post, null, 2)}
             </pre>
        )}
    </Layout>
);

Home.getInitialProps = async function () {
    const res = await fetch('http://localhost:3001/blog')
    const blog = await res.json()
    return {blog}
};

export default Home;