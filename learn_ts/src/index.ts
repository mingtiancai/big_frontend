// 引入 axios 库
import axios from 'axios';

// 创建函数以获取数据
async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        // 发送 GET 请求
        const response = await axios.get(url);
        
        // 处理成功的响应
        console.log('Fetched data:', response.data);

        // 遍历第一五个数据项并打印标题
        response.data.slice(0, 5).forEach((post: { id: number; title: string }) => {
            console.log(`Post ${post.id}: ${post.title}`);
        });
    } catch (error) {
        // 处理错误
        console.error('Error fetching data:', error);
    }
}

// 调用函数
fetchData();