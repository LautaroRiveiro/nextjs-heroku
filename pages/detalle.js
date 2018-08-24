import Layout from "../layouts/Layout";
import fetch from 'isomorphic-unfetch'

const Contenido =(props) => (
    <p>{props.data.name}</p>
)

const Page =(props) => (
    <Layout>
        <Contenido data={props.data}></Contenido>
    </Layout>
)

Page.getInitialProps = async function(context) {
    const res = await fetch(`https://api.tvmaze.com/shows/${context.query.id}`)
    const data = await res.json()
    console.log(`show: ${context.asPath}`)
    return {data}
}

export default Page