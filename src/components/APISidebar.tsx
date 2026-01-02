import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function APISidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openCategories, setOpenCategories] = useState<string[]>([
    "Business",
    "Items",
    "Parties",
    "Invoices",
    "FIRS",
  ]);

  const sections = [
    { title: "mcflow Nigeria API Introduction", href: "/api-reference" },
    {
      title: "Prerequisites of using the API",
      href: "/api-reference/prerequisites",
    },
    { title: "Feature: Callback URLs", href: "/api-reference/callback-urls" },
    { title: "Transaction Status", href: "/api-reference/transaction-status" },
    { title: "Errors and HTTP response codes", href: "/api-reference/errors" },
  ];

  const apiEndpoints = [
    {
      category: "Business",
      tag: "Business",
      endpoints: [
        {
          name: "Get business details",
          method: "GET",
          operationId: "getBusinessById",
          path: "/businesses/{businessId}",
        },
        {
          name: "Get business by TIN",
          method: "GET",
          operationId: "getBusinessByTIN",
          path: "/businesses/tin/{tin}",
        },
      ],
    },
    {
      category: "Items",
      tag: "Items",
      endpoints: [
        {
          name: "List all items",
          method: "GET",
          operationId: "getItems",
          path: "/businesses/{businessId}/items",
        },
        {
          name: "Create a new item",
          method: "POST",
          operationId: "createItem",
          path: "/businesses/{businessId}/items",
        },
        {
          name: "Get item by ID",
          method: "GET",
          operationId: "getItemById",
          path: "/businesses/{businessId}/items/{itemId}",
        },
        {
          name: "Update an item",
          method: "PATCH",
          operationId: "updateItem",
          path: "/businesses/{businessId}/items/{itemId}",
        },
      ],
    },
    {
      category: "Parties",
      tag: "Parties",
      endpoints: [
        {
          name: "List all parties",
          method: "GET",
          operationId: "getParties",
          path: "/businesses/{businessId}/parties",
        },
        {
          name: "Create a new party",
          method: "POST",
          operationId: "createParty",
          path: "/businesses/{businessId}/parties",
        },
        {
          name: "Get party by ID",
          method: "GET",
          operationId: "getPartyById",
          path: "/businesses/{businessId}/parties/{partyId}",
        },
        {
          name: "Update a party",
          method: "PATCH",
          operationId: "updateParty",
          path: "/businesses/{businessId}/parties/{partyId}",
        },
      ],
    },
    {
      category: "Invoices",
      tag: "Invoices",
      endpoints: [
        {
          name: "List all invoices",
          method: "GET",
          operationId: "getInvoices",
          path: "/businesses/{businessId}/invoices",
        },
        {
          name: "Create a new invoice",
          method: "POST",
          operationId: "createInvoice",
          path: "/businesses/{businessId}/invoices",
        },
        {
          name: "Get invoice by ID",
          method: "GET",
          operationId: "getInvoiceById",
          path: "/invoices/{invoiceId}",
        },
        {
          name: "Update payment status",
          method: "PATCH",
          operationId: "updatePaymentStatus",
          path: "/invoices/{invoiceId}/payment-status",
        },
      ],
    },
    {
      category: "FIRS",
      tag: "FIRS",
      endpoints: [
        {
          name: "Validate invoice with FIRS",
          method: "POST",
          operationId: "validateInvoice",
          path: "/invoices/{invoiceId}/validate",
        },
      ],
    },
  ];

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const scrollToOperation = (tag: string, operationId: string) => {
    // Navigate to Swagger page first if not already there
    if (location.pathname !== "/api-reference/swagger") {
      navigate("/api-reference/swagger");
    }

    // Swagger UI ID format: operations-{Tag}-{OperationID}
    const swaggerId = `operations-${tag}-${operationId}`;

    // Wait a bit for Swagger UI to render, then scroll to the operation
    setTimeout(() => {
      const element = document.getElementById(swaggerId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Optionally expand the operation
        const button = element.querySelector(".opblock-summary-control");
        if (button && !element.classList.contains("is-open")) {
          (button as HTMLElement).click();
        }
      }
    }, 300);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          MCFLOW API REFERENCE
        </h2>

        {/* Main sections */}
        <nav className="space-y-1 mb-8">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.href}
              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                location.pathname === section.href
                  ? "bg-green-50 text-green-700 font-medium"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {section.title}
            </Link>
          ))}
        </nav>

        {/* API Endpoints */}
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          mcflow Nigeria API
        </h3>
        <nav className="space-y-2">
          {apiEndpoints.map((group, groupIndex) => (
            <div key={groupIndex}>
              <button
                onClick={() => toggleCategory(group.category)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                <span>{group.category}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openCategories.includes(group.category) ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {openCategories.includes(group.category) && (
                <ul className="space-y-0.5 mt-1 ml-2">
                  {group.endpoints.map((endpoint, endpointIndex) => (
                    <li key={endpointIndex}>
                      <button
                        onClick={() =>
                          scrollToOperation(group.tag, endpoint.operationId)
                        }
                        className="w-full flex items-start gap-2 px-3 py-1.5 text-sm rounded-md transition-colors group text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <span
                          className={`text-xs font-mono font-semibold mt-0.5 flex-shrink-0 ${
                            endpoint.method === "GET"
                              ? "text-blue-600"
                              : endpoint.method === "POST"
                              ? "text-green-600"
                              : endpoint.method === "PATCH"
                              ? "text-orange-600"
                              : endpoint.method === "PUT"
                              ? "text-orange-600"
                              : "text-gray-600"
                          }`}
                        >
                          {endpoint.method.toLowerCase()}
                        </span>
                        <span className="text-xs leading-relaxed text-left">
                          {endpoint.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
