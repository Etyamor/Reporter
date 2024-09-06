const firebaseAuthErrorMessages = (errorCode) => {
    const errorMessages = {
        'auth/email-already-in-use': 'This email is already in use',
        'auth/invalid-credential': 'Invalid credentials',
        'auth/invalid-email': 'The email address is not valid',
        'auth/operation-not-allowed': 'Operation not allowed',
        'auth/weak-password': 'The password is too weak',
        'auth/user-disabled': 'The user account has been disabled',
        'auth/user-not-found': 'No user found with this email',
        'auth/wrong-password': 'Incorrect password',
        'auth/missing-password': 'Please enter a password',
        'auth/requires-recent-login': 'Login again to perform this action',
    };
    return errorMessages[errorCode] || 'An unknown error occurred';
};

export default firebaseAuthErrorMessages;