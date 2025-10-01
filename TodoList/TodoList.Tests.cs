using System.Net;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

public class TodoListApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public TodoListApiTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GetTodos_ReturnsOk()
    {
        var response = await _client.GetAsync("/api/todos");
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task AddTodo_ReturnsCreated()
    {
        var todo = new { Title = "Test", Content = "Test content" };
        var response = await _client.PostAsJsonAsync("/api/todos", todo);
        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
    }

    [Fact]
    public async Task SearchTodo_ReturnsOk()
    {
        var response = await _client.GetAsync("/api/todos/search?q=Test");
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}
