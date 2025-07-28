export default function extractHTML(htmlString, selector) {

    if (typeof window !== "undefined") {

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        const element = doc.querySelector(selector);
        return element ? element.textContent.trim() : null;

    }else{
        return null;
    }
}
