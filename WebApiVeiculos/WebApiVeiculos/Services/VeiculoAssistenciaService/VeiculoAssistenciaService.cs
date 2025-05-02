using Microsoft.EntityFrameworkCore;
using WebApiVeiculos.DataContext;
using WebApiVeiculos.DTOs.VeiculoAssistenciaDTO;
using WebApiVeiculos.Models;
using WebApiVeiculos.Services.VeiculoAssistencia;

namespace WebApiVeiculos.Services.VeiculoAssistenciaService
{
    public class VeiculoAssistenciaService : IVeiculoAssistenciaService
    {
        private readonly ApplicationDbContext _context;

        public VeiculoAssistenciaService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<VeiculoAssistenciaDTO>> BuscarTodosAsync()
        {
            return await _context.VeiculoAssistencias.Select(v => new VeiculoAssistenciaDTO{
                Id = v.Id,
                VeiculoId = v.VeiculoId,
                PlanoId = v.PlanoId,
            }) .ToListAsync();
        }

        public async Task<VeiculoAssistenciaDTO?> BuscarPorIdAsync(int id)
        {
            var veiculoAssistencia = await _context.VeiculoAssistencias.FindAsync(id);
            if (veiculoAssistencia == null) return null;

            return new VeiculoAssistenciaDTO
            {
                Id = veiculoAssistencia.Id,
                VeiculoId = veiculoAssistencia.VeiculoId,
                PlanoId = veiculoAssistencia.PlanoId,
            };
        }

        public async Task<VeiculoAssistenciaDTO> CriarAsync(VeiculoAssistenciaDTO veiculoAssistencia)
        {
            var model = new VeiculoAssistenciaModel
            {
                VeiculoId = veiculoAssistencia.VeiculoId,
                PlanoId = veiculoAssistencia.PlanoId
            };

            _context.VeiculoAssistencias.Add(model);
            await _context.SaveChangesAsync();

            veiculoAssistencia.Id = model.Id;
            return veiculoAssistencia;
        }

        public async Task<VeiculoAssistenciaDTO?> AtualizarAsync(int id, VeiculoAssistenciaDTO veiculoAssistencia)
        {
            var existente = await _context.VeiculoAssistencias.FindAsync(id);
            if (existente == null) return null;

            existente.VeiculoId = veiculoAssistencia.VeiculoId;
            existente.PlanoId = veiculoAssistencia.PlanoId;

            await _context.SaveChangesAsync();
            return new VeiculoAssistenciaDTO
            {
                Id = existente.Id,
                VeiculoId = existente.VeiculoId,
                PlanoId = existente.PlanoId
            };
        }

        public async Task<bool> DeletarAsync(int id)
        {
            var existente = await _context.VeiculoAssistencias.FindAsync(id);
            if (existente == null) return false;

            _context.VeiculoAssistencias.Remove(existente);
            await _context.SaveChangesAsync();
            return true;
        }

    }
}
