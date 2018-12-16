import React from "react";
import { CardFooter, Badge } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class ForkList extends React.Component {
  constructor() {
    super();
    this.state = { forkData: [] };
  }

  componentDidMount() {
    const url = this.props.forkData;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ forkData: data });
      });
  }

  render() {
    return (
      <div>
        {this.state.forkData.length > 0 ? (
          <CardFooter style={{ backgroundColor: "#babfc4", color: "#fff" }}>
            <p>Forked By:</p>
            <span>
              {this.state.forkData.map(forkDetail => (
                <div class="gallery" key={forkDetail.id}>
                  <div classname="imgBorder">
                    <img
                      alt={forkDetail.owner.id}
                      src={forkDetail.owner.avatar_url}
                      width="300"
                      height="200"
                    />
                  </div>
                  <div className="desc">{forkDetail.owner.login}</div>
                </div>
              ))}
              <figure>
                <figcaption />
              </figure>
            </span>
          </CardFooter>
        ) : (
          <CardFooter style={{ backgroundColor: "#babfc4", color: "#fff" }}>
            No Forks
          </CardFooter>
        )}
      </div>
    );
  }
}
export default ForkList;
