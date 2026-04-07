import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />

            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger className="h-9 w-9" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <span className="hidden sm:inline-block text-slate-500">OmniCore</span>
                            <span className="hidden sm:inline-block text-slate-300">/</span>
                            <span className="text-slate-900 font-semibold">Panel de Control</span>
                        </div>
                    </div>
                </header>

                <div className="flex flex-1 flex-col gap-4 p-4 md:p-8 overflow-x-hidden">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}