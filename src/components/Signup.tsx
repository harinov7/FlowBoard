export default function Signup() {

    return (
        <div className="flex justify-center md:pt-10">
            <div className="px-0 py-10 flex flex-col gap-2 w-[clamp(20px,80vw,320px)] md:shadow-lg md:px-10">
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="text-3xl font-bold">Flow Board</h1>
                    <h2>Signup</h2>
                </div>
                <form className="flex flex-col gap-2">
                    <span>
                        <label htmlFor="emailInput">
                            Email
                            <span className="text-red-500">*</span>
                        </label>
                    </span>
                    <input type="email"
                        id="emailInput"
                        className="px-2 py-1 border border-black/30 rounded-xs"
                        placeholder="Enter Your Email" />
                    <button className="bg-sky-400 text-white font-bold mt-2 py-2">Continue</button>
                </form>
                <div className="flex flex-col items-center gap-3">
                    <h2>Or continue with:</h2>
                    <button className="py-2 font-semibold border border-black/30 w-full">Google</button>
                    <button className="py-2 font-semibold border border-black/30 w-full">Microsoft</button>
                    <button className="py-2 font-semibold border border-black/30 w-full">VK</button>
                </div>
                <a href="" className="mt-2 underline text-blue-500 text-center font-light">Already have an account?</a>
            </div>
        </div>
    )
}