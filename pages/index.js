import Layout from "../components/Layout";
import Link from "next/link";

export default class Index extends React.Component {
    render() {
        return(
            <Layout display="false">
                <div className="center">
                    <div className="container" style = {{display:"flex",flexDirection:"column"}}>
                        <h1>the debate timer</h1>
                        <Link href="timer"><a className="button" style={{width:"40px"}}>Start</a></Link>
                    </div>
                </div>
            </Layout>
        )
    }
}