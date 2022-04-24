const express = require('express');
const conn = require('../database'); //archivo de coneccion a la bd
const router = express.Router();
const jwt = require('jsonwebtoken')

const {verify} = require('../middlewares/Auth');
const { application } = require('express');




module.exports= router;