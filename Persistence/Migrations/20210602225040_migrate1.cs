﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class migrate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lendet",
                columns: table => new
                {
                    LendaId = table.Column<Guid>(type: "TEXT", nullable: false),
                    EmriLendes = table.Column<string>(type: "TEXT", nullable: true),
                    Pershkrimi = table.Column<string>(type: "TEXT", nullable: true),
                    Syllabusi = table.Column<string>(type: "TEXT", nullable: true),
                    DataEShtimit = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lendet", x => x.LendaId);
                });

            migrationBuilder.CreateTable(
                name: "Nxenesit",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    FullName = table.Column<string>(type: "TEXT", nullable: true),
                    ParentName = table.Column<string>(type: "TEXT", nullable: true),
                    Class = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Password = table.Column<string>(type: "TEXT", nullable: true),
                    DateOfBirth = table.Column<DateTime>(type: "TEXT", nullable: false),
                    YearOfRegistration = table.Column<int>(type: "INTEGER", nullable: false),
                    PhoneNumber = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nxenesit", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Postimet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Titulli = table.Column<string>(type: "TEXT", nullable: true),
                    Data = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Permbajtja = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Postimet", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Prinderit",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Emri = table.Column<string>(type: "TEXT", nullable: true),
                    Mbiemri = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Fjalkalimi = table.Column<string>(type: "TEXT", nullable: true),
                    nrTel = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prinderit", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Profesoret",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    Fjalkalimi = table.Column<string>(type: "TEXT", nullable: true),
                    GradaAkademike = table.Column<string>(type: "TEXT", nullable: true),
                    DataRegjistrimit = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Lenda = table.Column<string>(type: "TEXT", nullable: true),
                    Roli = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profesoret", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Terminet",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    DataFillimit = table.Column<string>(type: "TEXT", nullable: true),
                    DataMbarimit = table.Column<string>(type: "TEXT", nullable: true),
                    Salla = table.Column<string>(type: "TEXT", nullable: true),
                    KohaMbajtjes = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Terminet", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Lendet");

            migrationBuilder.DropTable(
                name: "Nxenesit");

            migrationBuilder.DropTable(
                name: "Postimet");

            migrationBuilder.DropTable(
                name: "Prinderit");

            migrationBuilder.DropTable(
                name: "Profesoret");

            migrationBuilder.DropTable(
                name: "Terminet");
        }
    }
}