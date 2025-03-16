import ButtonGradient from "./assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-slate-200 text-red-700 text-center p-4">
        Hello world!
      </h1>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"></div>

      <button className="mt-10" href="#login">
        Something
      </button>

      <ButtonGradient />
    </>
  );
};

export default App;
