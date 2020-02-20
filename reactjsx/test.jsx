class User {
    id;
    name;
    point;
}

class Test extends React.Component {
    _isMounted = false;

    state = {
        users: [User]
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._isMounted = true;

        axios.get('http://localhost:8080/user/all').then((response) => {
            if (this._isMounted) {
                this.setState({
                    users : response.data
                })
            }
            console.log(this.state.users[0].id);
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        console.log(this.state.users[0].id);
        return (<h1>{this.state.users[0].id}</h1>);
    }
}

const e = React.createElement;
ReactDOM.render(e(Test), document.getElementById("test"));