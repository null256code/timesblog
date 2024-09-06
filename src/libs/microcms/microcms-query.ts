// NOTE: https://document.microcms.io/content-api/content-api-query
type MicroCMSFilterOperator =
  | "equals"
  | "not_equals"
  | "contains"
  | "not_contains"
  | "less_than"
  | "greater_than"
  | "begins_with"
  | "exists"
  | "not_exists";

// type MicroCMSLogicalOperator = "and" | "or";

export class MQ {
  private static execute = <T>(
    operator: MicroCMSFilterOperator,
    fieldName: keyof T,
    value?: T[keyof T],
  ) => `${String(fieldName)}[${operator}]${value ?? ""}`;

  static equals = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("equals", fieldName, value);
  static notEquals = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("not_equals", fieldName, value);
  static contains = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("contains", fieldName, value);
  static notContains = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("not_contains", fieldName, value);
  static lessThan = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("less_than", fieldName, value);
  static greaterThan = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("greater_than", fieldName, value);
  static beginsWith = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("begins_with", fieldName, value);

  static exists = <T>(fieldName: keyof T) => MQ.execute("exists", fieldName);
  static notExists = <T>(fieldName: keyof T) =>
    MQ.execute("not_exists", fieldName);
}
