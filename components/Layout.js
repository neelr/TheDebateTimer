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
                <div className="footer">
                    <a href="https://github.com/hacker719/thedebatetimer">Source Code. MIT LICENSCE</a>
                </div>
                <style jsx global>{`
                html, body {
                    margin:0;
                    padding:0;
                    height:100%;
                    width:100%;
                }
                h1, h2{
                    text-align:center;
                }
                #stop, #start{
                    text-align:center;
                }
                .footer {
                    position:fixed;
                    right:0;
                    bottom:0;
                    margin:10px;
                    font-weight:700;
                    font-family: 'Lato', sans-serif;
                }
                .footer a {
                    color:rgb(160,160,160);
                    
                }
                .button {
                    text-align:center;
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