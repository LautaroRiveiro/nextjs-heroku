import Link from "next/link";
import Layout from "../layouts/Layout";
import fetch from 'isomorphic-unfetch'
import moment from 'moment';

const PostLink = (props) => (
    <Link href={`/detalle?id=${props.id}`} as={`/detalle/${props.id}`}>
        <a>Ir a Detalle</a>
    </Link>
)

const Index = (props) => (
    <Layout>
        <h1>Departamentos</h1>

        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col">FECHA PUBLICACIÓN</th>
                <th scope="col">BARRIO</th>
                <th scope="col">CALLE</th>
                <th scope="col">AMB.</th>
                <th scope="col">M2</th>
                <th scope="col">PRECIO</th>
                <th scope="col">EXPENSAS</th>
                <th scope="col">PRECIO/M2</th>
                <th scope="col">AJUSTE</th>
                <th scope="col">REQUISITOS/GARANTÍA</th>
                <th scope="col">APTO PROFESIONAL</th>
                <th scope="col">AMENITIES</th>
                <th scope="col">COCHERA</th>
                <th scope="col">MÁS INFO </th>
            </tr>
            </thead>
            <tbody>

            {
                props.shows.map((show, index) => (

                    <tr key={show.id}>
                        <td>{moment(show.fechaPublicacion).format("DD/MM/YYYY")}</td>
                        <td>{show.barrio}</td>
                        <td>{show.calle}</td>
                        <td>{show.ambientes}</td>
                        <td>{show.superficie}</td>
                        <td>{show.precio && show.precio.toLocaleString("es-ES", {minimumFractionDigits: 2})}</td>
                        <td>{show.expensas && show.expensas.toLocaleString("es-ES", {minimumFractionDigits: 2})}</td>
                        <td>{(show.precio / show.superficie).toLocaleString("es-ES", {minimumFractionDigits: 2, maximumFractionDigits:2})}</td>
                        <td>????</td>
                        <td>????</td>
                        <td>{show.aptoProfesional ? "SI" : "NO"}</td>
                        <td>SI/NO??</td>
                        <td>{show.cochera ? "SI" : "NO"}</td>
                        <td><a href={show.url}>LINK</a></td>
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

                table{
                font-size: 12px;
                table-layout: auto;
                overflow-x: scroll;
                }

                tr{
                padding: 0px;
                }
            `}
        </style>
    </Layout>
)

Index.getInitialProps = async function () {
    const res = await fetch('https://listadodirecto.herokuapp.com/buscar?from=20170728&to=20200729')
    const data = await res.json()

    //console.log(`Show data fetched. Count: ${JSON.stringify(data)}`)

    data.map( show => {if(!show.id) console.log("Show:", show) })
    return {shows: data}
}

export default Index