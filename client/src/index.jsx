import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      labelsDate: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/data')
    .then((response) => {
      this.setState({
        loading: false,
        chartData: response.data
      })
    })
  }

  render () {
    return (
      <div>
        <h1>Crypto Charting Tool</h1>
        {this.state.loading ? null : <Chart chartData={this.state.chartData} />}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));