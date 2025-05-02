using WebApiVeiculos.DTOs.VeiculoDTO;
using WebApiVeiculos.Models;

namespace WebApiVeiculos.Services.Veiculo
{
    public interface IVeiculoService
    {
        Task<IEnumerable<VeiculoDTO>> BuscarTodosAsync();
        Task<VeiculoDTO?> BuscarPorIdAsync(int id);
        Task<VeiculoDTO> CriarAsync(VeiculoDTO veiculo);
        Task<VeiculoDTO?> AtualizarAsync(int id, VeiculoDTO veiculo);
        Task<bool> DeletarAsync(int id);
    }
}
