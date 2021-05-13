import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";  
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

const EditBookForm = ({ book }) => {
  const [bookCode, setBookCode] = useState(book.code);
  const [bookName, setBookName] = useState(book.name);
  const [bookAuthor, setBookAuthor] = useState(book.author);
  const handleEditBook = (e) => {
    e.preventDefault();    
    axios
      .post("http://localhost:5005/updatebook/", {
        code: bookCode,
        name: bookName,
        author: bookAuthor,
      })
      .then((resp) => {
        console.log(resp.data);
        alert(resp.data);
      });
  };

  const classes = useStyles();

  return (
    <>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Icon.Book />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit Book
        </Typography>
        <hr />
        <form onSubmit={handleEditBook}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <label htmlFor="bookname">Book Name:</label>
              <TextField
                defaultValue={book.name}
                variant="outlined"
                id="bookname"
                required
                fullWidth
                autoFocus
                onChange={(e) => setBookName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="Author">Written By:</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Author"
                onChange={(e) => setBookAuthor(e.target.value)}
                defaultValue={book.author}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="bookCode">Book Code:</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                disabled={true}
                id="bookCode"
                style={{ paddingBottom: "10px" }}
                onChange={(e) => setBookCode(e.target.value)}
                defaultValue={book.code}
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
            Save
          </Button>
        </form>
      </div>
    </>
  );
};
export default EditBookForm;
