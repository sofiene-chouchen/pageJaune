const express = require("express");
const route = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

route.get("/", async (req, res) => {
  const Jobs = await prisma.job.findMany();
  res.send(Jobs);
});

route.post("/", async (req, res) => {
  const newJob = await prisma.job.create({
    data: {
      name: "Tags",
      email: "contact@tags.tn",
      phone: 55560746,
      description: "cafe mix marina ",
      localisation: "marina monastir 5000",
      latitude: 444.22,
      longitude: 333.33,
      categorieId: "cafe",
    },
  });
  res.send(newJob);
});

route.delete("/", async (req, res) => {
  const job = await prisma.job.deleteMany();
  res.status(200).send("deleted succusefuly");
});

module.exports = route;
