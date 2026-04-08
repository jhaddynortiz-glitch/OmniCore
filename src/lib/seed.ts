import { db } from "./db"

async function main() {
  // 1. Crear la organización
  const org = await db.organization.create({
    data: {
      name: "OmniCore Demo",
      slug: "omnicore-demo",
    },
  })

  // 2. Crear tu usuario administrador
  await db.user.create({
    data: {
      email: "jhaddyn@ejemplo.com", // Pon tu email real
      fullName: "Jhaddyn Brian",
      role: "admin",
      organizationId: org.id,
    },
  })

  console.log("✅ Datos iniciales creados con éxito")
}

main()