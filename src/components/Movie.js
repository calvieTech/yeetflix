import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

export default function Movie({ movie, removeCurrentMovie }) {
  console.log(movie);
  return (
    <div>
      <Dialog open={true}>
        <DialogTitle>{movie?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>{movie?.overview}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              removeCurrentMovie();
            }}
          >
            Cancel
          </Button>
          <Button>View Trailer</Button>
          <Button>Movie Homepage</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
