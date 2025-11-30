const ProjectCard = () => {
  return (
    <div className="space-y-4 p-2">
      <h3 className="text-text">Project </h3>
      <p className="text-sm text-text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quo
        alias eius ipsum, amet corrupti reprehenderit, qui autem necessitatibus
        reiciendis,
      </p>
      <section className="flex flex-wrap gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className="inline-block rounded-full bg-primary-button/20 px-4 py-1.5 text-xs text-primary-button"
          >
            Tag {i + 1}
          </span>
        ))}
      </section>
      <div className="h-48 w-full rounded-md bg-section"></div>
    </div>
  );
};

export default ProjectCard;
