import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }
    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Поиск сотрудника"
                value={this.state.term} 
                onChange={this.onUpdateSearch}  // Событие на изменение
            />
        )
    }
}

export default SearchPanel;