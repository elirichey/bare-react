import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import "../../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "./sass/styles.sass";

export default function MainBody(props) {
  return (
    <div className="body">
      <Button
        intent="success"
        text="button content"
        onClick={() => console.log("FUCK")}
      />

      <Card interactive={true} elevation={Elevation.TWO}>
        <h5>
          <a href="#">Card heading</a>
        </h5>
        <p>Card content</p>
        <Button>Test</Button>
      </Card>
    </div>
  );
}
