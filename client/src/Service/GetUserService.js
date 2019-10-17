import axios from 'axios';


const url = 'http://localhost:5000/api/posts';

class GetUserService {
    // Get Posts
    static getUsers() {
        return new Promise(async (resolve, rejects) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    })

                    )
                )
            } catch (err) {
                rejects(err);
            }
        })
    }

    // ADD Posts
    static insertUser(text) {
        return axios.post(url, {
            text
        })
    }

    // Delete Posts

    static deletetUser(id) {
        return axios.delete('${url}${id}');
    }
}

export default GetUserService;