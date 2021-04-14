import { ReactNode } from "react";

import { Container } from "./styles";

function Button() {
  return (
    <Container href="#">
      <span>Submit</span>
      <div className="liquid"></div>
    </Container>
  );
}

export default Button;
