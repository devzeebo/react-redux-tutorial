﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using ReactReduxTutorial.Data;
using System;

namespace ReactReduxTutorial.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20180212205031_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ReactReduxTutorial.Data.Sprint", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("Guid")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("SprintEnd");

                    b.Property<DateTime>("SprintStart");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("Sprints");
                });

            modelBuilder.Entity("ReactReduxTutorial.Data.SprintTask", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<Guid>("Guid")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("SwimlaneGuid");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("SwimlaneGuid");

                    b.ToTable("Tasks");
                });

            modelBuilder.Entity("ReactReduxTutorial.Data.Swimlane", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("Guid")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("SprintGuid");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("SprintGuid");

                    b.ToTable("Swimlanes");
                });

            modelBuilder.Entity("ReactReduxTutorial.Data.SprintTask", b =>
                {
                    b.HasOne("ReactReduxTutorial.Data.Swimlane", "Swimlane")
                        .WithMany("Tasks")
                        .HasForeignKey("SwimlaneGuid")
                        .HasPrincipalKey("Guid")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("ReactReduxTutorial.Data.Swimlane", b =>
                {
                    b.HasOne("ReactReduxTutorial.Data.Sprint", "Sprint")
                        .WithMany("Swimlanes")
                        .HasForeignKey("SprintGuid")
                        .HasPrincipalKey("Guid")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
