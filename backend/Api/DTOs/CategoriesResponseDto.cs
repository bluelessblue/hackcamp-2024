namespace Api.DTOs;

public class CategoriesResponseDto
{
    public Guid Id { get; set; }

    public required string CategoryName { get; set; }
}