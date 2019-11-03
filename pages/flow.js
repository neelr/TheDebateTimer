import Layout from "../components/Layout";
var domtoimage = require('dom-to-image');

export default class Flow extends React.Component {
    render() {
        return (
            <Layout display="none">
                <div className="flex">
                    <div style={{ display: "flex", flexDirection: "row", height: "auto" }}>
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
                    overflow:auto;
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
        document.addEventListener("keydown", function (e) {
            if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) {
                e.preventDefault();
                var flow = document.getElementById('flow');
                flow.style.overflow = "visible";
                flow.style.backgroundColor = "black";
                domtoimage.toJpeg(flow, { quality: 1 })
                    .then(function (dataUrl) {
                        flow.style.backgroundColor = "rgb(37, 46, 56)";
                        flow.style.overflow = "auto";
                        var link = document.createElement('a');
                        link.download = 'flow.jpeg';
                        link.href = dataUrl;
                        link.click();
                    });
            }
        }, false);
    }
}
function save() {
    window.open("/flow")
}