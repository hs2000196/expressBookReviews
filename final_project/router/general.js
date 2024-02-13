const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
    console.log(req.body);
    return res.status(400).json({ error: "sd" });
  if (!username && username.length > 1)
    return res.status(400).json({ error: "name is required" });
  if (!password &&  password.length > 1)
    return res.status(400).json({error: "password is required"});

  // check if username is already exist or not
  //if (!isValid(username))
  //  return res.status(400).json({ error: "user is already exist" });
//task 6
  users.push({username: username,password: password,});
  res.status(200).json({ message: "user registered successfully.", users });
});
// Task 2
const isbn = req.params.isbn
	let foundBook = findBookBy(constants.ISBN, isbn)
	if (foundBook)
    	res
            .status(200)
            .json({ message: "Book found", data: foundBook})
	else
		res
			.status(400)
			.json({ message: "Bad request params", data: null });
});


// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    const book_need = req.params.isbn;
    res.send(books[book_need]);
    
 });
  //task 3
// Get book details based on author
public_users.get("/author/:author", function (req, res) {
    const author = req.params.author
	const foundBook = findBookBy(constants.AUTHOR, author)
	if (foundBook)
		res
			.status(200)
			.json({ message: 'Book found', data: foundBook })
	else
		res
			.status(400)
			.json({ message: "Bad request params", data: null })
});
    
});


// Task 4
// Get a book based on its title synchronously
public_users.get("/title/:title", function (req, res) {
	const title = req.params.title
	const foundBook = findBookBy(constants.TITLE, title)
	if (foundBook)
		res
			.status(200)
			.json({ message: 'Book found', data: foundBook })
	else
		res
			.status(400)
			.json({ message: "Bad request params", data: null })
});


//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const isbn = req.params.isbn
	const foundBook = findBookBy(constants.ISBN, isbn)
	const reviews = foundBook?.reviews

	if (reviews)
		res
			.status(200)
			.json({ message: 'Reviews found', data: reviews })
	else
		res
			.status(400)
			.json({ message: "Bad request params", data: null })
});

module.exports.general = public_users;

