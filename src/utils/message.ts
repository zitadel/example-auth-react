type ErrorCategory = 'signin-error' | 'auth-error';

type ErrorInput =
  | string
  | null
  | undefined
  | string[]
  | (string | null | undefined)[];

export function getMessage(
  errorInput: ErrorInput,
  category: ErrorCategory,
): { heading: string; message: string } {
  const errorCode = Array.isArray(errorInput)
    ? (errorInput[0]?.toString() ?? null)
    : (errorInput?.toString() ?? null);
  const normalizedErrorCode = errorCode ? errorCode.toLowerCase() : 'default';

  if (category === 'signin-error') {
    switch (normalizedErrorCode) {
      case 'signin':
      case 'oauthsignin':
      case 'oauthcallback':
      case 'oauthcreateaccount':
      case 'emailcreateaccount':
      case 'callback':
        return {
          heading: 'Sign-in Failed',
          message: 'Try signing in with a different account.',
        };
      case 'oauthaccountnotlinked':
        return {
          heading: 'Account Not Linked',
          message:
            'To confirm your identity, sign in with the same account you used ' +
            'originally.',
        };
      case 'emailsignin':
        return {
          heading: 'Email Not Sent',
          message: 'The email could not be sent.',
        };
      case 'credentialssignin':
        return {
          heading: 'Sign-in Failed',
          message:
            'Sign in failed. Check the details you provided are correct.',
        };
      case 'sessionrequired':
        return {
          heading: 'Sign-in Required',
          message: 'Please sign in to access this page.',
        };
      default:
        return {
          heading: 'Unable to Sign in',
          message:
            'An unexpected error occurred during sign-in. Please try again.',
        };
    }
  } else if (category === 'auth-error') {
    switch (normalizedErrorCode) {
      case 'configuration':
        return {
          heading: 'Server Error',
          message:
            'There is a problem with the server configuration. Check the ' +
            'server logs for more information.',
        };
      case 'accessdenied':
        return {
          heading: 'Access Denied',
          message: 'You do not have permission to sign in.',
        };
      case 'verification':
        return {
          heading: 'Sign-in Link Invalid',
          message:
            'The sign-in link is no longer valid. It may have been used ' +
            'already or it may have expired.',
        };
      default:
        return {
          heading: 'Authentication Error',
          message:
            'An unexpected error occurred during authentication. Please try ' +
            'again.',
        };
    }
  }

  return {
    heading: 'Unknown Error',
    message: 'An unknown error occurred.',
  };
}
