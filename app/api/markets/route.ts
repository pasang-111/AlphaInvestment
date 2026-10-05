import { getMarkets } from "@/lib/markets";
export const dynamic = "force-dynamic";
export async function GET() { return Response.json(await getMarkets()); }
