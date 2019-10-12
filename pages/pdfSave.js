import Layout from "../components/Layout";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default class Index extends React.Component {
    render() {
        return(
            <Layout display="false">
                <div className="center">
                    <div className="container" style = {{display:"flex",flexDirection:"column"}}>
                        <h1>Save to PDF</h1>
                        <button onClick = {save}> Save </button>
                    </div>
                </div>
            </Layout>
        )
    }
}

function save(){
    const file_name = prompt("What do you want to name this file?");
    html2canvas(document.querySelector('.container'),{scale: 1}).then(canvas =>{
        let pdf = new jsPDF('p', 'mm','paper');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 212, 299);
        pdf.save(file_name + ".pdf");

    });
}
