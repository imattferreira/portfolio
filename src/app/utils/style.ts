export function compose(...args: string[]): string {
  return args.reduce((acc, curr) => acc + ' ' + curr, '').trim();
}

export function optional(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  condition: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ifConditionTrue: any,
  ifConditionFalse = '',
) {
  return condition ? ifConditionTrue : ifConditionFalse;
}
