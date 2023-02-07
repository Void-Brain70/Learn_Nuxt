import navbar from "../../public/data/navbar.json";
export default defineEventHandler((event) => {
  return { data: navbar };
});
