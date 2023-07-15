import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../Services/eventsServices";
import { sendPaymentLink } from "../Services/paymentsService";

export function TicketPaymentPage() {
  return <main>Ticket payment page</main>;
}