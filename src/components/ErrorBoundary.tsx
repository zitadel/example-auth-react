import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  showDetails?: boolean;
};

type State = {
  hasError: boolean;
  error: Error | null;
  errorInfo: string | null;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error Boundary caught an error:', error);
    console.error('Error Info:', info);
    if (this.props.showDetails) {
      console.log('Erroring instance:', info);
    }
    this.setState({ error, errorInfo: info.componentStack ?? null });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-1 flex-col">
          <main className="grid flex-1 place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>

              <p className="text-base font-semibold text-red-600">Error</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                Something went wrong
              </h1>
              <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                An unexpected error occurred. Please try reloading the page.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  type="button"
                  onClick={this.handleReload}
                >
                  Reload page
                </button>
                <Link
                  to="/"
                  className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-xs hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                >
                  Go back home
                </Link>
              </div>
            </div>
          </main>
        </div>
      );
    }

    return <div className="flex flex-1 flex-col">{this.props.children}</div>;
  }
}
