export function compose(...args: string[]): string {
  return args.reduce((acc, curr) => acc + ' ' + curr, '').trim();
}

export function optional(
  condition: boolean | string,
  ifConditionTrue: string,
  ifConditionFalse = '',
) {
  return condition ? ifConditionTrue : ifConditionFalse;
}
