// const websiteRedesign = {
//     workspace: "Fadhil's Workspace",
//     title: "Website Redesign",
//     description: "Rencana kerja untuk penyegaran tampilan dan pengalaman website.",
//     members: [
//         { initials: "FA", style: "bg-[#e7eee8] text-[#426b50]" },
//         { initials: "AN", style: "bg-[#eee9e2] text-[#78684f]" },
//         { initials: "RA", style: "bg-[#e9e5ed] text-[#6e5c7b]" },
//     ],
//     columns: [
//         {
//             title: "To do",
//             dotColor: "bg-[#92978d]",
//             cards: [
//                 {
//                     title: "Riset kebutuhan pengguna",
//                     description: "Kumpulkan masukan untuk halaman utama.",
//                     label: "Research",
//                     labelStyle: "bg-[#e7eee8] text-[#426b50]",
//                     dueDate: "4 Okt",
//                     assignee: {
//                         initials: "FA",
//                         style: "bg-[#e7eee8] text-[#426b50]",
//                     },
//                 },
//                 {
//                     title: "Susun struktur halaman",
//                     label: "Planning",
//                     labelStyle: "bg-[#eee9e2] text-[#78684f]",
//                     dueDate: "6 Okt",
//                     assignee: {
//                         initials: "AN",
//                         style: "bg-[#eee9e2] text-[#78684f]",
//                     },
//                 },
//             ],
//         },
//         {
//             title: "In progress",
//             dotColor: "bg-[#b18b4a]",
//             cards: [
//                 {
//                     title: "Desain komponen dashboard",
//                     description: "Kartu, tombol, dan navigasi utama.",
//                     label: "Design",
//                     labelStyle: "bg-[#e9e5ed] text-[#6e5c7b]",
//                     dueDate: "8 Okt",
//                     assignee: {
//                         initials: "FA",
//                         style: "bg-[#e7eee8] text-[#426b50]",
//                     },
//                 },
//             ],
//         },
//         {
//             title: "Review",
//             dotColor: "bg-[#66816c]",
//             cards: [
//                 {
//                     title: "Tinjau prototipe halaman",
//                     description: "Periksa alur dan konsistensi tampilan.",
//                     label: "Review",
//                     labelStyle: "bg-[#e5ebee] text-[#536b7b]",
//                     dueDate: "10 Okt",
//                     assignee: {
//                         initials: "AN",
//                         style: "bg-[#eee9e2] text-[#78684f]",
//                     },
//                 },
//             ],
//         },
//         {
//             title: "Done",
//             dotColor: "bg-[#426b50]",
//             cards: [
//                 {
//                     title: "Tentukan tujuan proyek",
//                     label: "Planning",
//                     labelStyle: "bg-[#e7eee8] text-[#426b50]",
//                     completed: true,
//                     assignee: {
//                         initials: "FA",
//                         style: "bg-[#e7eee8] text-[#426b50]",
//                     },
//                 },
//             ],
//         },
//     ],
// };

interface Assignee {
    initials: string,
    style: string
}

interface Cards {
    title: string, 
    description: string,
    label: string, 
    labelStyle: string, 
    dueDate: string,
    completed?: boolean, 
    assignee: Assignee
}

interface Column {
    title: string, 
    dotColor: string, 
    cards: Cards[]
}

interface Project {
    title: string, 
    description: string, 
    workspace: string, 
    members: Assignee[], 
    columns: Column[]
}

export default function ProjectBoard(project: Project) {
    return (
        <div className="min-h-dvh bg-[#f8f8f6] text-[#252823]">
            <header className="sticky top-0 z-50 border-b border-[#e8e9e5] bg-white">
                <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
                    <div className="flex items-center gap-3">
                        <a href="#" className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#426b50] text-sm font-bold text-white">
                                F
                            </span>
                            <span className="text-base font-semibold tracking-tight">
                                FlowBoard
                            </span>
                        </a>
                        <span className="text-[#c5c7c1]">/</span>
                        <span className="text-sm text-[#777b73]">{project.title}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="rounded-md border border-[#dedfd9] px-3 py-2 text-sm font-medium text-[#454941]">
                            Bagikan
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

            <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
                <div className="mb-7">
                    <p className="mb-2 text-sm text-[#777b73]">{project.workspace}</p>

                    <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {project.title}
                            </h1>
                            <p className="mt-1 text-sm text-[#777b73]">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {project.members.map((member) => (
                                    <span
                                        key={member.initials}
                                        className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f8f8f6] text-[10px] font-semibold ${member.style}`}
                                    >
                                        {member.initials}
                                    </span>
                                ))}
                            </div>
                            <button className="rounded-md border border-[#dedfd9] px-3 py-2 text-sm font-medium text-[#454941]">
                                + Undang
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#e5e6e1] pb-4">
                    <div className="flex items-center gap-2">
                        <span className="rounded-md bg-[#e7eee8] px-3 py-1.5 text-sm font-medium text-[#426b50]">
                            Board
                        </span>
                        <span className="px-3 py-1.5 text-sm text-[#777b73]">Tabel</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="rounded-md border border-[#dedfd9] bg-white px-3 py-2 text-sm text-[#454941]">
                            Filter
                        </button>
                        <button className="rounded-md border border-[#dedfd9] bg-white px-3 py-2 text-sm text-[#454941]">
                            Urutkan
                        </button>
                        <button className="rounded-md bg-[#426b50] px-3 py-2 text-sm font-medium text-white">
                            + Tambah kartu
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto pb-4">
                    <div className="grid min-w-[940px] grid-cols-4 items-start gap-4">
                        {project.columns.map((column) => (
                            <section
                                key={column.title}
                                className="rounded-lg border border-[#e5e6e1] bg-[#f0f1ed] p-3"
                            >
                                <div className="mb-3 flex items-center justify-between px-1">
                                    <div className="flex items-center gap-2">
                                        <span className={`h-2 w-2 rounded-full ${column.dotColor}`} />
                                        <h2 className="text-sm font-semibold">{column.title}</h2>
                                        <span className="text-xs text-[#858980]">
                                            {column.cards.length}
                                        </span>
                                    </div>
                                    <button className="px-1 text-lg leading-none text-[#858980]">
                                        ···
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {column.cards.map((card) => (
                                        <article
                                            key={card.title}
                                            className="rounded-md border border-[#e5e6e1] bg-white p-3.5 shadow-sm"
                                        >
                                            <span className={`rounded px-2 py-1 text-[11px] font-medium ${card.labelStyle}`}>
                                                {card.label}
                                            </span>

                                            <h3 className="mt-3 text-sm font-medium">
                                                {card.title}
                                            </h3>

                                            {card.description && (
                                                <p className="mt-1.5 text-xs leading-5 text-[#777b73]">
                                                    {card.description}
                                                </p>
                                            )}

                                            <div className="mt-4 flex items-center justify-between text-xs text-[#858980]">
                                                <span>
                                                    {card.dueDate
                                                        ? `◷ ${card.dueDate}`
                                                        : card.completed
                                                            ? "✓ Selesai"
                                                            : ""}
                                                </span>

                                                {card.assignee && (
                                                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-semibold ${card.assignee.style}`}>
                                                        {card.assignee.initials}
                                                    </span>
                                                )}
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                <button className="mt-3 w-full rounded-md px-2 py-2 text-left text-sm text-[#777b73]">
                                    + Tambah kartu
                                </button>
                            </section>
                        ))}

                        <button className="flex min-h-12 items-center justify-center rounded-lg border border-dashed border-[#d2d5cd] text-sm font-medium text-[#777b73]">
                            + Tambah list
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}