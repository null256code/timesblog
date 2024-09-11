import { Brand } from "@/commons/type/brand";

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

type MicroCMSLogicalOperator = "and" | "or";

type MQValue = Brand<string, "MQValue">;
// eslint-disable-next-line no-unused-vars
type MQFunction = <T>(fieldName: keyof T, value: T[keyof T]) => MQValue;

export class MQ {
  private static execute = <T>(
    operator: MicroCMSFilterOperator,
    fieldName: keyof T,
    value?: T[keyof T],
  ) => `${String(fieldName)}[${operator}]${value ?? ""}` as MQValue;

  static equals: MQFunction = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("equals", fieldName, value);
  static notEquals: MQFunction = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("not_equals", fieldName, value);
  static contains: MQFunction = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("contains", fieldName, value);
  static notContains: MQFunction = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("not_contains", fieldName, value);
  static lessThan: MQFunction = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("less_than", fieldName, value);
  static greaterThan: MQFunction = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("greater_than", fieldName, value);
  static beginsWith: MQFunction = <T>(fieldName: keyof T, value: T[keyof T]) =>
    MQ.execute("begins_with", fieldName, value);

  static exists: MQFunction = <T>(fieldName: keyof T) =>
    MQ.execute("exists", fieldName);
  static notExists: MQFunction = <T>(fieldName: keyof T) =>
    MQ.execute("not_exists", fieldName);

  private static join = (
    operator: MicroCMSLogicalOperator,
    queries: ReturnType<MQFunction>[],
  ) => queries.join(`[${operator}]`);
  static all = (...queries: MQValue[]) => MQ.join("and", queries);
  static any = (...queries: MQValue[]) => MQ.join("or", queries);
}
