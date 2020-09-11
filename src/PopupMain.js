import React, { Component } from "react";
import them from "@/them";
class App extends Component {
  render() {
    return (
      <div className="app">
        popular lala this.
        <p>sadfasdf</p>
        <style jsx>{`
          .app {
            p {
              font-size: ${them.font.size.n}px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default App;
