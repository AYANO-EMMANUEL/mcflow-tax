import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { useEffect } from "react";

export default function SwaggerAPIReference() {
  useEffect(() => {
    // Add custom CSS to style Swagger UI to match mcflow theme
    const style = document.createElement("style");
    style.textContent = `
      /* Scroll margin for smooth scrolling */
      .swagger-ui .opblock-tag,
      .swagger-ui .opblock {
        scroll-margin-top: 20px;
      }
      
      /* Main theme colors - Green (#065f46) */
      .swagger-ui {
        font-family: "Inter", system-ui, sans-serif;
      }
      
      /* Header and title styling */
      .swagger-ui .info .title {
        color: #065f46;
        font-weight: 700;
      }
      
      .swagger-ui .info .title small {
        background: #d1fae5;
        color: #065f46;
        padding: 4px 8px;
        border-radius: 4px;
      }
      
      .swagger-ui .info hgroup.main a {
        color: #065f46;
      }
      
      /* Section headers */
      .swagger-ui .opblock-tag {
        color: #065f46;
        border-bottom: 2px solid #d1fae5;
        font-weight: 600;
      }
      
      .swagger-ui .opblock-tag:hover {
        background: #f0fdf4;
      }
      
      /* HTTP Method colors */
      .swagger-ui .opblock.opblock-get .opblock-summary-method {
        background: #3b82f6;
      }
      
      .swagger-ui .opblock.opblock-get {
        border-color: #3b82f6;
        background: rgba(59, 130, 246, 0.05);
      }
      
      .swagger-ui .opblock.opblock-post .opblock-summary-method {
        background: #10b981;
      }
      
      .swagger-ui .opblock.opblock-post {
        border-color: #10b981;
        background: rgba(16, 185, 129, 0.05);
      }
      
      .swagger-ui .opblock.opblock-patch .opblock-summary-method {
        background: #f97316;
      }
      
      .swagger-ui .opblock.opblock-patch {
        border-color: #f97316;
        background: rgba(249, 115, 22, 0.05);
      }
      
      .swagger-ui .opblock.opblock-put .opblock-summary-method {
        background: #f59e0b;
      }
      
      .swagger-ui .opblock.opblock-put {
        border-color: #f59e0b;
        background: rgba(245, 158, 11, 0.05);
      }
      
      .swagger-ui .opblock.opblock-delete .opblock-summary-method {
        background: #ef4444;
      }
      
      .swagger-ui .opblock.opblock-delete {
        border-color: #ef4444;
        background: rgba(239, 68, 68, 0.05);
      }
      
      /* Links and interactive elements */
      .swagger-ui a {
        color: #065f46;
      }
      
      .swagger-ui a:hover {
        color: #047857;
      }
      
      /* Buttons */
      .swagger-ui .btn {
        background: #065f46;
        color: white;
        border-color: #065f46;
      }
      
      .swagger-ui .btn:hover {
        background: #047857;
        border-color: #047857;
      }
      
      .swagger-ui .btn.authorize {
        background: #10b981;
        border-color: #10b981;
      }
      
      .swagger-ui .btn.authorize:hover {
        background: #059669;
        border-color: #059669;
      }
      
      /* Try it out button */
      .swagger-ui .btn.try-out__btn {
        background: #065f46;
        color: white;
      }
      
      .swagger-ui .btn.execute {
        background: #10b981;
        border-color: #10b981;
      }
      
      /* Response/Request tabs */
      .swagger-ui .tab li button.tablinks.active {
        color: #065f46;
        border-bottom: 2px solid #065f46;
      }
      
      /* Authorization modal */
      .swagger-ui .dialog-ux .modal-ux-header {
        background: #065f46;
        color: white;
      }
      
      /* Schema/Model */
      .swagger-ui .model-title {
        color: #065f46;
      }
      
      .swagger-ui .model-toggle {
        color: #065f46;
      }
      
      /* Parameter names */
      .swagger-ui .parameter__name {
        color: #065f46;
        font-weight: 600;
      }
      
      /* Required asterisk */
      .swagger-ui .parameter__name.required span {
        color: #ef4444;
      }
      
      /* Response status codes */
      .swagger-ui .response-col_status {
        color: #065f46;
        font-weight: 600;
      }
      
      /* Topbar (if shown) */
      .swagger-ui .topbar {
        background: #065f46;
      }
      
      .swagger-ui .topbar .download-url-wrapper .download-url-button {
        background: #10b981;
        color: white;
      }
      
      /* Code blocks */
      .swagger-ui .highlight-code {
        background: #f9fafb;
      }
      
      /* Operation summary hover */
      .swagger-ui .opblock-summary:hover {
        background: rgba(6, 95, 70, 0.05);
      }
      
      /* Expand/collapse arrow */
      .swagger-ui .expand-operation svg {
        fill: #065f46;
      }
      
      /* Remove purple colors - replace with green */
      .swagger-ui .highlight-code .hljs-string,
      .swagger-ui .highlight-code .hljs-attr {
        color: #059669 !important;
      }
      
      .swagger-ui .highlight-code .hljs-number,
      .swagger-ui .highlight-code .hljs-literal {
        color: #047857 !important;
      }
      
      .swagger-ui .highlight-code .hljs-keyword {
        color: #065f46 !important;
        font-weight: 600;
      }
      
      /* Property names in schemas */
      .swagger-ui .property-row .property {
        color: #065f46 !important;
      }
      
      /* Model property types */
      .swagger-ui .model .property.primitive {
        color: #047857 !important;
      }
      
      /* Remove any remaining purple/violet colors */
      .swagger-ui .markdown code,
      .swagger-ui code {
        color: #065f46 !important;
        background: #f0fdf4 !important;
      }
      
      /* Inline code in descriptions */
      .swagger-ui .renderedMarkdown code {
        color: #065f46 !important;
        background: #d1fae5 !important;
        padding: 2px 6px;
        border-radius: 3px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex-1 bg-white">
      <SwaggerUI
        url="/apispec.yaml"
        docExpansion="list"
        defaultModelsExpandDepth={1}
        defaultModelExpandDepth={1}
        displayRequestDuration={true}
        filter={true}
        showExtensions={true}
        showCommonExtensions={true}
      />
    </div>
  );
}
