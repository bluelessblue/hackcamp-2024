using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<Category> Categories { get; init; } = null!;
    public DbSet<Business> Businesses { get; init; } = null!;
}
