import React, {Component} from "react"
import fetch from 'isomorphic-unfetch'
import Layout from "../components/Layout";

export default class Home extends Component {
    static async getInitialProps() {
        const res = await fetch('http://localhost:3000/blog')
        const blog = await res.json()

        return {blog}
    }

    constructor(props) {
        super(props);
        this.state = {
            blog: this.props.blog
        }
    }

    render() {
        const {blog} = this.state
        console.log('blog', blog)
        return <Layout>
            {blog.map(post =>
                    <pre key={post.url}>
                      {JSON.stringify(post, null, 2)}
                    </pre>
            )}
        </Layout>
    }
}
// const Home = props => (
//     <Layout>
//         {props.blog.map(post =>
//             <pre key={post.url}>
//                       {JSON.stringify(post, null, 2)}
//                      </pre>
//         )}
//     </Layout>
// );
//
// Home.getInitialProps = async function () {
//     const res = await fetch('http://localhost:3000/blog')
//     const blog = await res.json()
//     return {blog}
// };
//
// export default Home;