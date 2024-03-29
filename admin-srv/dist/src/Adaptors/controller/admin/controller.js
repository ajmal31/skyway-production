"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("../../../Application/usecase/login"));
const getAllVenturs_1 = __importDefault(require("../../../Application/usecase/getAllVenturs"));
const wallet_1 = __importDefault(require("../../../Application/usecase/wallet"));
const adminController = (dbrepInterface, dbRepoImplements, serviceInterface, serviceImplements) => {
    const dbRepo = dbrepInterface(dbRepoImplements());
    const service = serviceInterface(serviceImplements());
    //POST METHODS
    const login = async (req, res) => {
        const response = await (0, login_1.default)(dbRepo, service, req.body);
        console.log("login response", response);
        return res.json(response);
    };
    //GET METHODS
    const getAllventures = async (req, res) => {
        const response = await (0, getAllVenturs_1.default)(dbRepo);
        return res.json(response);
    };
    const getWalletAmount = async (req, res) => {
        const response = await (0, wallet_1.default)(dbRepo);
    };
    return {
        getWalletAmount,
        getAllventures,
        login
    };
};
exports.default = adminController;
