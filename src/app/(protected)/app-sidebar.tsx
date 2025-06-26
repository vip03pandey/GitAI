"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar";
import {
  Bot,
  CreditCard,
  LayoutDashboard,
  PlusCircle,
  Presentation
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const AppSidebar = () => {
  const pathname = usePathname();
  const [selectedProject, setSelectedProject] = useState("Project 1"); // default selection
  const {open}=useSidebar()
  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Q&A",
      url: "/qa",
      icon: Bot
    },
    {
      title: "Meetings",
      url: "/meetings",
      icon: Presentation
    },
    {
      title: "Billing",
      url: "/billing",
      icon: CreditCard
    }
  ];

  const projects = [
    { name: "Normal Human" },
    { name: "normalhumanv2" },
    { name: "Docker Py" },
    { name: "Docker Gen AI" },
    { name: "ChatPDF" }
  ];


  return (
    <Sidebar collapsible="icon" variant="floating" className="bg-[#212121] text-white">
      <SidebarHeader>
        <div className="flex items-center gap-2 mb-5">
          <Image src='/image copy.png' alt="logo" width={40} height={40} className="bg-black">
          </Image>
          {open &&(  <h1 className="text-xl font-bold">GitAI</h1>)}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={clsx(
                        {
                          "!bg-[#3867d6] !text-white": pathname === item.url
                        },
                        "flex items-center px-2 py-1 rounded-md hover:bg-muted transition-all"
                      )}
                    >
                      <item.icon className="mr-2" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Your Projects</SidebarGroupLabel>
          <SidebarGroupContent >
            <SidebarMenu  >
              {projects.map((project) => {
                const isActive = selectedProject === project.name;

                return (
                  <SidebarMenuItem key={project.name} >
                    <SidebarMenuButton asChild className="hover:!bg-black">
                      <div
                        onClick={() => setSelectedProject(project.name)}
                      >
                        <div
                          className={clsx(
                            "w-6 h-6 flex items-center justify-center rounded-full text-sm font-medium border ",
                            isActive
                              ? "bg-primary text-white border-primary"
                              : "bg-white text-primary border"
                          )}
                        >
                          {project.name[0].toUpperCase()}
                        </div>
                        <span className="text-sm text-white truncate ">{project.name}</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
             {!open ? (<Link href='/create'><PlusCircle ></PlusCircle></Link>) :(<Link href='/create'><Button className="!bg-white !text-black !mt-3 size-sm cursor-pointer"><PlusCircle></PlusCircle> Create Project</Button></Link>)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
