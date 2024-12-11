using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;


var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();


app.MapPost("cadrastar/Aluno", async (Aluno aluno, AppDbContext context) =>
{
    context.Add(aluno);
    await context.SaveChangesAsync();
    return Results.Created($"/Aluno/{aluno.Id}", aluno);
});

app.MapGet("Listar/Aluno", async (Aluno aluno, AppdbContext context) =>
{
    if (Aluno == null)
    {
        return Results.NotFound("Aluno não encontrado.");
    }
    var aluno = await context.Aluno.ToListAsync();
    return Results.Ok(aluno);
});

app.MapPost("Cadrastar/IMCs", async (IMCs imcs, AppDbContext context) => 
{
    context.add(IMCs);
    await context.SaveChangesAsync();
    return Results.Created($"/IMCs/{imcs}", imcs);
});

app.MapGet("Listar/IMCs", async (IMCs imcs, AppdbContext context) =>
{
    var imcs = await context.IMCs.ToListAsync();
    return Results.Ok(IMCs);
});

app.MapGet("/Listar/IMCs/{Aluno}", async (string Aluno, AppDbContext context) =>
{
    var imcs = await context.IMCs.Where(p => p.Aluno.Contains(aluno)).ToListAsync();
    return imcs.Any() ? Results.Ok(imcs) : Results.NotFound("Nenhum IMCs encontrado.");
});

app.MapPut("/IMCs/{id}", async (int id, IMCs imcsAtualizado, AppDbContext context) =>
{
    var imcs = await context.IMCs.FindAsync(id);
    if (imcs == null)
    {
        return Results.NotFound("IMCs não encontrado.");
    }

    imcs.peso = imcsAtualizado.peso;
    imcs.altura = imcsAtualizado.altura;
    imcs.Idade = imcsAtualizado.idade;
    await context.SaveChangesAsync();
    return Results.Ok("IMCs atualizado com sucesso.");
});


app.Run();