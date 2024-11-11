namespace Api.DTOs;

public class BusinessResponseDto
{
    public Guid Id { get; set; }

    public required string BusinessName { get; set; }
    public required string Description { get; set; }
    public required bool BIPOCOwner { get; set; }
    public required string Address { get; set; }
    public required decimal Rating { get; set; }

    public required decimal Latitude { get; set; }
    public required decimal Longitude { get; set; }

    // relationships
    public required Guid CategoryId { get; set; }
}