import { prismaClient } from "../data/prisma/init";

async function main() {
  console.log("Seeding data...");

  // Crear roles
  await prismaClient.role.createMany({
    data: [
      { name: "admin", description: "Administrador del sistema" },
      { name: "user", description: "Usuario estándar" },
    ],
    skipDuplicates: true,
  });

  // Crear tags globales (sin user_id)
  await prismaClient.tag.createMany({
    data: [
      { name: "personal", user_id: null },
      { name: "trabajo", user_id: null },
      { name: "ideas", user_id: null },
    ],
    skipDuplicates: true,
  });

  // Crear categorías globales (sin user_id)
  await prismaClient.category.createMany({
    data: [
      { name: "SALUD", color: "#1E90FF", user_id: null },
      { name: "GAMES", color: "#32CD32", user_id: null },
      { name: "ARTE", color: "#FF8C00", user_id: null },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
