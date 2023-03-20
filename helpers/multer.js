const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const userId = req.body.userId;
    console.log(userId);
    const uploadPath = path.join(__dirname, "uploads", userId.toString());
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const profilePic = req.body.profilepic;
    cb(null, profilePic);
  },
});

// Multer upload configuration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB
  },
  fileFilter: function (req, file, cb) {
    const profilePic = req.body.profilepic;
    const allowedExtensions = [".jpg", ".jpeg", ".png"];
    const extension = path.extname(profilePic).toLowerCase();
    if (allowedExtensions.includes(extension)) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg, .jpeg, and .png files are allowed"));
    }
  },
});

module.exports = upload;
