import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeProvider } from "@/contexts/themeContext"
import { Link, Outlet, useLocation } from "react-router-dom"

export default function Layout() {
    const location = useLocation()
    const pathname = location.pathname

    // 1️⃣ URL parçalarına ayır
    const pathSegments = pathname.split("/").filter(Boolean)

    // 2️⃣ Dinamik breadcrumb öğeleri oluştur
    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = "/" + pathSegments.slice(0, index + 1).join("/")
        const label = getReadableLabel(segment)
        const isLast = index === pathSegments.length - 1

        return (
            <BreadcrumbItem key={path}>
                {isLast ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                    <Link to={path}>{label}</Link>
                )}
            </BreadcrumbItem>
        )
    })

    return (
        <ThemeProvider>
            <SidebarProvider>
                <SidebarLeft />
                <SidebarInset>
                    <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2">
                        <div className="flex flex-1 items-center gap-2 px-3">
                            <SidebarTrigger />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />

                            {/* 🧭 Breadcrumb */}
                            <Breadcrumb>
                                <BreadcrumbList>
                                    {/* Ana Sayfa linki */}
                                    <BreadcrumbItem>
                                        <Link to="/">Ana Sayfa</Link>
                                    </BreadcrumbItem>

                                    {/* Eğer başka segment varsa araya ayraç koy */}
                                    {breadcrumbs.length > 0 && <BreadcrumbSeparator />}

                                    {/* Dinamik olarak oluşturulan breadcrumb’lar */}
                                    {breadcrumbs.map((crumb, i) => (
                                        <div key={i} className="flex items-center">
                                            {crumb}
                                            {i < breadcrumbs.length - 1 && (
                                                <BreadcrumbSeparator />
                                            )}
                                        </div>
                                    ))}
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </header>

                    <div className="flex flex-1 flex-col gap-4 p-4">
                        <Outlet />
                    </div>
                </SidebarInset>
                <SidebarRight />
            </SidebarProvider>
        </ThemeProvider>
    )
}

// 🧩 URL segmentlerini okunabilir hale çevir
function getReadableLabel(segment: string) {
    const map: Record<string, string> = {
        login: "Giriş Yap",
        register: "Kayıt Ol",
        users: "Kullanıcılar",
        dashboard: "Yönetim Paneli",
        settings: "Ayarlar",
        profile: "Profil",
    }

    // Eğer eşleşme yoksa parametre veya id gibi davran
    return map[segment] || decodeURIComponent(segment)
}
