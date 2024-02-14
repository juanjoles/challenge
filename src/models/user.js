"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const bcrypt_1 = __importDefault(require("bcrypt"));
const pool = new pg_1.Pool({
    user: 'root',
    host: 'localhost',
    database: 'prueba',
    password: 'root',
    port: 5432,
});
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(this.password, 10);
            yield pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [this.username, this.email, hashedPassword]);
        });
    }
    static findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield pool.query('SELECT * FROM users WHERE username = $1', [username]);
            if (result.rows.length === 0)
                return null;
            const { id, email, password } = result.rows[0];
            return new User(username, email, password);
        });
    }
    comparePassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt_1.default.compare(password, this.password);
        });
    }
}
exports.default = User;
