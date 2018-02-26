using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace ReactReduxTutorial.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sprints",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Guid = table.Column<Guid>(nullable: false),
                    SprintEnd = table.Column<DateTime>(nullable: false),
                    SprintStart = table.Column<DateTime>(nullable: false),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sprints", x => x.Id);
                    table.UniqueConstraint("AK_Sprints_Guid", x => x.Guid);
                });

            migrationBuilder.CreateTable(
                name: "Swimlanes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Guid = table.Column<Guid>(nullable: false),
                    SprintGuid = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Swimlanes", x => x.Id);
                    table.UniqueConstraint("AK_Swimlanes_Guid", x => x.Guid);
                    table.ForeignKey(
                        name: "FK_Swimlanes_Sprints_SprintGuid",
                        column: x => x.SprintGuid,
                        principalTable: "Sprints",
                        principalColumn: "Guid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Tasks",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    Guid = table.Column<Guid>(nullable: false),
                    SwimlaneGuid = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tasks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tasks_Swimlanes_SwimlaneGuid",
                        column: x => x.SwimlaneGuid,
                        principalTable: "Swimlanes",
                        principalColumn: "Guid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Swimlanes_SprintGuid",
                table: "Swimlanes",
                column: "SprintGuid");

            migrationBuilder.CreateIndex(
                name: "IX_Tasks_SwimlaneGuid",
                table: "Tasks",
                column: "SwimlaneGuid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tasks");

            migrationBuilder.DropTable(
                name: "Swimlanes");

            migrationBuilder.DropTable(
                name: "Sprints");
        }
    }
}
