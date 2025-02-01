import React from "react";
import Container from "../ui/Container";

export default function Header() {
  return (
    <div className="bg-white text- opacity-80">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div>Logo</div>
          <div>Menu</div>
        </div>
      </Container>
    </div>
  );
}
