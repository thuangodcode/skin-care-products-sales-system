"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import InvoiceList from "@/app/components/invoice/invoice-list";
import SimpleInvoice from "@/app/components/invoice/invoice-simple";
import InvoiceEmail from "@/app/components/invoice/invoice-email";
import Header from "@/app/components/header";

export default function InvoicesPage() {
  const [activeTab, setActiveTab] = useState("simple");

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <header className="border-b border-gray-800 p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Invoices</h1>
          <div className="flex gap-2">
            {["list", "simple", "email"].map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "bg-gray-700 text-white"
                }`}
              >
                {tab === "list" ? "Invoice List" : 
                 tab === "simple" ? "Simple Invoice" : 
                 "Email Invoice"}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6 text-white">
        {activeTab === "simple" && <SimpleInvoice />}
        {activeTab === "list" && <InvoiceList />}
        {activeTab === "email" && <InvoiceEmail />}
      </main>
    </div>
  );
}
