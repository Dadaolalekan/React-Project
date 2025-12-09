function ProfileCard({ name = "Your name", email, image, age }) {
    return (
        <div>
            <img style={styles.imgStyles} src={image} alt="" />
            <p>Name: {name}</p>
            <p>Email:{age}</p>
            <p>Age:{age}</p>
        </div>
    )
}

const styles = {

    imgStyles: {
    width: "300px",
    borderRadius: "10px"
    },
}



export default ProfileCard