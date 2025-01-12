const fs = require("fs")
const path = require("path")
const express = require("express")

const app = express()

app.set("views", path.join(__dirname + "/views"))
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))
const accountData = fs.readFileSync(__dirname + "/json/accounts.json", "utf8")
const userData = fs.readFileSync(__dirname + "/json/users.json", "utf8")
const accounts = JSON.parse(accountData)
const users = JSON.parse(userData)

app.get("/", (req, res) => {
	res.render("index", {
		title: 'Account Summary',
		accounts: accounts
	})
})

app.get("/savings", (req, res) => {
	res.render("account", {
		title: 'Savings Account',
		account: accounts.savings
	})
})

app.get("/checking", (req, res) => {
	res.render("account", {
		title: 'Checking Account',
		account: accounts.checking
	})
})

app.get("/credit", (req, res) => {
	res.render("account", {
		title: 'Credit Card Account',
		account: accounts.credit
	})
})

app.get("/profile", (req, res) => {
	res.render("profile", {
		title: 'Profile',
		user: users[0]
	})
})

app.listen(3000, () => console.log("PS Project Running on port 3000!"))
