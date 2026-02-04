

const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => { },
    logout: () => { }
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState(null);

    function authenticate(token) {
        setAuthToken(token);
        useEffect(() => {
            AsyncStorage.setItem('token', token);
        }, [token]);
    }

    function logout() {
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;