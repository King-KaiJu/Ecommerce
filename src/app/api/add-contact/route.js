import { NextResponse } from "next/server";

export async function POST(req, res) { 
        
    try {
        const data = await req.json();
      return NextResponse.json({ message: 'Ok', data });
    } catch (error) {
      return NextResponse.json({ message: 'Error', error });
    }
  }
  