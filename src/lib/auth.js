import netlifyIdentity from "netlify-identity-widget";

export function init(callback) {
  netlifyIdentity.on("init", (user) => {
    callback(user);
  });
  netlifyIdentity.init();
}

export function login(callback) {
  netlifyIdentity.open();
  netlifyIdentity.on("login", (user) => {
    callback(user);
  });
}
