import { useParams } from "react-router-dom";

function User() {
    let { id } = useParams();

    return (
      <div>
        <h1>User!</h1>
        <p>Props: {id}</p>
      </div>
    );
  }
  
  export default User;
  