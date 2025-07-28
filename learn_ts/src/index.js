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
// 引入 axios 库
const axios_1 = __importDefault(require("axios"));
// 创建函数以获取数据
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        try {
            // 发送 GET 请求
            const response = yield axios_1.default.get(url);
            // 处理成功的响应
            console.log('Fetched data:', response.data);
            // 遍历第一五个数据项并打印标题
            response.data.slice(0, 5).forEach((post) => {
                console.log(`Post ${post.id}: ${post.title}`);
            });
        }
        catch (error) {
            // 处理错误
            console.error('Error fetching data:', error);
        }
    });
}
// 调用函数
fetchData();
