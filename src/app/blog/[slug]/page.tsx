import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [];
}

export default function BlogPost() {
  notFound();
}
