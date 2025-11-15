import SignOutButton from '@/components/SignOutButton';

type HeaderProps = {
  isAuthenticated: boolean;
};

export default function HeaderComponent({ isAuthenticated }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white" data-is-authenticated>
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/app-logo.svg"
              alt="App Icon"
              width={40}
              height={40}
              className="h-8 w-8"
            />
            <h1 className="text-xl font-semibold text-gray-900">
              Demo Application
            </h1>
          </div>
          {isAuthenticated && <SignOutButton />}
        </div>
      </div>
    </header>
  );
}
