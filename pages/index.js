import Link from "next/link";
import Layout from "../layouts/Layout";
import fetch from 'isomorphic-unfetch'

const PostLink = (props) => (
    <Link href={`/detalle?id=${props.id}`} as={`/detalle/${props.id}`}>
        <a>Ir a Detalle</a>
    </Link>
)

const Index = (props) => (
    <Layout>
        <h1>Hello Next.js</h1>

        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Idioma</th>
                <th scope="col">Detalle</th>
            </tr>
            </thead>
            <tbody>

            {
                props.shows.map(({show}, index) => (

                    <tr key={show.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{show.name}</td>
                        <td>{show.language}</td>
                        <td><PostLink id={show.id}/></td>
                    </tr>

                ))
            }

            </tbody>
        </table>


        {/*language=CSS*/}
        <style jsx>
            {`
                h1 {
                    color: red
                }

                thead {
                    background-color: blueviolet;
                    color: white;
                }

                .table-striped > tbody > tr:nth-child(odd) > td,
                .table-striped > tbody > tr:nth-child(odd) > th {
                    background-color: white;
                }

                .table-striped > tbody > tr:nth-child(even) > td,
                .table-striped > tbody > tr:nth-child(even) > th {
                    background-color: navajowhite;
                }
            `}
        </style>
    </Layout>
)

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${JSON.stringify(data)}`)

    return {shows: data}
}

export default Index