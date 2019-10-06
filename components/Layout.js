import Sidebar from "../components/Sidebar";
import Head from "next/head";

export default class Layout extends React.Component {
    render () {
        return (
            <div>
                <Head>
                    <title>the debate timer</title>
                </Head>
                <Sidebar display={this.props.display}>
                    {this.props.children}
                </Sidebar>
                <style jsx global>{`
                html, body {
                    margin:0;
                    padding:0;
                    height:100%;
                    width:100%;
                }
                .button {
                    text-decoration:none;
                    padding:10px;
                    color:white;
                    background-color:#395a8c;
                    border-radius:10px;
                    cursor:pointer;
                    font-weight:700;
                    transition:all 0.3s ease;
                }
                .button :hover {
                    background-color:#565a69;
                    -webkit-transform: scale(1.2);
                    -ms-transform: scale(1.2);
                    transform: scale(1.2);
                }
                `}</style>
            </div>
        )
    }
}