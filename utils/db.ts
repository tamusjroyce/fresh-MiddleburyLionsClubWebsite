const kv = await Deno.openKv("https://api.deno.com/databases/d1703754-670e-470a-aa3e-95660190a1d3/connect");

const PREFIX = ["count"];

export async function getCount() {
  const res = await kv.get<number>(PREFIX);
  return res.value;
}

export async function setCount(newCount: number) {
  await kv.set(PREFIX, newCount);
}
