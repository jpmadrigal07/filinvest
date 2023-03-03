export async function getRequest(url: string, isSingle?: boolean) {
  const res = await fetch(`${process.env.CMS_URL}${url}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData = await res.json();
  return jsonData ? (isSingle ? jsonData.docs[0] : jsonData.docs) : null;
}
