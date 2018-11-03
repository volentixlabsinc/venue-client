export default function({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.user.isAuthenticated) {
    return redirect("/login");
  }
}
