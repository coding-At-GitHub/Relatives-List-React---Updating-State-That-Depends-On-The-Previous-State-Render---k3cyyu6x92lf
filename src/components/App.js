import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        let friends = ["Raju", "Mohan", "Ramu"];
        return(
            <div id="main">
               {/* Do not remove the main div */}
                <ol key="relativeList">
                  {friends.map((friend, index) => (
                    <li key={"relativeListItem" + (index + 1)} />
                  ))}
            </ol>
            </div>
        )
    }
}


export default App;
