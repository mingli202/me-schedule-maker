const Msg = () => {
  return (
    <div className="w-full h-full z-50 absolute top-0 left-0 bg-white flex items-center justify-center shadow-black shadow-inner flex-col">
      <p>The website has been deprecated, please use the new site.</p>
      <a
        href="https://dream-builder-hazel.vercel.app/"
        className="text-blue-700 hover:underline"
      >
        Go to new site
      </a>
    </div>
  );
};

export default Msg;
