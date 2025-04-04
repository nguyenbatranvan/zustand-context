import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Bell, Search} from "lucide-react";

export function AppHeader() {
    return (
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger/>
            <div className="flex flex-1 items-center gap-4 md:ml-4">
                <form className="hidden flex-1 md:block">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                        />
                    </div>
                </form>
                <div className="ml-auto flex items-center gap-4">
                    <Button variant="outline" size="icon" className="relative">
                        <Bell className="h-4 w-4"/>
                        <span
                            className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              3
            </span>
                    </Button>
                    <Separator orientation="vertical" className="h-6"/>
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="/placeholder.svg?height=32&width=32"/>
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="hidden md:block">
                            <div className="text-sm font-medium">John Doe</div>
                            <div className="text-xs text-muted-foreground">Admin</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
