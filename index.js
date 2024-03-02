const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Suman World!");
});
const data = {
  login: "sumansingle",
  id: 90588892,
  node_id: "MDQ6VXNlcjkwNTg4ODky",
  avatar_url: "https://avatars.githubusercontent.com/u/90588892?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/sumansingle",
  html_url: "https://github.com/sumansingle",
  followers_url: "https://api.github.com/users/sumansingle/followers",
  following_url:
    "https://api.github.com/users/sumansingle/following{/other_user}",
  gists_url: "https://api.github.com/users/sumansingle/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/sumansingle/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/sumansingle/subscriptions",
  organizations_url: "https://api.github.com/users/sumansingle/orgs",
  repos_url: "https://api.github.com/users/sumansingle/repos",
  events_url: "https://api.github.com/users/sumansingle/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/sumansingle/received_events",
  type: "User",
  site_admin: false,
  name: "Suman Ghosh",
  company: "Vidyasagar University ",
  blog: "",
  location: "West Bengal",
  email: null,
  hireable: null,
  bio: "I am  a computer science student",
  twitter_username: null,
  public_repos: 75,
  public_gists: 0,
  followers: 2,
  following: 1,
  created_at: "2021-09-13T02:55:56Z",
  updated_at: "2024-01-27T13:29:08Z",
};

app.get("/login", (req, res) => {
  res.send(`<h1>Login in our website</h1>`);
});

app.get("/github", (req, res) => {
  res.json(data);
  res.status(500).json({ error: "message" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const fs = require("fs");
const textInput = fs.readFileSync("./input.txt", "utf-8");
const textOutput = `I am The Best! Mahakal' ${textInput} \n Created on -${Date.now()}`;
fs.writeFileSync("./output.txt", textOutput);
console.log("file Written");
