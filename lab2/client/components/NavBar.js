class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand m-lg-1" href="#"><img height="60px" width="70px" src="../images/logo-removebg-preview.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active fs-3">
                    <a class="nav-link" href="home.html">Home</a>
                </li>
                <li class="nav-item fs-3">
                    <a class="nav-link" href="profile.html"">Profile</a>
                </li>
                <li class="nav-item fs-3">
                    <a class="nav-link" href="about.html">About</a>
                </li>
            </ul> 
        </div>
    </nav>
        `
    }
}

customElements.define('main-header', NavBar);
