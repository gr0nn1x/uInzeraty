"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors = require("cors");
const index_1 = __importDefault(require("./models/index"));
const path = require("path");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 3000;
app.use(cors());
index_1.default.sequelize.sync({ force: false, alter: false });
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.use(`/api/v${process.env.API_VER}/post`, require("./routes/post"));
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
