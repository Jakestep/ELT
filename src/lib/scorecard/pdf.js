import { renderToBuffer } from "@react-pdf/renderer";
import ScorecardDoc from "./ScorecardDoc";

export async function generatePdf(data) {
  return await renderToBuffer(<ScorecardDoc {...data} />);
}
