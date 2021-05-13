import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import BooksArea from "./BooksArea";
import Button from "@material-ui/core/Button";
import AddBookForm from "./AddBookForm";
import EditBookForm from "./EditBookForm";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "1%",
    paddingLeft: "2%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
}));

const BookShelfDash = () => {
  const classes = useStyles();
  const [addNewBookClick, setAddNewBookClick] = useState(false);
  const [editBookClick, setEditBookClick] = useState(false);
  const [books, setBooks] = useState([]);
  const [book, setbook] = useState({});

  const getAllBooks = () => {
    axios
      .get("http://localhost:5005/books")
      .then((resp) => setBooks(resp.data));
  };

  const handleAddBookClick = () => {
    setAddNewBookClick(!addNewBookClick);
  };
  const AddNewBook = (bookName, bookAuthor, bookCode) => {
    axios
      .post("http://localhost:5005/addbook", {
        code: bookCode,
        name: bookName,
        author: bookAuthor,
      })
      .then((resp) => {
        console.log(resp.data);
        alert(resp.data);
        setAddNewBookClick(!addNewBookClick);
      });
  };
  const editBook = (code) => {
    
    setEditBookClick(!editBookClick);
    axios
      .get(`http://localhost:5005/book/${code}`, { code: code })
      .then((resp) => {
        console.log(resp.data);
        setbook(resp.data);
      });
  };

  useEffect(() => {
    getAllBooks();
  }, [books]);

  return (
    <>
      <CssBaseline />
      <Grid item xs={10}>
        <div style={{ paddingTop: "20px" }}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            style={{ float: "right" }}
            onClick={handleAddBookClick}
          >
            {addNewBookClick ? "Close" : "Add New Book"}
          </Button>
        </div>
      </Grid>
      <Grid className={classes.root}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={7}>
            <Paper elevation={0}>
              <BooksArea books={books} editBook={editBook} />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={3}>
              {addNewBookClick ? <AddBookForm AddNewBook={AddNewBook} /> : ""}
              {editBookClick ? <EditBookForm  book={book}/> : ""}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BookShelfDash;
