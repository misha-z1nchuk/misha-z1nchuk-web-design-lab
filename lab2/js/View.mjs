
const parser = new DOMParser();

export default class View{
    constructor() {
        this.posts = this.getElement('#add-post')
        this.postPage = this.getElement('#post-page')
    }


    addPostsElement(title, body, postId, handleAddComment, handleDeletePost){
        if(!title || ! body){
            alert("You should assign values to title and body")
            return;
        }
        const postsAdd = this.getElement('#posts-add')

        // const elToAppendPost = postsL.childElementCount > postsR.childElementCount ? postsR : postsL;

        postsAdd.appendChild(parser.parseFromString(`
            <div class="bg-light mt-2" id="post-item-${postId}" class="card mb-4 mw-100 .bg-light">-->
                <div class="card-body">
                    <div class="small text-muted">${new Date().toISOString().slice(0, 10)}</div>
                    <h2 class="card-title h4">${title}</h2>
                    <p class="card-text">${body}</p>
                    <div class="d-flex">
                        <a id="post-${postId}" class="btn btn-primary">Add comment</a>
                        <a id="delet-post-${postId}" class="btn btn-danger" href="client/pages/post.html">Delete Post →</a>
                    </div>
                    <div>
                        <label for="post-comment-${postId}" class="form-label">Comment</label>
                        <input type="text" class="form-control" id="post-comment-${postId}">
                    </div>
         
                </div>
            </div>
            
        `, 'text/html').firstChild)



        const post = this.getElement(`#post-${postId}`)
        if (post){
            post.addEventListener('click', () => {
                let comment = this.getElement(`#post-comment-${postId}`)
                handleAddComment(postId, comment.value);
                comment.value = '';
            })
        }
        const deletePost = this.getElement(`#delet-post-${postId}`)
        if (deletePost){
            deletePost.addEventListener('click', () => {
                handleDeletePost(postId);
            })
        }

    }

    // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }


    bindAddPosts(handler){
        if (this.posts){
            this.posts.addEventListener('click', event => {
                const title = this.getElement('#post-title').value
                const body = this.getElement('#post-body').value
                handler(title, body)
            })
        }
    }


    deletePost (postId){
        let res = this.getElement(`#post-item-${postId}`);
        res.parentNode.removeChild(res);

    }

    deleteComment (commentId){
        let res = this.getElement(`#comment-${commentId}`);
        console.log(res);
        res.parentNode.removeChild(res);

    }

    addComment (postId, comment, commentId, handleDeleteComment){
        if (!comment){
            alert("Comment should be filled")
            return;
        }
        let res = this.getElement(`#post-item-${postId}`);
        res = res.querySelector('.card-body');

        res.appendChild(parser.parseFromString(`
            <div id="comment-${commentId}" class="d-flex bd-highlight bg-light mt-3 border-bottom">
                <h3 class="p-2 flex-grow-1 bd-highlight bg-light">${comment}<h3/>
                <a id="delet-comment-${commentId}" class="btn btn-danger p-2" >Delete Comment</a>
            </div>
        `, 'text/html').firstChild)

        const post = this.getElement(`#delet-comment-${commentId}`)
        if (post){
            post.addEventListener('click', () => {
                handleDeleteComment(commentId);
            })
        }
    }
}

