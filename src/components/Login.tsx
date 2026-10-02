import { useNavigate, Link } from "react-router-dom";

const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172a3a]";

const providerButton =
    `w-full rounded-md border border-[#b9c6cf] bg-white px-3 py-2.5 text-sm font-medium text-[#172a3a] hover:bg-[#f3f6f8] ${focus}`;

const stageColors = ["bg-[#92978d]", "bg-[#b18b4a]", "bg-[#66816c]", "bg-[#426b50]"];

export default function Login() {

    const navigate = useNavigate()
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center bg-[#e9eef1] px-5 py-10 font-['Schibsted_Grotesk',system-ui,sans-serif] text-[#172a3a]">
            <a href="#" className={`mb-6 text-[17px] font-bold tracking-tight ${focus}`}>
                FlowBoard
            </a>

            <div className="w-full max-w-[400px] overflow-hidden rounded-xl border border-[#c9d3da] bg-white">
                <div className="flex h-2 gap-0.5" aria-hidden="true">
                    {stageColors.map((color) => (
                        <span key={color} className={`flex-1 ${color}`} />
                    ))}
                </div>

                <div className="p-7 sm:p-8">
                    <h1 className="text-2xl font-semibold leading-tight tracking-[-0.02em]">
                        Log in
                    </h1>
                    <p className="mt-1.5 text-[15px] text-[#5b6b78]">
                        Use your email or another account.
                    </p>

                    <form className="mt-4">
                        <label htmlFor="emailInput" className="text-sm font-medium">
                            Email
                        </label>
                        <span className='text-red-500'>*</span>
                        <input
                            type="email"
                            id="emailInput"
                            autoComplete="email"
                            placeholder="you@example.com"
                            className="mt-1.5 h-10 w-full rounded-md border border-[#b9c6cf] bg-white px-3 text-[15px] placeholder:text-[#8a99a5] focus:border-[#426b50] focus:outline focus:outline-1 focus:outline-[#426b50]"
                        />

                        <label htmlFor="emailInput" className="text-sm font-medium">
                            Password
                        </label>
                        <span className='text-red-500'>*</span>
                        <input
                            type="password"
                            id="passwordInput"
                            placeholder="Abcd123#"
                            className="mt-1.5 h-10 w-full rounded-md border border-[#b9c6cf] bg-white px-3 text-[15px] placeholder:text-[#8a99a5] focus:border-[#426b50] focus:outline focus:outline-1 focus:outline-[#426b50]"
                        />
                        <button
                            type="submit"
                            onClick={() => navigate('/Dashboard')}
                            className={`mt-4 w-full rounded-md bg-[#426b50] px-3 py-2.5 text-sm font-medium text-white hover:bg-[#365a43] ${focus}`}
                        >
                            Continue
                        </button>
                    </form>

                    <div className="my-6 flex items-center gap-3 text-xs text-[#5b6b78]">
                        <span className="h-px flex-1 bg-[#dde4e9]" />
                        or
                        <span className="h-px flex-1 bg-[#dde4e9]" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <button type="button" className={providerButton}>
                            Continue with Google
                        </button>
                        <button type="button" className={providerButton}>
                            Continue with Microsoft
                        </button>
                        <button type="button" className={providerButton}>
                            Continue with VK
                        </button>
                    </div>
                </div>
            </div>

            <p className="mt-6 text-sm text-[#5b6b78]">
                New to FlowBoard?{" "}
                <Link
                    to="/signup"
                    className={`font-medium text-[#172a3a] underline underline-offset-4 hover:text-[#426b50] ${focus}`}
                >
                    Create an account
                </Link>
            </p>
        </div>
    );
}
