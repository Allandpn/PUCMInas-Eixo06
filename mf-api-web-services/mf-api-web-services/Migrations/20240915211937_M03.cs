using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace mf_api_web_services.Migrations
{
    /// <inheritdoc />
    public partial class M03 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "VeiculoUsuario");
                       

            migrationBuilder.CreateTable(
                name: "VeiculoUsuarios",
                columns: table => new
                {
                    VeiculoId = table.Column<int>(type: "int", nullable: false),
                    UsuarioId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VeiculoUsuarios", x => new { x.VeiculoId, x.UsuarioId });
                    table.ForeignKey(
                        name: "FK_VeiculoUsuarios_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_VeiculoUsuarios_Veiculos_VeiculoId",
                        column: x => x.VeiculoId,
                        principalTable: "Veiculos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

         

            migrationBuilder.CreateIndex(
                name: "IX_VeiculoUsuarios_UsuarioId",
                table: "VeiculoUsuarios",
                column: "UsuarioId");

       
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_LinkDto_Usuarios_UsuarioId",
                table: "LinkDto");

            migrationBuilder.DropTable(
                name: "VeiculoUsuarios");

            migrationBuilder.DropIndex(
                name: "IX_LinkDto_UsuarioId",
                table: "LinkDto");

            migrationBuilder.DropColumn(
                name: "UsuarioId",
                table: "LinkDto");

            migrationBuilder.CreateTable(
                name: "VeiculoUsuario",
                columns: table => new
                {
                    VeiculoId = table.Column<int>(type: "int", nullable: false),
                    UsuarioId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VeiculoUsuario", x => new { x.VeiculoId, x.UsuarioId });
                    table.ForeignKey(
                        name: "FK_VeiculoUsuario_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_VeiculoUsuario_Veiculos_VeiculoId",
                        column: x => x.VeiculoId,
                        principalTable: "Veiculos",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_VeiculoUsuario_UsuarioId",
                table: "VeiculoUsuario",
                column: "UsuarioId");
        }
    }
}
