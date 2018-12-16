import React from "react";
import ForkList from "./ForkList";
import { Card, CardBody, CardText, CardFooter, Badge } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
class GistList extends React.Component {
  render() {
    const data = this.props.gistdata;
    const fileData = data.files;

    let fileType = Object.keys(fileData).map(name => fileData[name].language);

    fileType = [...new Set([...fileType])];
    return (
      <div>
        <Card key={data.id} style={{ borderColor: "#333" }}>
          <CardBody>
            <CardText style={{ fontWeight: "900" }}>
              <h3> {data.description ? data.description : `No Description`}</h3>
            </CardText>
          </CardBody>
          <CardFooter style={{ backgroundColor: "#9fa6ad", color: "#fff" }}>
            File Type:
            {fileType.map(fileType => (
              <Badge color="primary" pill>
                {fileType}
              </Badge>
            ))}
          </CardFooter>

          <ForkList forkData={data.forks_url} />
        </Card>
        <br />
      </div>
    );
  }
}
export default GistList;
