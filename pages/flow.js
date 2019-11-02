import Layout from "../components/Layout";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default class Flow extends React.Component {
    render() {
        return(
            <Layout display="none">
                <div className="flex">
                    <div style={{display:"flex",flexDirection:"row",height:"auto"}}>
                        <h1>the flow</h1>
                        <a onClick={save} className="button" id="new">New Flow</a>
                    </div>
                    <div id="flow" className="flex-row">
                        <textarea></textarea>
                        <textarea></textarea>
                        <textarea></textarea>
                        <textarea></textarea>
                        <textarea></textarea>
                        <textarea></textarea>
                    </div>
                </div>
                <style jsx>{`
                .flex {
                    display:flex;
                    flex-direction:column;
                }
                .flex-row {
                    display:flex;
                    flex-direction:row;
                    overflow:visible !important;
                    background-color:rgb(37, 46, 56);
                    width:80vw;
                }
                textarea {
                    background-color: #383e54;
                    color:white;
                    min-width:150px;
                    padding:10px;
                    border-radius:10px;
                    height:60vh;
                    margin:20px;
                }
                textarea :focus {
                    outline: none !important;
                    border:1px solid red;
                    box-shadow: 0 0 10px #719ECE;
                }
                .button {
                    height:20px;
                    margin-left: auto;
                    margin-top:auto;
                    margin-bottom:auto;
                    margin-right:10vw;
                }
                `}</style>
            </Layout>
        )
    }
    componentDidMount() {
        var textareas = document.getElementsByTagName('textarea');
        var count = textareas.length;
        for (var i = 0; i < count; i++) {
            textareas[i].onkeydown = function (e) {
                if (e.keyCode == 9 || e.which == 9) {
                    e.preventDefault();
                    var s = this.selectionStart;
                    this.value = this.value.substring(0, this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
                    this.selectionEnd = s + 1;
                }
            }
        }
    }
}
function save ()  {
    alert("hi")
    var flow = document.getElementById("flow");
    flow.style.overflow = "visible";
    window.resizeTo(screen.height, 1000000000000000000000000000000000000000000000000000000);
    html2canvas(flow,{scale: 1}).then(canvas =>{
        flow.style.overflow = "auto";
        let pdf = new jsPDF('l','pt',[canvas.width,canvas.height]);
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, canvas.width,canvas.height);
        pdf.save("yola.pdf");
    });
}