```JS
 const loginCheck = useCallback((path, component) => {
    if (!user) {
      return <Redirect to={path} />;
    }
    return { component };
  }, [user]);
```
```JS
<Route exact path="/search" render={() => loginCheck('/login', <Search />)} />
```