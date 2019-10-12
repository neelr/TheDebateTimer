import Layout from "../components/Layout";
import Link from "next/link";

export default class Index extends React.Component {
    render() {
        return(
            <Layout display="false">
                <div className="center">
                    <div className="container" style = {{display:"flex",flexDirection:"column"}}>
                        <h1>the debate timer</h1>
                        <Link href="policyTimer"><a className="button" style={{width:"50%",margin:"auto"}}>Policy</a></Link>
                        <br></br>
                        <Link href="pfTimer"><a className="button" style={{width:"50%",margin:"auto"}}>Public Forum</a></Link>
                        <br></br>
                        <Link href="ldTimer"><a className="button" style={{width:"50%",margin:"auto"}}>Lincoln Douglas</a></Link>
                        <br></br>
                        <Link href="pdfSave"><a className="button" style={{width:"50%",margin:"auto"}}>Save to PDF</a></Link>
                        
                    </div>
                </div>
            </Layout>
        )
    }
}