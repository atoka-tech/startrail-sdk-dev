"use client";

export default function Home() {
  return (
    <main>
      <p>{process.env.NEXT_PUBLIC_GOGH_API_HOSTNAME}</p>
    </main>
  );
}
