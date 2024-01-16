
function Error({children}) {
  return (
    <div className="bg-red-600 shadow-md rounded-lg py-5 px-5 mx-8 my-4 text-white font-bold  text-center uppercase">
      <p>{children}</p>
    </div>
  );
}

export default Error;
