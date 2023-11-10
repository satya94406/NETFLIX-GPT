export const CheckValidData =(email,password,name)=>{
    const IsEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const IsPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  //  const Isname = /^[a-z,',-]+(\s)[a-z,',-]+$/i.test(name);

   // if(!Isname) return "Name is not valid" ;
    if(!IsEmailValid) return "Email IDd is not valid" ;
    if(!IsPasswordValid) return "Password is not valid" ;
    else return null ;
}