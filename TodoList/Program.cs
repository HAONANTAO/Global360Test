var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// STARTER OF TODO LIST API

// create the TODO list in memory
var todoItems = new List<TodoItem>();
var nextId = 1;

// the TODO List item model

// 1.add TODOs
app.MapPost("/api/todos", (TodoItemDto dto) => {
    var todo = new TodoItem { Id = nextId++, Title = dto.Title, Content = dto.Content };
    todoItems.Add(todo);
    return Results.Created($"/api/todos/{todo.Id}", todo);
});

// 2.delete TODO
app.MapDelete("/api/todos/{id:int}", (int id) => {
    // find the first matching TODO item by id
    var todo = todoItems.FirstOrDefault(t => t.Id == id);
    if (todo == null) return Results.NotFound();
    todoItems.Remove(todo);
    return Results.NoContent();
});

// 3.update TODO
app.MapPut("/api/todos/{id:int}", (int id, TodoItemDto dto) => {
    var todo = todoItems.FirstOrDefault(t => t.Id == id);
    if (todo == null) return Results.NotFound();
    todo.Title = dto.Title;
    todo.Content = dto.Content;
    return Results.Ok(todo);
});

// 4.Get all TODOs
app.MapGet("/api/todos", () => Results.Ok(todoItems));


// END OF TODO LIST API

app.Run();

// DTO the data transfer object for creating a TODO item
record TodoItemDto
{
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}
// id and title
record TodoItem
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
}

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
