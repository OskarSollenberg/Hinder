import SignUpForm from "../components/SignUpForm";
import Camera from "../components/Camera";

export default function SignUp() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-gradient-to-r from-indigo-300 to-purple-500">
        <div className=" flex flex-col justify-center">
          <Camera />
        </div>
        <div className=" flex flex-col justify-center">
          <SignUpForm />
        </div>
      </div>
    </>
  );
}
