import * as line from '@line/bot-sdk';

const express = require("express");

const { config } = require('./config');

const client = new line.Client(config)

const app = express();