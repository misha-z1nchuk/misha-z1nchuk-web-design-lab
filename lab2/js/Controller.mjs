import Model from "./Model.mjs";
import View from "./View.mjs";


class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        this.view.bindAddPosts(this.handleAddPost)
        // Display initial todos
        // this.onTodoListChanged(this.model.todos)
    }

    handleAddPost = (title, content) => {
        let id = this.model.addPosts(title, content);
        this.view.addPostsElement(title, content, id, this.handleAddComment, this.handleDeletePost);
    }


    handleAddComment = (postId, comment) => {
        let id = this.model.addComment(postId, comment);
        this.view.addComment(postId, comment, id, this.handleDeleteComment );
    }

    handleDeletePost = (id) => {
        this.model.deletePost(id)
        this.view.deletePost(id)
    }

    handleDeleteComment = (id) => {
        this.model.deleteComment(id)
        this.view.deleteComment(id)
    }
}



const app = new Controller(new Model(), new View())

