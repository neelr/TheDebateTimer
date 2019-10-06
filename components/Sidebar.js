export default class Sidebar extends React.Component {
    render () {
        var container = ``;
        if (this.props.display == "true") {
            container = (
                <div className="cont">
                    <div className="eight" style={{marginTop:"25px"}}>
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
                    <style jsx>{`
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
        }
        return (
            <div className="sidebar-container">
                <div className="sidebar">
                    {container}
                </div>
                <div className="content">
                    {this.props.children}
                </div>
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
