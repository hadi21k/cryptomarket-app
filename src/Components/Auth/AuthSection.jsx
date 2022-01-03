import { auth } from "../../Firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { setUser, signOutEmail } from "../../features/usersReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FiLogIn } from "react-icons/fi";
import ProfileMenu from "./ProfileMenu";

const AuthSection = () => {
  const isSignedIn = useSelector((state) => state.user.isSignedIn);
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signOutFromGoogle = async () => {
    await signOut(auth);
    dispatch(signOutEmail());
    localStorage.setItem("isSignedIn", false);
  };
  useEffect(() => {
    const subscriptions = onAuthStateChanged(auth, (result) => {
      const user = {
        email: result.email,
        photoURL: result.photoURL,
        emailVerified: result.emailVerified,
        displayName: result.displayName,
      };
      localStorage.getItem("isSignedIn") === "true" && dispatch(setUser(user));
    });
    return () => subscriptions;
  }, []);
  return (
    <div>
      <div>
        {isSignedIn ? (
          <ProfileMenu user={user} signOutFromGoogle={signOutFromGoogle} />
        ) : (
          <FiLogIn
            onClick={() => navigate("/signup")}
            className="cursor-pointer w-7 h-7"
          />
        )}
      </div>
    </div>
  );
};

export default AuthSection;
