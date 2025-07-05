import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}
export { formatDate }

function sanitizeHTML(html: string) {
  const window = new JSDOM("").window;
  const DOMPurifyServer = DOMPurify(window);
  return DOMPurifyServer.sanitize(html)
}
export { sanitizeHTML }