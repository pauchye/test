import React from 'react'
import Group from './group'


class Index extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        result: {}
      }
      this.groupBy = this.groupBy.bind(this);
    }
    
    
    componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://fetch-hiring.s3.amazonaws.com/hiring.json";

        fetch(proxyurl + url)
        .then(response => {
            console.log('response', response)
            if (response.ok) {
            return response.json();
            } else {
            alert("There is no book with this name!")  
            return null;
            }
        }).then(json => {
            if (json !== null) {
            // console.log('json', json)
            this.setState({ result: Object.values(json)})
            }
        })
    }

    groupBy(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
    };
    
    render() {
        let resultArray = [];
        Object.keys(this.state.result).forEach(key => resultArray.push(this.state.result[key]))
        console.log(resultArray)
        resultArray = this.groupBy(resultArray, 'listId')
        console.log(resultArray)
        console.log(typeof resultArray);
      return (
        <div>
            {
            Object.values(resultArray).map((subArray, idx) => {
                    return <Group key={idx} data={subArray} />
            })
            }
        </div>
      );
     }
}



export default Index;