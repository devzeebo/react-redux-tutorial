using Microsoft.EntityFrameworkCore;

namespace ReactReduxTutorial.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> opts) : base(opts) { }

        protected override void OnModelCreating(ModelBuilder mb)
        {
            mb.Entity<Sprint>(sprint =>
            {
                sprint.Property(p => p.Guid).ValueGeneratedOnAdd().IsRequired();
                sprint.HasMany(p => p.Swimlanes)
                    .WithOne(c => c.Sprint)
                    .HasForeignKey(c => c.SprintGuid)
                    .HasPrincipalKey(p => p.Guid);
            });

            mb.Entity<Swimlane>(swimlane =>
            {
                swimlane.Property(c => c.Guid).ValueGeneratedOnAdd().IsRequired();
                swimlane.Property(c => c.SprintGuid).IsRequired();
                swimlane.HasMany(p => p.Tasks)
                    .WithOne(c => c.Swimlane)
                    .HasForeignKey(c => c.SwimlaneGuid)
                    .HasPrincipalKey(p => p.Guid);
            });

            mb.Entity<SprintTask>(task =>
            {
                task.Property(t => t.Guid).ValueGeneratedOnAdd().IsRequired();
                task.Property(t => t.SwimlaneGuid).IsRequired();
            });
        }

        public DbSet<Sprint> Sprints { get; set; }
        public DbSet<Swimlane> Swimlanes { get; set; }
        public DbSet<SprintTask> Tasks { get; set; }
    }
}
