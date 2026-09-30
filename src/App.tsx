import Kanban from "./components/Kanban"

function App() {

  const websiteRedesign = {
    workspace: "Fadhil's Workspace",
    title: "Website Redesign",
    description: "Rencana kerja untuk penyegaran tampilan dan pengalaman website.",
    members: [
      { initials: "FA", style: "bg-[#e7eee8] text-[#426b50]" },
      { initials: "AN", style: "bg-[#eee9e2] text-[#78684f]" },
      { initials: "RA", style: "bg-[#e9e5ed] text-[#6e5c7b]" },
    ],
    columns: [
      {
        title: "To do",
        dotColor: "bg-[#92978d]",
        cards: [
          {
            id: "card-1",
            title: "Riset kebutuhan pengguna",
            description: "Kumpulkan masukan untuk halaman utama.",
            label: "Research",
            labelStyle: "bg-[#e7eee8] text-[#426b50]",
            dueDate: "4 Okt",
            assignee: {
              initials: "FA",
              style: "bg-[#e7eee8] text-[#426b50]",
            },
          },
          {
            id: "card-2",
            title: "Susun struktur halaman",
            label: "Planning",
            labelStyle: "bg-[#eee9e2] text-[#78684f]",
            dueDate: "6 Okt",
            assignee: {
              initials: "AN",
              style: "bg-[#eee9e2] text-[#78684f]",
            },
          },
        ],
      },
      {
        title: "In progress",
        dotColor: "bg-[#b18b4a]",
        cards: [
          {
            id: "card-3",
            title: "Desain komponen dashboard",
            description: "Kartu, tombol, dan navigasi utama.",
            label: "Design",
            labelStyle: "bg-[#e9e5ed] text-[#6e5c7b]",
            dueDate: "8 Okt",
            assignee: {
              initials: "FA",
              style: "bg-[#e7eee8] text-[#426b50]",
            },
          },
        ],
      },
      {
        title: "Review",
        dotColor: "bg-[#66816c]",
        cards: [
          {
            id: "card-4",
            title: "Tinjau prototipe halaman",
            description: "Periksa alur dan konsistensi tampilan.",
            label: "Review",
            labelStyle: "bg-[#e5ebee] text-[#536b7b]",
            dueDate: "10 Okt",
            assignee: {
              initials: "AN",
              style: "bg-[#eee9e2] text-[#78684f]",
            },
          },
        ],
      },
      {
        title: "Done",
        dotColor: "bg-[#426b50]",
        cards: [
          {
            id: "card-5",
            title: "Tentukan tujuan proyek",
            label: "Planning",
            labelStyle: "bg-[#e7eee8] text-[#426b50]",
            completed: true,
            assignee: {
              initials: "FA",
              style: "bg-[#e7eee8] text-[#426b50]",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Kanban project={websiteRedesign} />
    </>
  )
}

export default App
