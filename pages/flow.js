import Layout from "../components/Layout";

export default class Flow extends React.Component {
    render() {
        return(
            <Layout display="none">
                <div className="flex">
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <h1>the flow</h1>
                        <a className="button" id="new">New Flow</a>
                    </div>
                    <div className="flex-row">
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
                    height:90vh;
                    overflow:auto;
                }
                textarea {
                    background-color: #383e54;
                    color:white;
                    padding:10px;
                    border-radius:10px;
                    min-width:177px;
                    height:calc(90vh - 119px);
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