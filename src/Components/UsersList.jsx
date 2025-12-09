import ProfileCard from "./ProfileCard"



function UsersList() {
    return (
        <div style={styles.profStyle}>
            <ProfileCard name="Joseph" email="yes@gmail.com" age={10} image="https://www.bing.com/th/id/OIP.vftG2C6khk1eu-fR-15pIgHaLH?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" />

            <ProfileCard name="Joseph" email="yes@gmail.com" age={10} image="https://www.bing.com/th/id/OIP.i4YH9hPP_yM3nXMIQDDkQwHaLL?w=161&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" />

            <ProfileCard name="Joseph" email="yes@gmail.com" age={10} image="https://www.bing.com/th/id/OIP._tD3i2txZ1RXLIhjno3RlQHaLH?w=161&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" />

            <ProfileCard name="Joseph" email="yes@gmail.com" age={10} image="https://www.bing.com/th/id/OIP.LtLk-vQkLJGggWTN032pPwHaLH?w=161&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" />

        </div>
    )
}


const styles ={
    profStyle:{
        display: "flex",
        gap: "40px",
        padding: "4rem 2rem",
        overflow: "hidden"
    },

   
}
export default UsersList