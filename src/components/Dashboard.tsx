import { useNavigate, Link } from "react-router-dom";
import type { Board } from "./project";

export default function Dashboard({boards}: {boards: Board[]}) {

    const navigate = useNavigate()

    return (
        <div className="min-h-dvh bg-[#f8f8f6] text-[#252823]">
            <header className="sticky top-0 border-b border-[#e8e9e5] bg-white z-99">
                <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
                    <Link to="/dashboard" className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#426b50] text-sm font-bold text-white">
                            F
                        </span>
                        <span className="text-base font-semibold tracking-tight">
                            FlowBoard
                        </span>
                    </Link>

                    <div className="flex items-center gap-3">
                        <button className="rounded-md border border-[#dedfd9] px-3 py-2 text-sm font-medium text-[#454941] hover:bg-[#f8f8f6]">
                            + Buat board
                        </button>
                        <button
                            aria-label="Profil pengguna"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7eee8] text-xs font-semibold text-[#426b50]"
                        >
                            FA
                        </button>
                    </div>
                </nav>
            </header>

            <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
                <div className="mb-8">
                    <p className="mb-2 text-sm text-[#777b73]">Workspace</p>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Fadhil&apos;s Workspace
                            </h1>
                            <p className="mt-1 text-sm text-[#777b73]">
                                Semua board proyekmu, dalam satu tempat.
                            </p>
                        </div>
                        <button className="rounded-md bg-[#426b50] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#365940]">
                            + Buat board
                        </button>
                    </div>
                </div>

                <div className="mb-4 flex items-center justify-between border-b border-[#e5e6e1] pb-3">
                    <h2 className="text-sm font-semibold">Board kamu</h2>
                    <span className="text-sm text-[#777b73]">
                        {boards.length} board
                    </span>
                </div>

                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {boards.map((board) => (
                        <button
                            key={board.id}
                            type="button"
                            onClick={() => navigate(`/dashboard/${board.id}`)}
                            className="group overflow-hidden rounded-lg border border-[#e4e5df] bg-white text-left transition hover:border-[#c8cec6] hover:shadow-sm"
                        >
                            <div className={`h-24 ${board.backgroundDashboard} p-4`}>
                                <div className="flex h-full items-end gap-1.5 opacity-80">
                                    <span className={`h-8 w-1/4 rounded-t ${board.accent}`} />
                                    <span className={`h-12 w-1/4 rounded-t ${board.accent} opacity-75`} />
                                    <span className={`h-6 w-1/4 rounded-t ${board.accent} opacity-55`} />
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="font-semibold text-[#292c27] group-hover:text-[#426b50]">
                                    {board.titleDashboard}
                                </h3>
                                <p className="mt-1 min-h-10 text-sm leading-5 text-[#777b73]">
                                    {board.descriptionDashboard}
                                </p>

                                <div className="mt-4 flex items-center justify-between border-t border-[#f0f0ed] pt-3">
                                    <span className="text-xs text-[#858980]">
                                        {board.updated}
                                    </span>
                                    <span className="flex -space-x-1.5">
                                        {board.membersDashboard.map((member, index) => (
                                            <span
                                                key={`${board.titleDashboard}-${member}`}
                                                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[9px] font-semibold ${index % 2 === 0
                                                        ? "bg-[#e7eee8] text-[#426b50]"
                                                        : "bg-[#eee9e2] text-[#78684f]"
                                                    }`}
                                            >
                                                {member}
                                            </span>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </button>
                    ))}
                </section>

                <button
                    type="button"
                    className="mt-4 flex min-h-28 w-full items-center justify-center rounded-lg border border-dashed border-[#d8dad3] text-sm font-medium text-[#777b73] hover:border-[#aeb8ae] hover:bg-white"
                >
                    + Buat board baru
                </button>
            </main>
        </div>
    );
}