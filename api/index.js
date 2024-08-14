export const config = {
  runtime: "edge",
};

// import condition from "@nitedani/vercel-edge-conditions";
import condition from "@nitedani/vercel-edge-conditions/internal-importer";

export const GET = () => {
  return new Response(condition);
};
