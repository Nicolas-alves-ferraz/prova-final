namespace API.Models

public class Aluno
{
    public int id {get; set;}
    public String Nome { get; set; }
    public String Sobrenome {get; set;}
    public int CriadoEm {get; set}
};
using Microsoft.EntityFrameworkCore;