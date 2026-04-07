"use client"

import {
    MessageSquare,
    LayoutDashboard,
    Users,
    Settings,
    ShoppingBag,
    BarChart3
} from "lucide-react"

import * as React from "react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
} from "@/components/ui/sidebar"

// Estas son las rutas de OmniCore
const navItems = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "WhatsApp Chat", url: "/dashboard/chat", icon: MessageSquare },
    { title: "Ventas", url: "/dashboard/sales", icon: ShoppingBag },
    { title: "Reportes", url: "/dashboard/reports", icon: BarChart3 },
    { title: "Contactos", url: "/dashboard/contacts", icon: Users },
    { title: "Configuración", url: "/dashboard/settings", icon: Settings },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props} className="bg-white dark:bg-slate-950 border-r">
            <SidebarHeader className="h-16 border-b flex items-center justify-center group-data-[state=expanded]:center group-data-[state=expanded]:px-6">
                <div className="flex items-center gap-3 font-bold text-xl text-slate-900">
                    <div className="bg-slate-900 text-white p-1.5 rounded-md flex-shrink-0">
                        <MessageSquare size={18} />
                    </div>
                    <span className="group-data-[collapsible=icon]:hidden tracking-tight truncate">
                        OmniCore
                    </span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Gestión</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild tooltip={item.title}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}