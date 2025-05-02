using Microsoft.EntityFrameworkCore;
using Serilog;
using WebApiVeiculos.DataContext;
using WebApiVeiculos.Services;
using WebApiVeiculos.Services.GrupoVeiculo;
using WebApiVeiculos.Services.Veiculo;
using WebApiVeiculos.Services.EmpresaAssistencia;
using WebApiVeiculos.Services.PlanoAssistencia;
using WebApiVeiculos.Services.VeiculoAssistencia;
using WebApiVeiculos.Services.VeiculoAssistenciaService;

var builder = WebApplication.CreateBuilder(args);

// Configura o Serilog antes de criar o builder
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .WriteTo.File("logs/log-.txt", rollingInterval: RollingInterval.Day)
    .Enrich.FromLogContext()
    .CreateLogger();

try
{
    Log.Information("Iniciando a aplica��o...");

    builder.Host.UseSerilog();

    // Adiciona os servi�os ao container
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    // Registra todos os servi�os
    builder.Services.AddScoped<IVeiculoService, VeiculoService>();
    builder.Services.AddScoped<IGrupoVeiculoService, GrupoVeiculoService>();
    builder.Services.AddScoped<IEmpresaAssistenciaService, EmpresaAssistenciaService>();
    builder.Services.AddScoped<IPlanoAssistenciaService, PlanoAssistenciaService>();
    builder.Services.AddScoped<IVeiculoAssistenciaService, VeiculoAssistenciaService>();

    // Configura o DbContext com MySQL
    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseMySql(
            builder.Configuration.GetConnectionString("DefaultConnection"),
            ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
        )
    );

    var app = builder.Build();

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();
    app.UseAuthorization();
    app.MapControllers();

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "A aplica��o falhou ao iniciar.");
}
finally
{
    Log.CloseAndFlush();
}
