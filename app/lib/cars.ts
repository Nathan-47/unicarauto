import { sql } from "../lib/db";

const SORTS: Record<string, string> = {
  alpha: "name ASC",
  "price-asc": "price ASC",
  "price-desc": "price DESC",
  "age-desc": "year DESC",
  "age-asc": "year ASC",
};


export async function getCars(sort?: string, page = 1) {
  const orderBy = SORTS[sort ?? ""] ?? SORTS.alpha;

  return sql.query(`
    SELECT c.*, img.key AS image_key, img.alt AS image_alt
    FROM "Cars" c
    LEFT JOIN LATERAL (
      SELECT key, alt
      FROM car_images
      WHERE car_id = c.id
      ORDER BY position, id
      LIMIT 1
    ) img ON true
    ORDER BY c.${orderBy}`,
  );
}

export async function getCarCount() {
  const rows = await sql.query(`SELECT COUNT(*)::int AS count FROM "Cars"`);
  return rows[0].count as number;
}