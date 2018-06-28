const secureUrls = ["/onboarding/bitcointalk", "/profile"];

export default function({ route, store, redirect }) {
  if (secureUrls.includes(route.path) && !store.state.user.isAuthenticated) {
    return redirect("/");
  } else {
    return route;
  }
}
