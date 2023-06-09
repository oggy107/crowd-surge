import { loader } from "../assets";

const Loader = () => {
    return (
        <div className="fixed top-0 inset-0 z-10 right-0 bg-black bg-opacity-[0.7] w-full h-screen flex flex-col items-center justify-center">
            <img
                src={loader}
                alt="loader"
                className="w-[100px] h-[100px] object-contain"
            />
            <p className="text-white font-epilogue mt-[20px] font-bold text-[20px] text-center">
                Transaction in progress
                <br />
                Please wait
            </p>
        </div>
    );
};

export default Loader;
