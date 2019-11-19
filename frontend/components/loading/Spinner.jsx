import React from "react";
import { PongSpinner } from "react-spinners-kit";

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    const { loading } = this.state;
    return <PongSpinner size={30} color="#686769" loading={loading} />;
  }
}

export default Spinner;
