export async function delay(sec: number) {
  return Promise.resolve(setTimeout(() => {}, sec * 100));
}
