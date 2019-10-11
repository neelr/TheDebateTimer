import Link from "next/link";

export default class Sidebar extends React.Component {
    render() {
        var container = (
            <div style={{ display: "flex", minHeight: "100%" }}>
                <div className="foot">
                    <p>Made with 💖 by <a href="https://github.com/hacker719">@Hacker719</a></p>
                </div>
                <style jsx>{`
                .foot {
                    padding:10px;
                    margin-top:auto;
                    bottom:0;
                    font-size:0.7em !important;
                    color:rgb(160,160,160) !important;
                }
                a {
                    color:rgb(160,160,160);
                }
                `}</style>
            </div>
        );
        if (this.props.display == "policy") {
            container = (
                <div className="cont">
                    <div className="eight" style={{ marginTop: "25px" }}>
                        <p>1AC</p>
                    </div>
                    <div className="three alt">
                        <p>CX</p>
                    </div>
                    <div className="eight">
                        <p>1NC</p>
                    </div>
                    <div className="three alt">
                        <p>CX</p>
                    </div>
                    <div className="eight">
                        <p>2AC</p>
                    </div>
                    <div className="three alt">
                        <p>CX</p>
                    </div>
                    <div className="eight">
                        <p>2NC</p>
                    </div>
                    <div className="three alt">
                        <p>CX</p>
                    </div>
                    <div className="five">
                        <p>1NR</p>
                    </div>
                    <div className="five alt">
                        <p>1AR</p>
                    </div>
                    <div className="five">
                        <p>2NR</p>
                    </div>
                    <div className="five alt">
                        <p>2AR</p>
                    </div>
                    <div id="aff">
                        <p>AffPrep</p>
                    </div>
                    <div id="neg" className="alt">
                        <p>NegPrep</p>
                    </div>
                    <div className="foot">
                        <p>Made with 💖 by <a href="https://github.com/hacker719">@Hacker719</a></p>
                    </div>
                    <style jsx>{`
                    .foot {
                        padding:10px;
                        margin-top:auto;
                        bottom:0;
                        font-size:0.7em !important;
                        color:rgb(160,160,160) !important;
                    }
                    a {
                        color:rgb(160,160,160);
                    }
                    .cont {
                        color:white;
                        display:flex;
                        flex-direction:column;
                    }
                    .cont div {
                        margin:auto;
                        display:flex;
                        height:50px;
                        font-size:1.4em;
                        cursor: pointer;
                    }
                    p {
                        margin:auto;
                    }
                    .alt {
                        background-color:rgb(5, 68, 138);
                        width:100%;
                        text-align:center;
                    }
                    `}</style>
                </div>
            );
        } else if (this.props.display == "pf") {
            container = (
                <div className="cont">
                    <div className="four" style={{ marginTop: "25px" }}>
                        <p>1AC</p>
                    </div>
                    <div className="four alt">
                        <p>1NC</p>
                    </div>
                    <div className="three">
                        <p>CX</p>
                    </div>
                    <div className="four alt">
                        <p>2AC</p>
                    </div>
                    <div className="four">
                        <p>2NC</p>
                    </div>
                    <div className="three alt">
                        <p>CX</p>
                    </div>
                    <div className="two">
                        <p>1AR</p>
                    </div>
                    <div className="two alt">
                        <p>1NR</p>
                    </div>
                    <div className="three">
                        <p>CX</p>
                    </div>
                    <div className="two alt">
                        <p>2AR</p>
                    </div>
                    <div className="two">
                        <p>2NR</p>
                    </div>
                    <div id="aff" className="alt">
                        <p>AffPrep</p>
                    </div>
                    <div id="neg">
                        <p>NegPrep</p>
                    </div>
                    <div className="foot">
                        <p>Made with 💖 by <a href="https://github.com/hacker719">@Hacker719</a></p>
                    </div>
                    <style jsx>{`
                    .foot {
                        padding:10px;
                        margin-top:auto;
                        bottom:0;
                        font-size:0.7em !important;
                        color:rgb(160,160,160) !important;
                    }
                    a {
                        color:rgb(160,160,160);
                    }
                    .cont {
                        color:white;
                        display:flex;
                        flex-direction:column;
                    }
                    .cont div {
                        margin:auto;
                        display:flex;
                        height:50px;
                        font-size:1.4em;
                        cursor: pointer;
                    }
                    p {
                        margin:auto;
                    }
                    .alt {
                        background-color:rgb(5, 68, 138);
                        width:100%;
                        text-align:center;
                    }
                    `}</style>
                </div>
            );
        } else if (this.props.display == "ld") {
            container = (
                <div className="cont">
                    <div className="six" style={{ marginTop: "25px" }}>
                        <p>1AC</p>
                    </div>
                    <div className="three alt">
                        <p>CX</p>
                    </div>
                    <div className="seven">
                        <p>1NC</p>
                    </div>
                    <div className="three alt">
                        <p>CX</p>
                    </div>
                    <div className="four">
                        <p>1AR</p>
                    </div>
                    <div className="six alt">
                        <p>1NR</p>
                    </div>
                    <div className="three">
                        <p>2AR</p>
                    </div>
                    <div id="aff" className="alt">
                        <p>AffPrep</p>
                    </div>
                    <div id="neg">
                        <p>NegPrep</p>
                    </div>
                    <div className="foot">
                        <p>Made with 💖 by <a href="https://github.com/hacker719">@Hacker719</a></p>
                    </div>
                    <style jsx>{`
                    .foot {
                        padding:10px;
                        margin-top:auto;
                        bottom:0;
                        font-size:0.7em !important;
                        color:rgb(160,160,160) !important;
                    }
                    a {
                        color:rgb(160,160,160);
                    }
                    .cont {
                        color:white;
                        display:flex;
                        flex-direction:column;
                        min-height:100%;
                    }
                    .cont div {
                        margin:auto;
                        display:flex;
                        height:50px;
                        font-size:1.4em;
                        cursor: pointer;
                    }
                    p {
                        margin:auto;
                    }
                    .alt {
                        background-color:rgb(5, 68, 138);
                        width:100%;
                        text-align:center;
                    }
                    `}</style>
                </div>
            );
        } else if (this.props.display == "none") {
            container = (
                <div>
                    <style jsx global>{`
                .sidebar {
                    width:0 !important;
                }
                .content {
                    padding:2vw !important;
                    overflow:hidden;
                }
                `}</style>
                </div>
            );
        }
        return (
            <div className="sidebar-container">
                <div className="sidebar">
                    {container}
                </div>
                <div className="content">
                    {this.props.children}
                </div>
                <Link href="/"><img src="http://assets.stickpng.com/thumbs/588a6660d06f6719692a2d16.png" style={{ cursor: "pointer", position: "fixed", right: "10px", top: "10px", height: "40px" }} /></Link>
                <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
                .sidebar-container {
                    display:flex;
                    left:0;
                    height:100vh;
                    width:100%;
                    flex-direction:row;
                    font-family: 'Lato', sans-serif;
                }
                .sidebar {
                    width:30vw;
                    background-color:#233961;
                    height:auto;
                    overflow:auto;
                }
                .content {
                    padding:10vw;
                    background-color:rgb(37, 46, 56);
                    width:100%;
                    color:rgb(160,160,160);
                }
                `}</style>
            </div>
        )
    }
}
