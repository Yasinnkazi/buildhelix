export default function ProjectShowcase() {
  const projects = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-gZtmb8jwf8hIQQOJQjERvT9-UwlXIAKqA-dtcdggDnLi37c6VB69S30hX4W5_9rdggyshsVVeqKURvL4NoVq8YZXhCPlGpYcZ2YfKtTCi1cokDYxIEH2ZjOzahNE3UuyttB61QhFOlWaEUXg-rpT-JaCeyRv3V9KPWvLRFByOWT1orR2fbMlnptIPGuUOf425rruOLEEhtTr6MQNkc9xsUI-L0shDy6xB4qto-BmUSP53lQA0Zj8ecFw5uRsVvvE2DNWadlF2cq_",
      tags: ["Visual Identity", "UX Design"],
      title: "Project NEBULA",
      description:
        "Creating a unified digital ecosystem for the next generation of interstellar logistics.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB6MhDj1gqa4SG5SPL2ds3djHyO18QiTHqcVpo9AaLPSfP3mIA4cCcFWPyYMH-7bMcZArDhH2LRE4H81yMBLx4nWKelrkXDZ09GsM6LOnsDTZsKs4qr0CLXeljILZitxUQqPF-eMEJrZTbUOYEVQCcYeJ5bgFoar_XvB4Mmr-fesh-hLjAyax7z3KCie0dBaXYAH-5d9ucnRAc5EuLjTloPF1mpTR6upoKfq-Uxp8_FKRQJBHGfamqIPI4G3iwO14ckbCzY31f5GFbD",
      tags: ["Web Development", "3D Motion"],
      title: "KINETIC Labs",
      description:
        "Exploring the friction between digital interfaces and physical user interactions.",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBg5NEhsrDAyFTQEwAmu2zghI9BBT14LehmGskhWJoP74cHbJOPxYuiJuMsYvE9hDRVV1X1N2aoCWzV_R-gw1A-FoNxRNK_1RAV-eQ6q1Yg3eQroyU3TwzWUTvYvlz9TaZT9vM3yjNXLx1u7XS4DlP8c-xPW9hGwxYcwQ5trO0kpG6fpyhx45kVG8ef8fdWQ9xdMWTJV365jIxB4_FiJFH3wq_6q9Fzxt_nqdxmFSOaCD8oY1zK6scTxpQ6nEF6v0mq3jxtushkpySo",
      tags: ["AI Integration", "Strategy"],
      title: "OSIRIS Core",
      description:
        "An intelligent infrastructure system managing high-density urban environments.",
    },
  ];

  return (
    <section className="relative pb-[20vh] max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      {projects.map((project, index) => (
        <section key={index} className="h-screen flex items-center justify-center sticky top-0">
          <div
            className="w-full h-[618px] md:h-[707px] rounded-xl overflow-hidden relative group"
            style={{ backdropFilter: "blur(24px)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-label-sm text-on-surface uppercase tracking-wider border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display-lg text-display-lg tracking-tight">{project.title}</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant/80 max-w-md">
                  {project.description}
                </p>
              </div>
              <button className="group/btn flex items-center gap-4 bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-full font-label-md text-label-md hover:bg-white transition-all duration-500 shadow-xl">
                View Case Study
                <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
