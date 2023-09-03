export function compose(...args: string[]): string {
  return args.reduce((acc, curr) => acc + ' ' + curr, '').trim();
}
