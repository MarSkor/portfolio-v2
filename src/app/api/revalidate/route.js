import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { body, isValidSignature } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      const message = "Invalid signature";
      return new Response(JSON.stringify({ message, isValidSignature, body }), {
        status: 401,
      });
    } else if (!body?.path) {
      const message = "Bad Request";
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    revalidateTag(body._type);
    const message = `Updated route: ${body.path}`;
    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: message,
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
