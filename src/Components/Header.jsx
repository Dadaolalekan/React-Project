import Button from "./Button"



function Header({email}){
    return (
        <div style={style.headStyles}>
            <h2>Logo</h2>
            <a href="">Home</a> 
            <a href="">Users</a>
            <a href="">About</a>
            <a href="">Contact Us</a>
           
            <Button text="Sign Up"/>
        </div>
    )
}

const style= {
    headStyles:{
        display:"flex",
        backgroundColor:"red"
    }

}

export default Header