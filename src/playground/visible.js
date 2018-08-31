class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false,
            text: ''
        }
    }

    toggleVisibility() {
        if(!this.state.visibility){
            this.setState(() => {
                return {
                    visibility: true,
                    text: <p>Visible mofo!</p>
                };
            });

        }
        else {
            this.setState(() => {
                return {
                    visibility: false,
                    text: ''
                };
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide' : 'Show'}</button>
                { this.state.text }

            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));