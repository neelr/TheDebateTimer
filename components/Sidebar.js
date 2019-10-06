export default class Sidebar extends React.Component {
    render () {
        return (
            <div className="sidebar-container">
                <div className="sidebar">

                </div>
                <div className="content">
                    {this.props.children}
                </div>
                <style jsx>{`
                .sidebar-container {
                    display:flex;
                    left:0;
                    height:100%;
                    width:100%;
                    flex-direction:row;
                }
                .sidebar {
                    width:30vw;
                    background-color:red;
                    height:100vh;
                }
                .content {
                    margin:10vw;
                }
                `}</style>
            </div>
        )
    }
}