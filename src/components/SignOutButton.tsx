import { useAuth } from '@zitadel/react-auth';

export default function SignOutButton() {
  const auth = useAuth();

  const handleSignOut = async () => {
    await auth.signoutRedirect({
      post_logout_redirect_uri:
        import.meta.env.VITE_ZITADEL_POST_LOGOUT_URL ||
        window.location.origin + '/',
    });
  };

  return (
    <button
      type="button"
      className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-red-600"
      onClick={handleSignOut}
    >
      Sign out
    </button>
  );
}
