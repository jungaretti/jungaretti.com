export function azureBlob(
  account: string,
  container: string,
  file: string
): string {
  return `https://${account}.blob.core.windows.net/${container}/${file}`;
}
