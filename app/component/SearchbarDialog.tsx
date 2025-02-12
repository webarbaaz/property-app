"use client";
import React from "react";
import SearchBar from "./SearchBar";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useSite } from "../hooks/useSite";

export default function SearchbarDialog() {
  const { setSearchDialog, searchDialog } = useSite();
  return (
    <div>
      <Dialog
        open={searchDialog}
        onOpenChange={(value) => {
          setSearchDialog(value);
        }}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Search Property</DialogTitle>
          <SearchBar />
        </DialogContent>
      </Dialog>
    </div>
  );
}
