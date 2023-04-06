class User{
    constructor(username,emailaddress,password)
    {
        this.username=username;
        this.emailaddress=emailaddress;
        this.password=password;
    }
    getUsername(){
      return this.username;
    }
    getEmailaddress()
    {
        return this.emailaddress;
    }
    getPassword()
    {
        return this.password;
    }
    setUsername(username)
   {
    this.username=username;
   }
    setEmailaddress(emailaddress)
    {
        this.emailaddress=emailaddress;
    }
    setPassword(password)
    {
        this.password=password;
    }
}
    const p1=new User("Jagadeesh","jagadeesh@gmail.com","Jaga123*");
    console.log(p1);
