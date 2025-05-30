﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApiVeiculos.DataContext;

#nullable disable

namespace WebApiVeiculos.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("WebApiVeiculos.Models.EmpresaAssistenciaModel", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("endereco")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("nome")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("id");

                    b.ToTable("EmpresaAssistencias");
                });

            modelBuilder.Entity("WebApiVeiculos.Models.GrupoVeiculoModel", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("descricao")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("nome")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("id");

                    b.ToTable("GrupoVeiculo");
                });

            modelBuilder.Entity("WebApiVeiculos.Models.PlanoAssistenciaModel", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("cobertura")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("descricao")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("empresaId")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("empresaId");

                    b.ToTable("PlanoAssistencias");
                });

            modelBuilder.Entity("WebApiVeiculos.Models.VeiculoAssistenciaModel", b =>
                {
                    b.Property<int>("veiculoId")
                        .HasColumnType("int");

                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<int>("planoId")
                        .HasColumnType("int");

                    b.HasKey("veiculoId");

                    b.HasIndex("planoId");

                    b.ToTable("VeiculoAssistencia");
                });

            modelBuilder.Entity("WebApiVeiculos.Models.VeiculoModel", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("grupoId")
                        .HasColumnType("int");

                    b.Property<string>("modelo")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("placa")
                        .IsRequired()
                        .HasMaxLength(10)
                        .HasColumnType("varchar(10)");

                    b.HasKey("id");

                    b.HasIndex("grupoId");

                    b.ToTable("Veiculos");
                });

            modelBuilder.Entity("WebApiVeiculos.Models.PlanoAssistenciaModel", b =>
                {
                    b.HasOne("WebApiVeiculos.Models.EmpresaAssistenciaModel", "EmpresaAssistencia")
                        .WithMany("Planos")
                        .HasForeignKey("empresaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("EmpresaAssistencia");
                });

            modelBuilder.Entity("WebApiVeiculos.Models.VeiculoAssistenciaModel", b =>
                {
                    b.HasOne("WebApiVeiculos.Models.PlanoAssistenciaModel", "PlanoAssistencia")
                        .WithMany("VeiculoAsssistencia")
                        .HasForeignKey("planoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApiVeiculos.Models.VeiculoModel", "Veiculo")
                        .WithMany("VeiculoAssistencia")
                        .HasForeignKey("veiculoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("PlanoAssistencia");

                    b.Navigation("Veiculo");
                });

            modelBuilder.Entity("WebApiVeiculos.Models.VeiculoModel", b =>
                {
                    b.HasOne("WebApiVeiculos.Models.GrupoVeiculoModel", "GrupoVeiculo")
                        .WithMany("Veiculos")
                        .HasForeignKey("grupoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GrupoVeiculo");
                });

            modelBuilder.Entity("WebApiVeiculos.Models.EmpresaAssistenciaModel", b =>
                {
                    b.Navigation("Planos");
                });

            modelBuilder.Entity("WebApiVeiculos.Models.GrupoVeiculoModel", b =>
                {
                    b.Navigation("Veiculos");
                });

            modelBuilder.Entity("WebApiVeiculos.Models.PlanoAssistenciaModel", b =>
                {
                    b.Navigation("VeiculoAsssistencia");
                });

            modelBuilder.Entity("WebApiVeiculos.Models.VeiculoModel", b =>
                {
                    b.Navigation("VeiculoAssistencia");
                });
#pragma warning restore 612, 618
        }
    }
}
