# react-node-template
This template is going to be used for node and react development

## Table of Content
- [Template setup](#template-setup)
- [Features](#features)
- [How to start locally](#how-to-start-locally)
- [Credits](#credits)

---

## [Template setup](#table-of-content)

- This template needs [docker](https://www.docker.com/), docker-compose and [node](https://nodejs.org/en) installed first
- If you are wanting to see how-to setup, docker watch this [YouTube](https://www.youtube.com/watch?v=31ieHmcTUOk&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7) series
- Once all the above has been set up run docker-compose up
- Make sure that docker-desktop is up and running first

If you are getting a file sharing issue
- These commands are used for Linux
- They should work on Mac not sure about Windows

Run the following commands

- $ grep "$USER" /etc/subuid >> /dev/null 2&>1 || (echo "$USER:100000:65536" | sudo tee -a /etc/subuid)
- $ grep "$USER" /etc/subgid >> /dev/null 2&>1 || (echo "$USER:100000:65536" | sudo tee -a /etc/subgid)

To test if the commands worked run the following:

- Echo $USER
- cat /etc/subuid
- cat /etc/subgid

It should print out your name and a group of numbers depending on which command you run

Note: "$" is used to show command don't include it when you are actually running the command

Reference: https://docs.docker.com

---

## [Features](#table-of-content)

- [React](https://react.dev/)
- [NodeJS](https://nodejs.org/en)
- [Prisma](https://www.prisma.io/)

---

## [How to start locally](#table-of-content)

- Once you have done the initial [Setup](#template-setup)
- Open up a terminal and run docker-compose up
- Make sure that the docker-desktop is running first
- Once it is finished, you should be able to go to port 3000 for React
- Or post 5000 for express
- You can also see the database by using the [Prisma Studio](https://www.prisma.io/docs/orm/tools/prisma-studio)
- To run Prisma Studio type the command npx prisma studio

---

## [Credits](#table-of-content)

- [Net Ninja](https://github.com/iamshaunjp) for the YouTube tutorials

---
