import Header from "../components/Header";
import Head from "next/head";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

export default (props) => (
    <div style={layoutStyle}>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
        </Head>
        <Header/>
        {props.children}
    </div>
)