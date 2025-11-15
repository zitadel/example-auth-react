import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useAuth } from 'react-oidc-context';

export default function ProfileView() {
  const auth = useAuth();

  if (auth.isLoading) {
    return (
      <div className="flex min-h-screen flex-col bg-gray-50">
        <Header isAuthenticated={false} />
        <main className="flex-1 px-6 py-12">
          <div className="flex min-h-screen items-center justify-center">
            <p>Loading your session…</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header isAuthenticated={true} />
      <main className="flex-1 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 rounded-lg border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-green-900">
                  Authentication Successful!
                </h2>
                <p className="mt-1 text-green-700">
                  You have successfully logged into the application.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Session Information
            </h2>
            <p className="mb-6 text-gray-600">
              Below is the authentication data stored in your session:
            </p>
            <div className="overflow-x-auto rounded-lg bg-gray-900 p-6">
              <pre className="font-mono text-sm leading-relaxed text-green-400">
                {JSON.stringify(auth.user, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
