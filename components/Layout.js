import Sidebar from "../components/Sidebar";

export default class Layout extends React.Component {
    render () {
        return (
            <div>
                <Sidebar>
                    {this.props.children}
                </Sidebar>
                <style jsx global>{`
                html, body {
                    margin:0;
                    padding:0;
                    height:100%;
                    width:100%;
                }
                `}</style>
            </div>
        )
    }
}