interface Assignee {
    initials: string,
    style: string
}

interface Card {
    id: string,
    title: string,
    description?: string,
    label: string,
    labelStyle: string,
    dueDate?: string,
    completed?: boolean,
    assignee?: Assignee
}

interface Column {
    title: string,
    dotColor: string,
    cards: Card[]
}

interface Project {
    workspace: string,
    title: string,
    description: string,
    members: Assignee[],
    columns: Column[]
}

const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172a3a]";

const outlineButton =
    `rounded-md border border-[#b9c6cf] bg-white px-3 py-1.5 text-sm font-medium text-[#172a3a] hover:bg-[#f3f6f8] ${focus}`;

export default function Kanban({ project }: { project: Project }) {
    const allCards = project.columns.flatMap((column) => column.cards);
    const doneCount = allCards.filter((card) => card.completed).length;
    const me = project.members[0];

    return (
        <div className="min-h-dvh bg-[#e9eef1] font-['Schibsted_Grotesk',system-ui,sans-serif] text-[#172a3a]">
            <header className="border-b border-[#c9d3da] bg-[#f6f8f9]">
                <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
                    <div className="flex items-baseline gap-3">
                        <a href="#" className={`text-[17px] font-bold tracking-tight ${focus}`}>
                            FlowBoard
                        </a>
                        <span className="text-sm text-[#5b6b78]">{project.workspace}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <button type="button" className={outlineButton}>
                            Bagikan
                        </button>
                        {me && (
                            <button
                                type="button"
                                aria-label="Profil pengguna"
                                className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold ${me.style} ${focus}`}
                            >
                                {me.initials}
                            </button>
                        )}
                    </div>
                </nav>
            </header>

            <main className="mx-auto max-w-6xl px-5 pb-10 pt-8 sm:px-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-xl">
                        <h1 className="text-3xl font-semibold leading-tight tracking-[-0.02em]">
                            {project.title}
                        </h1>
                        <p className="mt-1.5 text-[15px] leading-6 text-[#5b6b78]">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {project.members.map((member) => (
                                <span
                                    key={member.initials}
                                    className={`flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-[#e9eef1] text-[11px] font-semibold ${member.style}`}
                                >
                                    {member.initials}
                                </span>
                            ))}
                        </div>
                        <button type="button" className={outlineButton}>
                            Undang anggota
                        </button>
                    </div>
                </div>

                <div className="mt-7">
                    <div
                        className="flex h-2.5 gap-0.5 overflow-hidden rounded-full"
                        role="img"
                        aria-label={`${doneCount} dari ${allCards.length} kartu selesai`}
                    >
                        {project.columns.map((column) => (
                            <span
                                key={column.title}
                                title={`${column.title}: ${column.cards.length} kartu`}
                                className={`${column.dotColor}`}
                                style={{ flexGrow: Math.max(column.cards.length, 0.25), flexBasis: 0 }}
                            />
                        ))}
                    </div>
                    <p className="mt-2 text-sm tabular-nums text-[#5b6b78]">
                        {doneCount} dari {allCards.length} kartu selesai
                    </p>
                </div>

                <div className="mb-5 mt-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#c9d3da]">
                    <div role="tablist" className="flex items-center gap-5">
                        <button
                            type="button"
                            role="tab"
                            aria-selected="true"
                            className={`-mb-px border-b-2 border-[#426b50] pb-2.5 text-sm font-semibold ${focus}`}
                        >
                            Board
                        </button>
                        <button
                            type="button"
                            role="tab"
                            aria-selected="false"
                            className={`-mb-px border-b-2 border-transparent pb-2.5 text-sm text-[#5b6b78] hover:text-[#172a3a] ${focus}`}
                        >
                            Tabel
                        </button>
                    </div>

                    <div className="flex items-center gap-2 pb-2.5">
                        <button type="button" className={outlineButton}>
                            Filter
                        </button>
                        <button type="button" className={outlineButton}>
                            Urutkan
                        </button>
                        <button
                            type="button"
                            className={`rounded-md bg-[#426b50] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#365a43] ${focus}`}
                        >
                            Tambah kartu
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto pb-4">
                    <div className="flex min-w-max items-start gap-4">
                        {project.columns.map((column) => (
                            <section
                                key={column.title}
                                aria-label={column.title}
                                className="w-[292px] shrink-0 rounded-xl bg-[#dbe3e8] p-2.5"
                            >
                                <div className="mb-2.5 flex items-center justify-between px-1.5 pt-1">
                                    <div className="flex items-center gap-2">
                                        <span className={`h-2.5 w-2.5 rounded-full ${column.dotColor}`} />
                                        <h2 className="text-sm font-semibold">{column.title}</h2>
                                        <span className="text-sm tabular-nums text-[#5b6b78]">
                                            {column.cards.length}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        aria-label={`Opsi kolom ${column.title}`}
                                        className={`rounded px-1.5 text-lg leading-none text-[#5b6b78] hover:bg-[#cfd9e0] ${focus}`}
                                    >
                                        ···
                                    </button>
                                </div>

                                <div className="space-y-2">
                                    {column.cards.map((card) => (
                                        <article
                                            key={card.id}
                                            className="rounded-lg border border-[#c9d3da] bg-white p-3.5 hover:border-[#93a5b2]"
                                        >
                                            <span className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${card.labelStyle}`}>
                                                {card.label}
                                            </span>

                                            <h3 className="mt-2.5 text-[15px] font-medium leading-snug">
                                                {card.title}
                                            </h3>

                                            {card.description && (
                                                <p className="mt-1 text-[13px] leading-[1.45] text-[#5b6b78]">
                                                    {card.description}
                                                </p>
                                            )}

                                            <div className="mt-3.5 flex min-h-6 items-center justify-between text-xs text-[#5b6b78]">
                                                {card.completed ? (
                                                    <span className="flex items-center gap-1.5 font-medium text-[#426b50]">
                                                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                            <path d="M3 8.5l3.2 3L13 4.5" />
                                                        </svg>
                                                        Selesai
                                                    </span>
                                                ) : (
                                                    <span className="tabular-nums">
                                                        {card.dueDate ? `Tenggat ${card.dueDate}` : ""}
                                                    </span>
                                                )}

                                                {card.assignee && (
                                                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold ${card.assignee.style}`}>
                                                        {card.assignee.initials}
                                                    </span>
                                                )}
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    className={`mt-2 w-full rounded-md px-2.5 py-2 text-left text-sm text-[#5b6b78] hover:bg-[#cfd9e0] hover:text-[#172a3a] ${focus}`}
                                >
                                    + Tambah kartu
                                </button>
                            </section>
                        ))}

                        <button
                            type="button"
                            className={`w-[292px] shrink-0 rounded-xl border-2 border-dashed border-[#b0bfc9] py-3 text-sm font-medium text-[#5b6b78] hover:border-[#8fa1ae] hover:text-[#172a3a] ${focus}`}
                        >
                            + Tambah list
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
