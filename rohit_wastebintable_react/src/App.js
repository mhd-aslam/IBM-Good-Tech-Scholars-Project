import React from "react";
import { db, auth } from "./firebase";


class App extends React.Component{
  state = { 
    bins: null
  }

  componentDidMount(){
    db.collection('bins')
      .get()
      .then(snapshot => {
        const bins=[]
        snapshot.forEach( doc => {
          const data = doc.data()
          bins.push(data)
        })
        this.setState({ bins: bins})
        //console.log(snapshot)

      })
      .catch( error => console.log(error))
  }

  render(){
    return(
      <div className="App">
        <h1>TABLE</h1>
        {
          this.state.bins &&
          this.state.bins.map(bin =>{
            return(
              <div>
                <p>{bin.fill} - {bin.percentage}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App