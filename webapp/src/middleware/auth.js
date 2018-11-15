export default function({ route, store, redirect }) {
  if (!store.state.user.isAuthenticated) {
    return redirect(`/login?redirect=${route.path}`);
  }
}
