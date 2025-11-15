import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { withAuthenticationRequired } from 'react-oidc-context';
import IndexView from '@/views/IndexView';
import ProfileView from '@/views/ProfileView';
import CallbackView from '@/views/CallbackView';
import AuthErrorView from '@/views/AuthErrorView';
import LogoutCallbackView from '@/views/LogoutCallbackView';
import NotFoundView from '@/views/NotFoundView.tsx';

const ProtectedProfile = withAuthenticationRequired(ProfileView);

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/profile" element={<ProtectedProfile />} />
        <Route path="/auth/callback" element={<CallbackView />} />
        <Route path="/auth/error" element={<AuthErrorView />} />
        <Route path="/auth/logout/callback" element={<LogoutCallbackView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}
