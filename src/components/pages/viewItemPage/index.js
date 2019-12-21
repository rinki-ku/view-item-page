import React from "react";
import "./__style.scss";
import Loader from "../../atoms/loader";
import ItemDetails from "../../molecules/ItemDetails";

class ViewItemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      active: false,
      show: false
    };
  }

  componentDidMount() {
    this.fetchJobList();
  }

  fetchJobList = () => {
    let url = "https://www.mobile.de/hiring-challenge.json";
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            itemList: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  _addActive = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { error, isLoaded, itemList, show } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return (
        <div className="content-section">
          <ItemDetails
            itemDataList={itemList}
            show={show}
            _handleClick={this._addActive}
          />
        </div>
      );
    }
  }
}

export default ViewItemPage;
