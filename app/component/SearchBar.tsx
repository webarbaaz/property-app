import React from "react";
import { Grid } from "./ui/Grid";
import Stack from "./ui/Stack";
import Text from "./ui/Text";
import Button from "./ui/Button";
import { FaSearch } from "react-icons/fa";

type Props = {};

export default function SearchBar({}: Props) {
  return (
    <Grid
      cols={4}
      className="bg-white rounded-full px-12 py-6 border shadow-lg my-6"
    >
      {[1, 2, 3].map((item, idx) => (
        <Stack key={idx}>
          <Text weight={"semibold"}>Property Type</Text>
          <select className="border p-2 rounded-lg">
            <option>Resi</option>
            <option>Resi</option>
          </select>
        </Stack>
      ))}
      <Button className="h-10 mt-auto">Search Now</Button>
    </Grid>
  );
}
