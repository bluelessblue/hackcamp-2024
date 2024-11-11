namespace Api.Models;

public class Category
{
    public Guid Id { get; set; }

    public required string CategoryName { get; set; }

    // relationships
    public List<Business> Businesses { get; } = [];
}
