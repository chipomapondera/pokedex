fetchUsers() {
    // Where we're fetching data from
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
      // We get the API response and receive data in JSON format...
    const data = await response.json()
    
    this.setState({
      users: data,
      isLoading: false,
    })
      
      
      
      
      
      
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }


  