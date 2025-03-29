import { useState } from "react";
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <>
      <div className="border-[10px] border-black h-screen bg-gray-100 flex items-center justify-center">
        <div className=" flex flex-col justify-center items-center bg-white border-4 border-double  w-[40vw] h-[50vh]">
          <h1 className="text-3xl font-bold border mb-15">Login Page</h1>
          <form action="">
            <div className="flex flex-row  gap-[40px] mb-7 ">
              <label htmlFor="email">Email</label>
              <input
                className="border"
                type="text"
                name="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-row  gap-[15px] mb-7">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={Password}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Your Password"
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
