import {SidebarInset, SidebarProvider } from './components/ui/sidebar';
import { AppHeader } from './layout/header/AppHeader';
import { AppSidebar } from './layout/sidebar/AppSidebar';
import './styles/globals.css';
import {ExampleContextPage} from "@/pages/example-context.tsx";

const App = () => {
  return (
      <SidebarProvider>
          <div className="flex min-h-screen w-full">
              <AppSidebar />
              <SidebarInset>
                  <AppHeader />
                  <main className="flex-1 p-6">
                      <ExampleContextPage/>
                  </main>
              </SidebarInset>

          </div>
      </SidebarProvider>
  );
};

export default App;
