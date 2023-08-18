import SignIn from "./SignIn";
// import SignUp from "./SignUp";

export default function LoginPage() {
  return (
    <>
      <section className="w-[100dvw] h-[100dvh] bg-white flex">
        <div className="basis-5/12 bg-white flex flex-col items-center justify-center box-border p-6">
          {/* Login form */}
          <div className="bg-c1 w-full h-full flex flex-col items-center rounded-lg">
            <nav className="flex gap-2 box-border p-2 w-full shrink-0">
              <p className="text-center basis-1/2">Login</p>
              <p className="text-center basis-1/2">Sign Up</p>
            </nav>

            <img
              src="/me-schedule-maker/jac-mock-schedule-maker-high-resolution-logo-black-on-transparent-background.png"
              className="w-28 mt-12"
            />

            {/* Sign In */}
            <SignIn />

            {/* Sign up */}
          </div>
        </div>

        <div className="basis-7/12 bg-c1 text-xl p-4">
          This version of the website is dropped. It will be remade using
          Next.js because of several reasons:
          <ul className="pl-4">
            <li className="list-disc">
              The website was first made without taking into account a
              authentication feature. Thus, the codebase is not optimized and
              hard to extend.
            </li>
            <li className="list-disc">
              The website was made using Vite (instead of create-react-app).
              Vite is a built tool that mainly focuses on ES modules instead of
              Nodejs. It's not meant for Nodejs modules, meaning I can't use the
              mysql2 module to get user data.
            </li>
            <li className="list-disc">
              I feel that Nextjs will be easier to work with since it's a
              full-stack framework.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
