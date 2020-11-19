import React from "react";
import PaymentCard from "../PaymentCard";

import { Container, Header, SelectActivity, Title, Activity } from "./styles";

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <SelectActivity>
          <Activity>Todas</Activity>
          <Activity>Minhas</Activity>
        </SelectActivity>
      </Header>
      <PaymentCard />
    </Container>
  );
};

export default Activities;
