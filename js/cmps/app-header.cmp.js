export default {
  template: `
        <header class="app-header">
          <div class="logo">
        <h1>VueJS Miss Book</h1>
        </div>
        <nav>
               <router-link to="/" active-class="active-link" exact>Home</router-link> |
                <router-link to="/book">books</router-link> |
                <router-link to="/about">About</router-link>
            </nav>
        </header>
    `,
};
