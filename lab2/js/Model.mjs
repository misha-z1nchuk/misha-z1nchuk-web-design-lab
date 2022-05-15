
export default class Model{
    #posts
    #comments
    constructor() {
        this.#posts = []
        this.#comments = []
    }

    addPosts(title, content){
        if (!this.#posts.length){
            this.#posts.push({id: 0, title, content})
            return this.#posts[0].id;
        }
        const lastId = this.#posts[this.#posts.length - 1].id;
        this.#posts.push({id: lastId + 1, title, content});

        return lastId + 1;

    }

    deletePost(id){
        this.#posts = this.#posts.filter(post => post.id !== id);
    }

    getPosts(){
        return this.#posts
    }

    getPost(id){
        return this.#posts.find(post => post.id === id);
    }

    addComment(comment, postId){
        if (!this.#comments.length){
            this.#comments.push({id: 0, comment, postId})
            return this.#comments[0].id;
        }
        const lastId = this.#comments[this.#comments.length - 1].id;
        this.#comments.push({id: lastId + 1, comment, postId});

        return lastId + 1;
    }

    deleteComment(id){
        this.#comments = this.#comments.filter(comment => comment.id !== id);
    }

}




