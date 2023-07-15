import { Menu } from './Components/Menu';
import { HomePage } from './Pages/HomePage';
import { EventDetailPage } from './Pages/EventDetailPage';
import { TicketPaymentPage } from './Pages/TicketPaymentPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventListPage } from './Pages/EventListPage';



export function AppRouter() {
  return (
    <>
      <Menu />

      <Routes>

        <Route 
        path="/"
        element={<HomePage/>}
        />

        <Route
        path="/events"
        element={<EventListPage/>}
        />

        <Route
        path="/events/:eventId"
        element={<EventDetailPage/>}
        />

        <Route
        path="/events/:eventId/tickets/:priceId"
        element={<TicketPaymentPage/>}
        />

      </Routes>

    </>
  );
}

export default function App() {
  return (
         <BrowserRouter>
           <AppRouter />
         </BrowserRouter>
    )
}
