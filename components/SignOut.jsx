import { auth } from "../firebase";

const SignOut = () => {
  return (
    auth.currentUser && (
      <div>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    )
  );
};
export default SignOut;
