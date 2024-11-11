using Api.Data;
using Api.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/categories")]
[AllowAnonymous]
[ApiController]
public class CategoryController : ControllerBase
{
    private readonly AppDbContext _context;

    public CategoryController(AppDbContext context)
    {
        _context = context;
    }

    // constructor

    // GET: api/categories/id
    [HttpGet("{categoryId:guid}")]
    public async Task<ActionResult<IEnumerable<BusinessResponseDto>>> GetBusinessesByCategory(
        Guid categoryId
    )
    {
        var businesses = await _context
            .Businesses.Where(b => b.Category.Id == categoryId)
            .ToListAsync();

        var businessesDto = businesses.Select(b => new BusinessResponseDto
        {
            Id = b.Id,
            BusinessName = b.BusinessName,
            Description = b.Description,
            BIPOCOwner = b.BIPOCOwner,
            Address = b.Address,
            Rating = b.Rating,
            CategoryId = categoryId,
            Latitude = b.Latitude,
            Longitude = b.Longitude
        });

        return Ok(businessesDto);
    }

    // GET: api/categories
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CategoriesResponseDto>>> GetCategories()
    {
        var categories = await _context.Categories.ToListAsync();

        var categoriesDto = categories.Select(c => new CategoriesResponseDto
        {
            Id = c.Id,
            CategoryName = c.CategoryName
        });

        return Ok(categoriesDto);
    }

    // POST: api/categories
    [HttpPost]
    public async Task<ActionResult> CreateCategory()
    {
        throw new NotImplementedException();
    }

    // PUT: api/categories/id
    [HttpPut("{categoryId:guid}")]
    public async Task<ActionResult> UpdateCategory(Guid categoryId)
    {
        throw new NotImplementedException();
    }

    // DELETE: api/categories/id
    [HttpDelete("{categoryId:guid}")]
    public async Task<ActionResult> DeleteCategory(Guid categoryId)
    {
        throw new NotImplementedException();
    }
}
