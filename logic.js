class Landing{
    dataBase={}
    saveMethod(){
        if(localStorage.getItem('userData')!= null){
            this.getData()
        }
        let name=examplename.value;
        let email=exampleemail.value;
        let password=examplepassword.value;
        if(name !=='' && email !=='' && password !==''){
            console.log(this.dataBase)
            if(email in this.dataBase){
                alert("email already exist")
            }
            else{
                this.dataBase[email]={
                    name:name,
                    email:email,
                    password:password,
                }
                this.saveData();
                alert("sucess")
                window.location='index.html'
            }
        }
        else{
            alert("Please enter valid values");
        }
    }
    logIn(){
        let email=exampleemail.value;
        let password=examplepassword.value;
        this.getData();
        if(email ==''|| password==''){
            alert("Please enter values")
        }
        else
        {
            if(this.dataBase[email]){
                
                if(this.dataBase[email].password==password){
                    localStorage.setItem('name1',this.dataBase[email].name);
                    window.location='home.html';
                }
                else{
                    alert("Incorrect Password")
                }

            }
            else{
                alert(`${email} not found`)
            }
        }
    }
    logOut(){
        window.location='index.html';
        localStorage.removeItem("name1");
    }
    clearField(){
        exampleemail.value="";
        examplepassword.value="";
        examplename.value="";
       
    }
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem('userData'))
    }
    saveData(){
        localStorage.setItem('userData',JSON.stringify(this.dataBase))
    }
}
const obj=new Landing()