import { AuthProvider, type AuthProviderProps } from 'react-oidc-context';
import { ZITADEL_SCOPES } from '@/config/scopes';
import ErrorBoundary from '@/components/ErrorBoundary';
import AppRouter from '@/router';

const cfg: AuthProviderProps = {
  authority: import.meta.env.VITE_ZITADEL_DOMAIN,
  client_id: import.meta.env.VITE_ZITADEL_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_ZITADEL_CALLBACK_URL,
  post_logout_redirect_uri: import.meta.env.VITE_POST_LOGOUT_URL,
  scope: ZITADEL_SCOPES,
  loadUserInfo: true,
  onSigninCallback: () => {
    console.log('onSigninCallback fired');
    window.history.replaceState(
      {},
      document.title,
      window.location.origin + '/',
    );
    window.location.assign(import.meta.env.VITE_POST_LOGIN_URL || '/profile');
  },
};

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider {...cfg}>
        <AppRouter />
      </AuthProvider>
    </ErrorBoundary>
  );
}
