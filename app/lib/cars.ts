import { sql } from "../lib/db";
import { Car, CarImage } from "./types";

export async function getCarById(id: string) {
  const [car] = (await sql`SELECT * FROM "Cars" WHERE id = ${id}`) as Car[];
  if (!car) return null;

  const images = (await sql`
    SELECT key, alt FROM car_images WHERE car_id = ${id} ORDER BY position, id
    `) as CarImage[];

  return { ...car, images };
}

const sortsValues: Record<string, string> = {
  alpha: "name ASC",
  "price-asc": "price ASC",
  "price-desc": "price DESC",
  "age-desc": "year DESC",
  "age-asc": "year ASC",
};

export const totalPages = 6;

export async function sortCars(sort?: string, page = 1) {
  const orderBy = sortsValues[sort ?? ""] ?? sortsValues.alpha;
  const offset = (page - 1) * totalPages;

  return sql.query(
    `
    SELECT c.*, img.key AS image_key, img.alt AS image_alt
    FROM "Cars" c
    LEFT JOIN LATERAL (
      SELECT key, alt
      FROM car_images
      WHERE car_id = c.id
      ORDER BY position, id
      LIMIT 1
    ) img ON true
    ORDER BY c.${orderBy}, c.id
    LIMIT $1 OFFSET $2`,
    [totalPages, offset],
  );
}

export async function getCarCount() {
  const result = await sql`SELECT COUNT(*) AS count FROM "Cars"`;
  return Number(result[0].count);
}
