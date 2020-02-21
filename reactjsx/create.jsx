class Dictionary {
    id_dict;
    title_dict;
    content_dict;
}

class Read extends React.Component {
    _isMounted = false;

    state = {
        newWord: "",
        newContent: ""
    };

    constructor(props) {
        super(props);
    }

    post() {
        axios.post('https://likelion8th-test.herokuapp.com/dictionary/%E3%84%B1/', {
            title_dict: this.state.newWord,
            content_dict: this.state.newContent
        }).then((response) => {
            if (this._isMounted) {
                this.setState({
                    dict : response.data
                })
            }
        });
    }

    render() {
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