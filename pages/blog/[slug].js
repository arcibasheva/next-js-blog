import React, {Component} from "react"
import fetch from 'isomorphic-unfetch'
import Layout from "../../components/Layout";

const Page = ({post}) => (
    <Layout>
        Page {post}
    </Layout>
)

Page.getInitialProps = function ({asPath}) {
    const res = fetch('http://localhost:3000/blog').then(result => {
        console.log(result.json())
    })

    return {}
}

export default Page

// import React, {Component} from "react"
// import fetch from 'isomorphic-unfetch'
// import Layout from "../../components/Layout";

// export default class Post extends Component {
//     static async getInitialProps({asPath}) {
//         console.log(asPath)
//         const res = await fetch(`http://localhost:3000/blog?url=${asPath}`)
//         const post = await res.json()
//         return {post}
//     }
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             post: this.props.post
//         }
//     }
//
//     render() {
//         const {post} = this.state
//         console.log('post', post)
//         return <Layout>
//                 <pre key={post.url}>
//                     {JSON.stringify(post, null, 2)}
//                 </pre>
//         </Layout>
//     }
// }