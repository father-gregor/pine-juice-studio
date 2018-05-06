"use strict";

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": "false"}));
app.use("/", express.static(path.join(__dirname, "dist")));

//app.use("/api/testing", apiTestingRoutes);
//app.use("/api/words", wordsRoutes);

app.get("*", (req, res) => {
	return res.sendFile(__dirname + '/dist/index.html');
	// TODO Use this for production
	//return res.status(404).send();
});

app.use(function (req, res, next) {
	let err = new Error("Not Found");
	err.status = 404;
	next(err);
});

app.use(function (err, req, res, next) {
	res.status(err.status || 500).send(req.app.get('env') === 'development' ? err : {});
});

module.exports = app;