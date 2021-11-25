import React from "react";
import { db, auth } from "./firebase";

class App extends React.Component {
  state = {
    bins: null,
  };
  componentDidMount() {
    db.collection("bins")

      .get()
      .then((snapshot) => {
        const bins = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          bins.push(data);
        });
        this.setState({ bins: bins });
        //console.log(snapshot)
      })
      .catch((error) => console.log(error));
  }

    
    render(){
      return(
        <div className="container">
          <table id="example" className="display table">
            <thead className="thead-dark">
                <tr>
                  <th> Bin id </th>
                  <th>waste type</th>
                  <th>fill up</th>
                  <th>location</th>
                </tr>
            </thead>
            <tbody>
              {
                this.state.bins &&
                this.state.bins.map(bin =>{
                  return(
                    <tr>
                      <td>{bin.id}</td>
                      <td>{bin.fill}</td>
                      <td>{bin.percentage}</td>
                      <td>{bin.location}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      );
    }
}

export default App;
