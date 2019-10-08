import Layout from "../components/Layout";
import Link from "next/link";

export default class Index extends React.Component {
    render() {
        return(
            <Layout display="false">
                <div className="center">
                    <div className="container" style = {{display:"flex",flexDirection:"column"}}>
                        <h1>the debate timer</h1>
                        <Link href="policyTimer"><a className="button" style={{width:"auto",margin:"5px"}}>Policy</a></Link>
                        <Link href="pfTimer"><a className="button" style={{width:"auto",margin:"5px"}}>Public Forum</a></Link>
                        <Link href="ldTimer"><a className="button" style={{width:"auto",margin:"5px"}}>Lincoln Douglas</a></Link>
                    </div>
                </div>
            </Layout>
        )
    }
}