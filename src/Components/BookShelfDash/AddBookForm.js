import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import * as Icon from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "30px",
    paddingTop: "20px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const AddBookForm = (props) => {
  const [bookCode, setBookCode] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const handleAddNewBook = (e) => {
    e.preventDefault();
    debugger
   props.AddNewBook(bookName,bookAuthor,bookCode)
   setBookAuthor("");
   setBookCode("");
   setBookName("")
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.paper}>          
        <Avatar className={classes.avatar}>
          <Icon.Book />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New Book
        </Typography>
        <form  onSubmit={handleAddNewBook}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="outlined"
                variant="standard"
                label="Book Name"
                required
                fullWidth
                autoFocus
                onChange={(e) => setBookName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="Author"
                label="Author"
                onChange={(e) => setBookAuthor(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="bookCode"
                label="Book Code"
                style={{ paddingBottom: "10px" }}
                onChange={(e) => setBookCode(e.target.value)}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            type="Submit"
          >
            Add New book
          </Button>
        </form>
      </div>
    </>
  );
};
export default AddBookForm;
