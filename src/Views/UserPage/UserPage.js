import React from "react";
import UserProjects from "components/features/UserProjects";
import { Container } from "./style";
import UserDetails from "components/features/UserDetails";

function UserPage() {
  return (
    <Container>
      <UserDetails />
      <UserProjects />
    </Container>
  );
}

export default UserPage;
