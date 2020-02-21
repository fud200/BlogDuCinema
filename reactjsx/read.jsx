class Dictionary {
    id_dict;
    title_dict;
    content_dict;
}

class Read extends React.Component {
    _isMounted = false;

    state = {
        dict: [Dictionary]
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._isMounted = true;

        axios.get('https://likelion8th-test.herokuapp.com/dictionary/%E3%84%B1/').then((response) => {
            if (this._isMounted) {
                this.setState({
                    dict : response.data
                })
            }
            console.log(this.state.dict[0].title_dict);
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const style = {
            borderTop: '1px solid #C8C8C8',
            padding: '20px',
        };

        const data = this.state.dict;
        const listItems = data.map((d) =>
            <li key={d.id_dict} style={style}>
                <h3>
                    {d.title_dict}
                </h3>
                <br />
                    {d.content_dict}
            </li>
        );
        return (<div>{listItems}</div>);
    }
}

const e = React.createElement;
ReactDOM.render(e(Read), document.getElementById("test"));