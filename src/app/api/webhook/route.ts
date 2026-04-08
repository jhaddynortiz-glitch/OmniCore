// src/app/api/webhook/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { phone, message, orgSlug, isFromMe = false } = body;

        // 1. Buscamos la organización por el slug (que creamos en el seed)
        const org = await db.organization.findUnique({
            where: { slug: orgSlug },
        });

        if (!org) {
            return NextResponse.json({ error: "Organización no encontrada" }, { status: 404 });
        }

        // 2. Buscamos el contacto o lo creamos si no existe (Upsert)
        const contact = await db.contact.upsert({
            where: {
                organizationId_phoneNumber: {
                    organizationId: org.id,
                    phoneNumber: phone,
                },
            },
            update: { name: "Cliente Nuevo" }, // Opcional: actualizar datos
            create: {
                phoneNumber: phone,
                organizationId: org.id,
                name: "Cliente Nuevo",
            },
        });

        // 3. Guardamos el mensaje interceptado
        const newMessage = await db.message.create({
            data: {
                body: message,
                contactId: contact.id,
                isFromMe: isFromMe,
            },
        });

        return NextResponse.json({ success: true, messageId: newMessage.id });
    } catch (error) {
        console.error("Error en Webhook:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}