import {$authHost, $host} from "./index";

export const createPost = async (title, body) => {
    const {data} = await $authHost.post('api/posts', {title, body})
    return data
}

export const getPosts = async () => {
    const posts = await $authHost.get('api/posts');
    return posts
}

export const deletePost = async (id) => {
    try{
        const posts = await $authHost.delete(`api/posts/${id}`);
        return posts

    }catch (e){
        alert(e.response.data.message)
    }
}

