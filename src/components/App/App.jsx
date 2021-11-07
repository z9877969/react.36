import { Component } from "react";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import "./App.css";

class App extends Component {
  state = {
    activePage: "main", // "costs"
  };

  toggleActivePage = (activePage = "main") => {
    this.setState({ activePage });
  };

  render() {
    const { activePage } = this.state;

    return (
      <div className="App">
        {activePage === "main" && (
          <MainPage openActivePage={this.toggleActivePage} />
        )}
        {activePage === "costs" && (
          <TransactionPage
            closeActivePage={this.toggleActivePage}
            transType={"costs"}
          />
        )}
        {activePage === "incomes" && (
          <TransactionPage
            closeActivePage={this.toggleActivePage}
            transType={"incomes"}
          />
        )}
        {activePage === "balance" && <h1>Balance</h1>}
      </div>
    );
  }
}

export default App;
