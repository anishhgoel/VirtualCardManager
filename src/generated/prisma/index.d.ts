
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model Authorization
 * 
 */
export type Authorization = $Result.DefaultSelection<Prisma.$AuthorizationPayload>
/**
 * Model Rule
 * 
 */
export type Rule = $Result.DefaultSelection<Prisma.$RulePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RuleType: {
  SPEND_LIMIT: 'SPEND_LIMIT',
  MERCHANT_CATEGORY: 'MERCHANT_CATEGORY',
  TIME_WINDOW: 'TIME_WINDOW'
};

export type RuleType = (typeof RuleType)[keyof typeof RuleType]


export const SpendInterval: {
  DAILY: 'DAILY',
  MONTHLY: 'MONTHLY',
  LIFETIME: 'LIFETIME'
};

export type SpendInterval = (typeof SpendInterval)[keyof typeof SpendInterval]

}

export type RuleType = $Enums.RuleType

export const RuleType: typeof $Enums.RuleType

export type SpendInterval = $Enums.SpendInterval

export const SpendInterval: typeof $Enums.SpendInterval

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cards
 * const cards = await prisma.card.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cards
   * const cards = await prisma.card.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authorization`: Exposes CRUD operations for the **Authorization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authorizations
    * const authorizations = await prisma.authorization.findMany()
    * ```
    */
  get authorization(): Prisma.AuthorizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rule`: Exposes CRUD operations for the **Rule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rules
    * const rules = await prisma.rule.findMany()
    * ```
    */
  get rule(): Prisma.RuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Card: 'Card',
    Authorization: 'Authorization',
    Rule: 'Rule',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "card" | "authorization" | "rule" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      Authorization: {
        payload: Prisma.$AuthorizationPayload<ExtArgs>
        fields: Prisma.AuthorizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          findFirst: {
            args: Prisma.AuthorizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          findMany: {
            args: Prisma.AuthorizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>[]
          }
          create: {
            args: Prisma.AuthorizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          createMany: {
            args: Prisma.AuthorizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>[]
          }
          delete: {
            args: Prisma.AuthorizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          update: {
            args: Prisma.AuthorizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          deleteMany: {
            args: Prisma.AuthorizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>[]
          }
          upsert: {
            args: Prisma.AuthorizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorizationPayload>
          }
          aggregate: {
            args: Prisma.AuthorizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthorization>
          }
          groupBy: {
            args: Prisma.AuthorizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorizationCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorizationCountAggregateOutputType> | number
          }
        }
      }
      Rule: {
        payload: Prisma.$RulePayload<ExtArgs>
        fields: Prisma.RuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findFirst: {
            args: Prisma.RuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findMany: {
            args: Prisma.RuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          create: {
            args: Prisma.RuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          createMany: {
            args: Prisma.RuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          delete: {
            args: Prisma.RuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          update: {
            args: Prisma.RuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          deleteMany: {
            args: Prisma.RuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          upsert: {
            args: Prisma.RuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          aggregate: {
            args: Prisma.RuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRule>
          }
          groupBy: {
            args: Prisma.RuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleCountArgs<ExtArgs>
            result: $Utils.Optional<RuleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    card?: CardOmit
    authorization?: AuthorizationOmit
    rule?: RuleOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    authorizations: number
    rules: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorizations?: boolean | CardCountOutputTypeCountAuthorizationsArgs
    rules?: boolean | CardCountOutputTypeCountRulesArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountAuthorizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorizationWhereInput
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    cardholderId: string | null
    stripeId: string | null
    status: string | null
    description: string | null
    last4: string | null
    createdAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    cardholderId: string | null
    stripeId: string | null
    status: string | null
    description: string | null
    last4: string | null
    createdAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    cardholderId: number
    stripeId: number
    status: number
    description: number
    last4: number
    createdAt: number
    _all: number
  }


  export type CardMinAggregateInputType = {
    id?: true
    cardholderId?: true
    stripeId?: true
    status?: true
    description?: true
    last4?: true
    createdAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    cardholderId?: true
    stripeId?: true
    status?: true
    description?: true
    last4?: true
    createdAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    cardholderId?: true
    stripeId?: true
    status?: true
    description?: true
    last4?: true
    createdAt?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    cardholderId: string
    stripeId: string
    status: string
    description: string | null
    last4: string | null
    createdAt: Date
    _count: CardCountAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardholderId?: boolean
    stripeId?: boolean
    status?: boolean
    description?: boolean
    last4?: boolean
    createdAt?: boolean
    authorizations?: boolean | Card$authorizationsArgs<ExtArgs>
    rules?: boolean | Card$rulesArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardholderId?: boolean
    stripeId?: boolean
    status?: boolean
    description?: boolean
    last4?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardholderId?: boolean
    stripeId?: boolean
    status?: boolean
    description?: boolean
    last4?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    cardholderId?: boolean
    stripeId?: boolean
    status?: boolean
    description?: boolean
    last4?: boolean
    createdAt?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardholderId" | "stripeId" | "status" | "description" | "last4" | "createdAt", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authorizations?: boolean | Card$authorizationsArgs<ExtArgs>
    rules?: boolean | Card$rulesArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      authorizations: Prisma.$AuthorizationPayload<ExtArgs>[]
      rules: Prisma.$RulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardholderId: string
      stripeId: string
      status: string
      description: string | null
      last4: string | null
      createdAt: Date
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authorizations<T extends Card$authorizationsArgs<ExtArgs> = {}>(args?: Subset<T, Card$authorizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rules<T extends Card$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Card$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly cardholderId: FieldRef<"Card", 'String'>
    readonly stripeId: FieldRef<"Card", 'String'>
    readonly status: FieldRef<"Card", 'String'>
    readonly description: FieldRef<"Card", 'String'>
    readonly last4: FieldRef<"Card", 'String'>
    readonly createdAt: FieldRef<"Card", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.authorizations
   */
  export type Card$authorizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    where?: AuthorizationWhereInput
    orderBy?: AuthorizationOrderByWithRelationInput | AuthorizationOrderByWithRelationInput[]
    cursor?: AuthorizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorizationScalarFieldEnum | AuthorizationScalarFieldEnum[]
  }

  /**
   * Card.rules
   */
  export type Card$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    cursor?: RuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model Authorization
   */

  export type AggregateAuthorization = {
    _count: AuthorizationCountAggregateOutputType | null
    _avg: AuthorizationAvgAggregateOutputType | null
    _sum: AuthorizationSumAggregateOutputType | null
    _min: AuthorizationMinAggregateOutputType | null
    _max: AuthorizationMaxAggregateOutputType | null
  }

  export type AuthorizationAvgAggregateOutputType = {
    amountCents: number | null
  }

  export type AuthorizationSumAggregateOutputType = {
    amountCents: number | null
  }

  export type AuthorizationMinAggregateOutputType = {
    id: string | null
    stripeId: string | null
    cardId: string | null
    amountCents: number | null
    currency: string | null
    merchant: string | null
    decision: string | null
    createdAt: Date | null
  }

  export type AuthorizationMaxAggregateOutputType = {
    id: string | null
    stripeId: string | null
    cardId: string | null
    amountCents: number | null
    currency: string | null
    merchant: string | null
    decision: string | null
    createdAt: Date | null
  }

  export type AuthorizationCountAggregateOutputType = {
    id: number
    stripeId: number
    cardId: number
    amountCents: number
    currency: number
    merchant: number
    decision: number
    createdAt: number
    raw: number
    _all: number
  }


  export type AuthorizationAvgAggregateInputType = {
    amountCents?: true
  }

  export type AuthorizationSumAggregateInputType = {
    amountCents?: true
  }

  export type AuthorizationMinAggregateInputType = {
    id?: true
    stripeId?: true
    cardId?: true
    amountCents?: true
    currency?: true
    merchant?: true
    decision?: true
    createdAt?: true
  }

  export type AuthorizationMaxAggregateInputType = {
    id?: true
    stripeId?: true
    cardId?: true
    amountCents?: true
    currency?: true
    merchant?: true
    decision?: true
    createdAt?: true
  }

  export type AuthorizationCountAggregateInputType = {
    id?: true
    stripeId?: true
    cardId?: true
    amountCents?: true
    currency?: true
    merchant?: true
    decision?: true
    createdAt?: true
    raw?: true
    _all?: true
  }

  export type AuthorizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authorization to aggregate.
     */
    where?: AuthorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authorizations to fetch.
     */
    orderBy?: AuthorizationOrderByWithRelationInput | AuthorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authorizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authorizations
    **/
    _count?: true | AuthorizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorizationMaxAggregateInputType
  }

  export type GetAuthorizationAggregateType<T extends AuthorizationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorization[P]>
      : GetScalarType<T[P], AggregateAuthorization[P]>
  }




  export type AuthorizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorizationWhereInput
    orderBy?: AuthorizationOrderByWithAggregationInput | AuthorizationOrderByWithAggregationInput[]
    by: AuthorizationScalarFieldEnum[] | AuthorizationScalarFieldEnum
    having?: AuthorizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorizationCountAggregateInputType | true
    _avg?: AuthorizationAvgAggregateInputType
    _sum?: AuthorizationSumAggregateInputType
    _min?: AuthorizationMinAggregateInputType
    _max?: AuthorizationMaxAggregateInputType
  }

  export type AuthorizationGroupByOutputType = {
    id: string
    stripeId: string
    cardId: string
    amountCents: number
    currency: string
    merchant: string
    decision: string
    createdAt: Date
    raw: JsonValue
    _count: AuthorizationCountAggregateOutputType | null
    _avg: AuthorizationAvgAggregateOutputType | null
    _sum: AuthorizationSumAggregateOutputType | null
    _min: AuthorizationMinAggregateOutputType | null
    _max: AuthorizationMaxAggregateOutputType | null
  }

  type GetAuthorizationGroupByPayload<T extends AuthorizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorizationGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorizationGroupByOutputType[P]>
        }
      >
    >


  export type AuthorizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripeId?: boolean
    cardId?: boolean
    amountCents?: boolean
    currency?: boolean
    merchant?: boolean
    decision?: boolean
    createdAt?: boolean
    raw?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization"]>

  export type AuthorizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripeId?: boolean
    cardId?: boolean
    amountCents?: boolean
    currency?: boolean
    merchant?: boolean
    decision?: boolean
    createdAt?: boolean
    raw?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization"]>

  export type AuthorizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripeId?: boolean
    cardId?: boolean
    amountCents?: boolean
    currency?: boolean
    merchant?: boolean
    decision?: boolean
    createdAt?: boolean
    raw?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorization"]>

  export type AuthorizationSelectScalar = {
    id?: boolean
    stripeId?: boolean
    cardId?: boolean
    amountCents?: boolean
    currency?: boolean
    merchant?: boolean
    decision?: boolean
    createdAt?: boolean
    raw?: boolean
  }

  export type AuthorizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stripeId" | "cardId" | "amountCents" | "currency" | "merchant" | "decision" | "createdAt" | "raw", ExtArgs["result"]["authorization"]>
  export type AuthorizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type AuthorizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type AuthorizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $AuthorizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authorization"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stripeId: string
      cardId: string
      amountCents: number
      currency: string
      merchant: string
      decision: string
      createdAt: Date
      raw: Prisma.JsonValue
    }, ExtArgs["result"]["authorization"]>
    composites: {}
  }

  type AuthorizationGetPayload<S extends boolean | null | undefined | AuthorizationDefaultArgs> = $Result.GetResult<Prisma.$AuthorizationPayload, S>

  type AuthorizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorizationCountAggregateInputType | true
    }

  export interface AuthorizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authorization'], meta: { name: 'Authorization' } }
    /**
     * Find zero or one Authorization that matches the filter.
     * @param {AuthorizationFindUniqueArgs} args - Arguments to find a Authorization
     * @example
     * // Get one Authorization
     * const authorization = await prisma.authorization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorizationFindUniqueArgs>(args: SelectSubset<T, AuthorizationFindUniqueArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authorization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorizationFindUniqueOrThrowArgs} args - Arguments to find a Authorization
     * @example
     * // Get one Authorization
     * const authorization = await prisma.authorization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorizationFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authorization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationFindFirstArgs} args - Arguments to find a Authorization
     * @example
     * // Get one Authorization
     * const authorization = await prisma.authorization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorizationFindFirstArgs>(args?: SelectSubset<T, AuthorizationFindFirstArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authorization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationFindFirstOrThrowArgs} args - Arguments to find a Authorization
     * @example
     * // Get one Authorization
     * const authorization = await prisma.authorization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorizationFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authorizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authorizations
     * const authorizations = await prisma.authorization.findMany()
     * 
     * // Get first 10 Authorizations
     * const authorizations = await prisma.authorization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorizationWithIdOnly = await prisma.authorization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorizationFindManyArgs>(args?: SelectSubset<T, AuthorizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authorization.
     * @param {AuthorizationCreateArgs} args - Arguments to create a Authorization.
     * @example
     * // Create one Authorization
     * const Authorization = await prisma.authorization.create({
     *   data: {
     *     // ... data to create a Authorization
     *   }
     * })
     * 
     */
    create<T extends AuthorizationCreateArgs>(args: SelectSubset<T, AuthorizationCreateArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authorizations.
     * @param {AuthorizationCreateManyArgs} args - Arguments to create many Authorizations.
     * @example
     * // Create many Authorizations
     * const authorization = await prisma.authorization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorizationCreateManyArgs>(args?: SelectSubset<T, AuthorizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authorizations and returns the data saved in the database.
     * @param {AuthorizationCreateManyAndReturnArgs} args - Arguments to create many Authorizations.
     * @example
     * // Create many Authorizations
     * const authorization = await prisma.authorization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authorizations and only return the `id`
     * const authorizationWithIdOnly = await prisma.authorization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorizationCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authorization.
     * @param {AuthorizationDeleteArgs} args - Arguments to delete one Authorization.
     * @example
     * // Delete one Authorization
     * const Authorization = await prisma.authorization.delete({
     *   where: {
     *     // ... filter to delete one Authorization
     *   }
     * })
     * 
     */
    delete<T extends AuthorizationDeleteArgs>(args: SelectSubset<T, AuthorizationDeleteArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authorization.
     * @param {AuthorizationUpdateArgs} args - Arguments to update one Authorization.
     * @example
     * // Update one Authorization
     * const authorization = await prisma.authorization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorizationUpdateArgs>(args: SelectSubset<T, AuthorizationUpdateArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authorizations.
     * @param {AuthorizationDeleteManyArgs} args - Arguments to filter Authorizations to delete.
     * @example
     * // Delete a few Authorizations
     * const { count } = await prisma.authorization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorizationDeleteManyArgs>(args?: SelectSubset<T, AuthorizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authorizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authorizations
     * const authorization = await prisma.authorization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorizationUpdateManyArgs>(args: SelectSubset<T, AuthorizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authorizations and returns the data updated in the database.
     * @param {AuthorizationUpdateManyAndReturnArgs} args - Arguments to update many Authorizations.
     * @example
     * // Update many Authorizations
     * const authorization = await prisma.authorization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authorizations and only return the `id`
     * const authorizationWithIdOnly = await prisma.authorization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorizationUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authorization.
     * @param {AuthorizationUpsertArgs} args - Arguments to update or create a Authorization.
     * @example
     * // Update or create a Authorization
     * const authorization = await prisma.authorization.upsert({
     *   create: {
     *     // ... data to create a Authorization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authorization we want to update
     *   }
     * })
     */
    upsert<T extends AuthorizationUpsertArgs>(args: SelectSubset<T, AuthorizationUpsertArgs<ExtArgs>>): Prisma__AuthorizationClient<$Result.GetResult<Prisma.$AuthorizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authorizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationCountArgs} args - Arguments to filter Authorizations to count.
     * @example
     * // Count the number of Authorizations
     * const count = await prisma.authorization.count({
     *   where: {
     *     // ... the filter for the Authorizations we want to count
     *   }
     * })
    **/
    count<T extends AuthorizationCountArgs>(
      args?: Subset<T, AuthorizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authorization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorizationAggregateArgs>(args: Subset<T, AuthorizationAggregateArgs>): Prisma.PrismaPromise<GetAuthorizationAggregateType<T>>

    /**
     * Group by Authorization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorizationGroupByArgs['orderBy'] }
        : { orderBy?: AuthorizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authorization model
   */
  readonly fields: AuthorizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authorization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Authorization model
   */
  interface AuthorizationFieldRefs {
    readonly id: FieldRef<"Authorization", 'String'>
    readonly stripeId: FieldRef<"Authorization", 'String'>
    readonly cardId: FieldRef<"Authorization", 'String'>
    readonly amountCents: FieldRef<"Authorization", 'Int'>
    readonly currency: FieldRef<"Authorization", 'String'>
    readonly merchant: FieldRef<"Authorization", 'String'>
    readonly decision: FieldRef<"Authorization", 'String'>
    readonly createdAt: FieldRef<"Authorization", 'DateTime'>
    readonly raw: FieldRef<"Authorization", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Authorization findUnique
   */
  export type AuthorizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter, which Authorization to fetch.
     */
    where: AuthorizationWhereUniqueInput
  }

  /**
   * Authorization findUniqueOrThrow
   */
  export type AuthorizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter, which Authorization to fetch.
     */
    where: AuthorizationWhereUniqueInput
  }

  /**
   * Authorization findFirst
   */
  export type AuthorizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter, which Authorization to fetch.
     */
    where?: AuthorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authorizations to fetch.
     */
    orderBy?: AuthorizationOrderByWithRelationInput | AuthorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authorizations.
     */
    cursor?: AuthorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authorizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authorizations.
     */
    distinct?: AuthorizationScalarFieldEnum | AuthorizationScalarFieldEnum[]
  }

  /**
   * Authorization findFirstOrThrow
   */
  export type AuthorizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter, which Authorization to fetch.
     */
    where?: AuthorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authorizations to fetch.
     */
    orderBy?: AuthorizationOrderByWithRelationInput | AuthorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authorizations.
     */
    cursor?: AuthorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authorizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authorizations.
     */
    distinct?: AuthorizationScalarFieldEnum | AuthorizationScalarFieldEnum[]
  }

  /**
   * Authorization findMany
   */
  export type AuthorizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter, which Authorizations to fetch.
     */
    where?: AuthorizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authorizations to fetch.
     */
    orderBy?: AuthorizationOrderByWithRelationInput | AuthorizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authorizations.
     */
    cursor?: AuthorizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authorizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authorizations.
     */
    skip?: number
    distinct?: AuthorizationScalarFieldEnum | AuthorizationScalarFieldEnum[]
  }

  /**
   * Authorization create
   */
  export type AuthorizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Authorization.
     */
    data: XOR<AuthorizationCreateInput, AuthorizationUncheckedCreateInput>
  }

  /**
   * Authorization createMany
   */
  export type AuthorizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authorizations.
     */
    data: AuthorizationCreateManyInput | AuthorizationCreateManyInput[]
  }

  /**
   * Authorization createManyAndReturn
   */
  export type AuthorizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * The data used to create many Authorizations.
     */
    data: AuthorizationCreateManyInput | AuthorizationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authorization update
   */
  export type AuthorizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Authorization.
     */
    data: XOR<AuthorizationUpdateInput, AuthorizationUncheckedUpdateInput>
    /**
     * Choose, which Authorization to update.
     */
    where: AuthorizationWhereUniqueInput
  }

  /**
   * Authorization updateMany
   */
  export type AuthorizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authorizations.
     */
    data: XOR<AuthorizationUpdateManyMutationInput, AuthorizationUncheckedUpdateManyInput>
    /**
     * Filter which Authorizations to update
     */
    where?: AuthorizationWhereInput
    /**
     * Limit how many Authorizations to update.
     */
    limit?: number
  }

  /**
   * Authorization updateManyAndReturn
   */
  export type AuthorizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * The data used to update Authorizations.
     */
    data: XOR<AuthorizationUpdateManyMutationInput, AuthorizationUncheckedUpdateManyInput>
    /**
     * Filter which Authorizations to update
     */
    where?: AuthorizationWhereInput
    /**
     * Limit how many Authorizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Authorization upsert
   */
  export type AuthorizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Authorization to update in case it exists.
     */
    where: AuthorizationWhereUniqueInput
    /**
     * In case the Authorization found by the `where` argument doesn't exist, create a new Authorization with this data.
     */
    create: XOR<AuthorizationCreateInput, AuthorizationUncheckedCreateInput>
    /**
     * In case the Authorization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorizationUpdateInput, AuthorizationUncheckedUpdateInput>
  }

  /**
   * Authorization delete
   */
  export type AuthorizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
    /**
     * Filter which Authorization to delete.
     */
    where: AuthorizationWhereUniqueInput
  }

  /**
   * Authorization deleteMany
   */
  export type AuthorizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authorizations to delete
     */
    where?: AuthorizationWhereInput
    /**
     * Limit how many Authorizations to delete.
     */
    limit?: number
  }

  /**
   * Authorization without action
   */
  export type AuthorizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authorization
     */
    select?: AuthorizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authorization
     */
    omit?: AuthorizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorizationInclude<ExtArgs> | null
  }


  /**
   * Model Rule
   */

  export type AggregateRule = {
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  export type RuleAvgAggregateOutputType = {
    spendLimitCents: number | null
    allowedHourStart: number | null
    allowedHourEnd: number | null
  }

  export type RuleSumAggregateOutputType = {
    spendLimitCents: number | null
    allowedHourStart: number | null
    allowedHourEnd: number | null
  }

  export type RuleMinAggregateOutputType = {
    id: string | null
    cardId: string | null
    type: $Enums.RuleType | null
    spendLimitCents: number | null
    spendInterval: $Enums.SpendInterval | null
    merchantAllowList: string | null
    merchantBlockList: string | null
    categoryAllowList: string | null
    categoryBlockList: string | null
    allowedWeekdays: string | null
    allowedHourStart: number | null
    allowedHourEnd: number | null
    createdAt: Date | null
  }

  export type RuleMaxAggregateOutputType = {
    id: string | null
    cardId: string | null
    type: $Enums.RuleType | null
    spendLimitCents: number | null
    spendInterval: $Enums.SpendInterval | null
    merchantAllowList: string | null
    merchantBlockList: string | null
    categoryAllowList: string | null
    categoryBlockList: string | null
    allowedWeekdays: string | null
    allowedHourStart: number | null
    allowedHourEnd: number | null
    createdAt: Date | null
  }

  export type RuleCountAggregateOutputType = {
    id: number
    cardId: number
    type: number
    spendLimitCents: number
    spendInterval: number
    merchantAllowList: number
    merchantBlockList: number
    categoryAllowList: number
    categoryBlockList: number
    allowedWeekdays: number
    allowedHourStart: number
    allowedHourEnd: number
    createdAt: number
    _all: number
  }


  export type RuleAvgAggregateInputType = {
    spendLimitCents?: true
    allowedHourStart?: true
    allowedHourEnd?: true
  }

  export type RuleSumAggregateInputType = {
    spendLimitCents?: true
    allowedHourStart?: true
    allowedHourEnd?: true
  }

  export type RuleMinAggregateInputType = {
    id?: true
    cardId?: true
    type?: true
    spendLimitCents?: true
    spendInterval?: true
    merchantAllowList?: true
    merchantBlockList?: true
    categoryAllowList?: true
    categoryBlockList?: true
    allowedWeekdays?: true
    allowedHourStart?: true
    allowedHourEnd?: true
    createdAt?: true
  }

  export type RuleMaxAggregateInputType = {
    id?: true
    cardId?: true
    type?: true
    spendLimitCents?: true
    spendInterval?: true
    merchantAllowList?: true
    merchantBlockList?: true
    categoryAllowList?: true
    categoryBlockList?: true
    allowedWeekdays?: true
    allowedHourStart?: true
    allowedHourEnd?: true
    createdAt?: true
  }

  export type RuleCountAggregateInputType = {
    id?: true
    cardId?: true
    type?: true
    spendLimitCents?: true
    spendInterval?: true
    merchantAllowList?: true
    merchantBlockList?: true
    categoryAllowList?: true
    categoryBlockList?: true
    allowedWeekdays?: true
    allowedHourStart?: true
    allowedHourEnd?: true
    createdAt?: true
    _all?: true
  }

  export type RuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rule to aggregate.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rules
    **/
    _count?: true | RuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleMaxAggregateInputType
  }

  export type GetRuleAggregateType<T extends RuleAggregateArgs> = {
        [P in keyof T & keyof AggregateRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRule[P]>
      : GetScalarType<T[P], AggregateRule[P]>
  }




  export type RuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithAggregationInput | RuleOrderByWithAggregationInput[]
    by: RuleScalarFieldEnum[] | RuleScalarFieldEnum
    having?: RuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleCountAggregateInputType | true
    _avg?: RuleAvgAggregateInputType
    _sum?: RuleSumAggregateInputType
    _min?: RuleMinAggregateInputType
    _max?: RuleMaxAggregateInputType
  }

  export type RuleGroupByOutputType = {
    id: string
    cardId: string
    type: $Enums.RuleType
    spendLimitCents: number | null
    spendInterval: $Enums.SpendInterval | null
    merchantAllowList: string | null
    merchantBlockList: string | null
    categoryAllowList: string | null
    categoryBlockList: string | null
    allowedWeekdays: string | null
    allowedHourStart: number | null
    allowedHourEnd: number | null
    createdAt: Date
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  type GetRuleGroupByPayload<T extends RuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleGroupByOutputType[P]>
            : GetScalarType<T[P], RuleGroupByOutputType[P]>
        }
      >
    >


  export type RuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    type?: boolean
    spendLimitCents?: boolean
    spendInterval?: boolean
    merchantAllowList?: boolean
    merchantBlockList?: boolean
    categoryAllowList?: boolean
    categoryBlockList?: boolean
    allowedWeekdays?: boolean
    allowedHourStart?: boolean
    allowedHourEnd?: boolean
    createdAt?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    type?: boolean
    spendLimitCents?: boolean
    spendInterval?: boolean
    merchantAllowList?: boolean
    merchantBlockList?: boolean
    categoryAllowList?: boolean
    categoryBlockList?: boolean
    allowedWeekdays?: boolean
    allowedHourStart?: boolean
    allowedHourEnd?: boolean
    createdAt?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cardId?: boolean
    type?: boolean
    spendLimitCents?: boolean
    spendInterval?: boolean
    merchantAllowList?: boolean
    merchantBlockList?: boolean
    categoryAllowList?: boolean
    categoryBlockList?: boolean
    allowedWeekdays?: boolean
    allowedHourStart?: boolean
    allowedHourEnd?: boolean
    createdAt?: boolean
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectScalar = {
    id?: boolean
    cardId?: boolean
    type?: boolean
    spendLimitCents?: boolean
    spendInterval?: boolean
    merchantAllowList?: boolean
    merchantBlockList?: boolean
    categoryAllowList?: boolean
    categoryBlockList?: boolean
    allowedWeekdays?: boolean
    allowedHourStart?: boolean
    allowedHourEnd?: boolean
    createdAt?: boolean
  }

  export type RuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cardId" | "type" | "spendLimitCents" | "spendInterval" | "merchantAllowList" | "merchantBlockList" | "categoryAllowList" | "categoryBlockList" | "allowedWeekdays" | "allowedHourStart" | "allowedHourEnd" | "createdAt", ExtArgs["result"]["rule"]>
  export type RuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type RuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type RuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $RulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rule"
    objects: {
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cardId: string
      type: $Enums.RuleType
      spendLimitCents: number | null
      spendInterval: $Enums.SpendInterval | null
      merchantAllowList: string | null
      merchantBlockList: string | null
      categoryAllowList: string | null
      categoryBlockList: string | null
      allowedWeekdays: string | null
      allowedHourStart: number | null
      allowedHourEnd: number | null
      createdAt: Date
    }, ExtArgs["result"]["rule"]>
    composites: {}
  }

  type RuleGetPayload<S extends boolean | null | undefined | RuleDefaultArgs> = $Result.GetResult<Prisma.$RulePayload, S>

  type RuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleCountAggregateInputType | true
    }

  export interface RuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rule'], meta: { name: 'Rule' } }
    /**
     * Find zero or one Rule that matches the filter.
     * @param {RuleFindUniqueArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleFindUniqueArgs>(args: SelectSubset<T, RuleFindUniqueArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleFindUniqueOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleFindFirstArgs>(args?: SelectSubset<T, RuleFindFirstArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rules
     * const rules = await prisma.rule.findMany()
     * 
     * // Get first 10 Rules
     * const rules = await prisma.rule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleWithIdOnly = await prisma.rule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleFindManyArgs>(args?: SelectSubset<T, RuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rule.
     * @param {RuleCreateArgs} args - Arguments to create a Rule.
     * @example
     * // Create one Rule
     * const Rule = await prisma.rule.create({
     *   data: {
     *     // ... data to create a Rule
     *   }
     * })
     * 
     */
    create<T extends RuleCreateArgs>(args: SelectSubset<T, RuleCreateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rules.
     * @param {RuleCreateManyArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleCreateManyArgs>(args?: SelectSubset<T, RuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rules and returns the data saved in the database.
     * @param {RuleCreateManyAndReturnArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuleCreateManyAndReturnArgs>(args?: SelectSubset<T, RuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rule.
     * @param {RuleDeleteArgs} args - Arguments to delete one Rule.
     * @example
     * // Delete one Rule
     * const Rule = await prisma.rule.delete({
     *   where: {
     *     // ... filter to delete one Rule
     *   }
     * })
     * 
     */
    delete<T extends RuleDeleteArgs>(args: SelectSubset<T, RuleDeleteArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rule.
     * @param {RuleUpdateArgs} args - Arguments to update one Rule.
     * @example
     * // Update one Rule
     * const rule = await prisma.rule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleUpdateArgs>(args: SelectSubset<T, RuleUpdateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rules.
     * @param {RuleDeleteManyArgs} args - Arguments to filter Rules to delete.
     * @example
     * // Delete a few Rules
     * const { count } = await prisma.rule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleDeleteManyArgs>(args?: SelectSubset<T, RuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleUpdateManyArgs>(args: SelectSubset<T, RuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules and returns the data updated in the database.
     * @param {RuleUpdateManyAndReturnArgs} args - Arguments to update many Rules.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RuleUpdateManyAndReturnArgs>(args: SelectSubset<T, RuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rule.
     * @param {RuleUpsertArgs} args - Arguments to update or create a Rule.
     * @example
     * // Update or create a Rule
     * const rule = await prisma.rule.upsert({
     *   create: {
     *     // ... data to create a Rule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rule we want to update
     *   }
     * })
     */
    upsert<T extends RuleUpsertArgs>(args: SelectSubset<T, RuleUpsertArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleCountArgs} args - Arguments to filter Rules to count.
     * @example
     * // Count the number of Rules
     * const count = await prisma.rule.count({
     *   where: {
     *     // ... the filter for the Rules we want to count
     *   }
     * })
    **/
    count<T extends RuleCountArgs>(
      args?: Subset<T, RuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RuleAggregateArgs>(args: Subset<T, RuleAggregateArgs>): Prisma.PrismaPromise<GetRuleAggregateType<T>>

    /**
     * Group by Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleGroupByArgs['orderBy'] }
        : { orderBy?: RuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rule model
   */
  readonly fields: RuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rule model
   */
  interface RuleFieldRefs {
    readonly id: FieldRef<"Rule", 'String'>
    readonly cardId: FieldRef<"Rule", 'String'>
    readonly type: FieldRef<"Rule", 'RuleType'>
    readonly spendLimitCents: FieldRef<"Rule", 'Int'>
    readonly spendInterval: FieldRef<"Rule", 'SpendInterval'>
    readonly merchantAllowList: FieldRef<"Rule", 'String'>
    readonly merchantBlockList: FieldRef<"Rule", 'String'>
    readonly categoryAllowList: FieldRef<"Rule", 'String'>
    readonly categoryBlockList: FieldRef<"Rule", 'String'>
    readonly allowedWeekdays: FieldRef<"Rule", 'String'>
    readonly allowedHourStart: FieldRef<"Rule", 'Int'>
    readonly allowedHourEnd: FieldRef<"Rule", 'Int'>
    readonly createdAt: FieldRef<"Rule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rule findUnique
   */
  export type RuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findUniqueOrThrow
   */
  export type RuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findFirst
   */
  export type RuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findFirstOrThrow
   */
  export type RuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findMany
   */
  export type RuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule create
   */
  export type RuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Rule.
     */
    data: XOR<RuleCreateInput, RuleUncheckedCreateInput>
  }

  /**
   * Rule createMany
   */
  export type RuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
  }

  /**
   * Rule createManyAndReturn
   */
  export type RuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule update
   */
  export type RuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Rule.
     */
    data: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
    /**
     * Choose, which Rule to update.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule updateMany
   */
  export type RuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
  }

  /**
   * Rule updateManyAndReturn
   */
  export type RuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule upsert
   */
  export type RuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Rule to update in case it exists.
     */
    where: RuleWhereUniqueInput
    /**
     * In case the Rule found by the `where` argument doesn't exist, create a new Rule with this data.
     */
    create: XOR<RuleCreateInput, RuleUncheckedCreateInput>
    /**
     * In case the Rule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
  }

  /**
   * Rule delete
   */
  export type RuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter which Rule to delete.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule deleteMany
   */
  export type RuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rules to delete
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to delete.
     */
    limit?: number
  }

  /**
   * Rule without action
   */
  export type RuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    cardholderId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    cardholderId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    cardholderId: number
    name: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    cardholderId?: true
    name?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    cardholderId?: true
    name?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    cardholderId?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    cardholderId: string
    name: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    cardholderId?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    cardholderId?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    cardholderId?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    cardholderId?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "cardholderId" | "name" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      cardholderId: string
      name: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly cardholderId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CardScalarFieldEnum: {
    id: 'id',
    cardholderId: 'cardholderId',
    stripeId: 'stripeId',
    status: 'status',
    description: 'description',
    last4: 'last4',
    createdAt: 'createdAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const AuthorizationScalarFieldEnum: {
    id: 'id',
    stripeId: 'stripeId',
    cardId: 'cardId',
    amountCents: 'amountCents',
    currency: 'currency',
    merchant: 'merchant',
    decision: 'decision',
    createdAt: 'createdAt',
    raw: 'raw'
  };

  export type AuthorizationScalarFieldEnum = (typeof AuthorizationScalarFieldEnum)[keyof typeof AuthorizationScalarFieldEnum]


  export const RuleScalarFieldEnum: {
    id: 'id',
    cardId: 'cardId',
    type: 'type',
    spendLimitCents: 'spendLimitCents',
    spendInterval: 'spendInterval',
    merchantAllowList: 'merchantAllowList',
    merchantBlockList: 'merchantBlockList',
    categoryAllowList: 'categoryAllowList',
    categoryBlockList: 'categoryBlockList',
    allowedWeekdays: 'allowedWeekdays',
    allowedHourStart: 'allowedHourStart',
    allowedHourEnd: 'allowedHourEnd',
    createdAt: 'createdAt'
  };

  export type RuleScalarFieldEnum = (typeof RuleScalarFieldEnum)[keyof typeof RuleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    cardholderId: 'cardholderId',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'RuleType'
   */
  export type EnumRuleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RuleType'>
    


  /**
   * Reference to a field of type 'SpendInterval'
   */
  export type EnumSpendIntervalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpendInterval'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: StringFilter<"Card"> | string
    cardholderId?: StringFilter<"Card"> | string
    stripeId?: StringFilter<"Card"> | string
    status?: StringFilter<"Card"> | string
    description?: StringNullableFilter<"Card"> | string | null
    last4?: StringNullableFilter<"Card"> | string | null
    createdAt?: DateTimeFilter<"Card"> | Date | string
    authorizations?: AuthorizationListRelationFilter
    rules?: RuleListRelationFilter
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    cardholderId?: SortOrder
    stripeId?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    last4?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    authorizations?: AuthorizationOrderByRelationAggregateInput
    rules?: RuleOrderByRelationAggregateInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeId?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    cardholderId?: StringFilter<"Card"> | string
    status?: StringFilter<"Card"> | string
    description?: StringNullableFilter<"Card"> | string | null
    last4?: StringNullableFilter<"Card"> | string | null
    createdAt?: DateTimeFilter<"Card"> | Date | string
    authorizations?: AuthorizationListRelationFilter
    rules?: RuleListRelationFilter
  }, "id" | "stripeId">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    cardholderId?: SortOrder
    stripeId?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    last4?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Card"> | string
    cardholderId?: StringWithAggregatesFilter<"Card"> | string
    stripeId?: StringWithAggregatesFilter<"Card"> | string
    status?: StringWithAggregatesFilter<"Card"> | string
    description?: StringNullableWithAggregatesFilter<"Card"> | string | null
    last4?: StringNullableWithAggregatesFilter<"Card"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
  }

  export type AuthorizationWhereInput = {
    AND?: AuthorizationWhereInput | AuthorizationWhereInput[]
    OR?: AuthorizationWhereInput[]
    NOT?: AuthorizationWhereInput | AuthorizationWhereInput[]
    id?: StringFilter<"Authorization"> | string
    stripeId?: StringFilter<"Authorization"> | string
    cardId?: StringFilter<"Authorization"> | string
    amountCents?: IntFilter<"Authorization"> | number
    currency?: StringFilter<"Authorization"> | string
    merchant?: StringFilter<"Authorization"> | string
    decision?: StringFilter<"Authorization"> | string
    createdAt?: DateTimeFilter<"Authorization"> | Date | string
    raw?: JsonFilter<"Authorization">
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type AuthorizationOrderByWithRelationInput = {
    id?: SortOrder
    stripeId?: SortOrder
    cardId?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    merchant?: SortOrder
    decision?: SortOrder
    createdAt?: SortOrder
    raw?: SortOrder
    card?: CardOrderByWithRelationInput
  }

  export type AuthorizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeId?: string
    AND?: AuthorizationWhereInput | AuthorizationWhereInput[]
    OR?: AuthorizationWhereInput[]
    NOT?: AuthorizationWhereInput | AuthorizationWhereInput[]
    cardId?: StringFilter<"Authorization"> | string
    amountCents?: IntFilter<"Authorization"> | number
    currency?: StringFilter<"Authorization"> | string
    merchant?: StringFilter<"Authorization"> | string
    decision?: StringFilter<"Authorization"> | string
    createdAt?: DateTimeFilter<"Authorization"> | Date | string
    raw?: JsonFilter<"Authorization">
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id" | "stripeId">

  export type AuthorizationOrderByWithAggregationInput = {
    id?: SortOrder
    stripeId?: SortOrder
    cardId?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    merchant?: SortOrder
    decision?: SortOrder
    createdAt?: SortOrder
    raw?: SortOrder
    _count?: AuthorizationCountOrderByAggregateInput
    _avg?: AuthorizationAvgOrderByAggregateInput
    _max?: AuthorizationMaxOrderByAggregateInput
    _min?: AuthorizationMinOrderByAggregateInput
    _sum?: AuthorizationSumOrderByAggregateInput
  }

  export type AuthorizationScalarWhereWithAggregatesInput = {
    AND?: AuthorizationScalarWhereWithAggregatesInput | AuthorizationScalarWhereWithAggregatesInput[]
    OR?: AuthorizationScalarWhereWithAggregatesInput[]
    NOT?: AuthorizationScalarWhereWithAggregatesInput | AuthorizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Authorization"> | string
    stripeId?: StringWithAggregatesFilter<"Authorization"> | string
    cardId?: StringWithAggregatesFilter<"Authorization"> | string
    amountCents?: IntWithAggregatesFilter<"Authorization"> | number
    currency?: StringWithAggregatesFilter<"Authorization"> | string
    merchant?: StringWithAggregatesFilter<"Authorization"> | string
    decision?: StringWithAggregatesFilter<"Authorization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Authorization"> | Date | string
    raw?: JsonWithAggregatesFilter<"Authorization">
  }

  export type RuleWhereInput = {
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    id?: StringFilter<"Rule"> | string
    cardId?: StringFilter<"Rule"> | string
    type?: EnumRuleTypeFilter<"Rule"> | $Enums.RuleType
    spendLimitCents?: IntNullableFilter<"Rule"> | number | null
    spendInterval?: EnumSpendIntervalNullableFilter<"Rule"> | $Enums.SpendInterval | null
    merchantAllowList?: StringNullableFilter<"Rule"> | string | null
    merchantBlockList?: StringNullableFilter<"Rule"> | string | null
    categoryAllowList?: StringNullableFilter<"Rule"> | string | null
    categoryBlockList?: StringNullableFilter<"Rule"> | string | null
    allowedWeekdays?: StringNullableFilter<"Rule"> | string | null
    allowedHourStart?: IntNullableFilter<"Rule"> | number | null
    allowedHourEnd?: IntNullableFilter<"Rule"> | number | null
    createdAt?: DateTimeFilter<"Rule"> | Date | string
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type RuleOrderByWithRelationInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    spendLimitCents?: SortOrderInput | SortOrder
    spendInterval?: SortOrderInput | SortOrder
    merchantAllowList?: SortOrderInput | SortOrder
    merchantBlockList?: SortOrderInput | SortOrder
    categoryAllowList?: SortOrderInput | SortOrder
    categoryBlockList?: SortOrderInput | SortOrder
    allowedWeekdays?: SortOrderInput | SortOrder
    allowedHourStart?: SortOrderInput | SortOrder
    allowedHourEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    card?: CardOrderByWithRelationInput
  }

  export type RuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    cardId?: StringFilter<"Rule"> | string
    type?: EnumRuleTypeFilter<"Rule"> | $Enums.RuleType
    spendLimitCents?: IntNullableFilter<"Rule"> | number | null
    spendInterval?: EnumSpendIntervalNullableFilter<"Rule"> | $Enums.SpendInterval | null
    merchantAllowList?: StringNullableFilter<"Rule"> | string | null
    merchantBlockList?: StringNullableFilter<"Rule"> | string | null
    categoryAllowList?: StringNullableFilter<"Rule"> | string | null
    categoryBlockList?: StringNullableFilter<"Rule"> | string | null
    allowedWeekdays?: StringNullableFilter<"Rule"> | string | null
    allowedHourStart?: IntNullableFilter<"Rule"> | number | null
    allowedHourEnd?: IntNullableFilter<"Rule"> | number | null
    createdAt?: DateTimeFilter<"Rule"> | Date | string
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id">

  export type RuleOrderByWithAggregationInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    spendLimitCents?: SortOrderInput | SortOrder
    spendInterval?: SortOrderInput | SortOrder
    merchantAllowList?: SortOrderInput | SortOrder
    merchantBlockList?: SortOrderInput | SortOrder
    categoryAllowList?: SortOrderInput | SortOrder
    categoryBlockList?: SortOrderInput | SortOrder
    allowedWeekdays?: SortOrderInput | SortOrder
    allowedHourStart?: SortOrderInput | SortOrder
    allowedHourEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RuleCountOrderByAggregateInput
    _avg?: RuleAvgOrderByAggregateInput
    _max?: RuleMaxOrderByAggregateInput
    _min?: RuleMinOrderByAggregateInput
    _sum?: RuleSumOrderByAggregateInput
  }

  export type RuleScalarWhereWithAggregatesInput = {
    AND?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    OR?: RuleScalarWhereWithAggregatesInput[]
    NOT?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rule"> | string
    cardId?: StringWithAggregatesFilter<"Rule"> | string
    type?: EnumRuleTypeWithAggregatesFilter<"Rule"> | $Enums.RuleType
    spendLimitCents?: IntNullableWithAggregatesFilter<"Rule"> | number | null
    spendInterval?: EnumSpendIntervalNullableWithAggregatesFilter<"Rule"> | $Enums.SpendInterval | null
    merchantAllowList?: StringNullableWithAggregatesFilter<"Rule"> | string | null
    merchantBlockList?: StringNullableWithAggregatesFilter<"Rule"> | string | null
    categoryAllowList?: StringNullableWithAggregatesFilter<"Rule"> | string | null
    categoryBlockList?: StringNullableWithAggregatesFilter<"Rule"> | string | null
    allowedWeekdays?: StringNullableWithAggregatesFilter<"Rule"> | string | null
    allowedHourStart?: IntNullableWithAggregatesFilter<"Rule"> | number | null
    allowedHourEnd?: IntNullableWithAggregatesFilter<"Rule"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Rule"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    cardholderId?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cardholderId?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    cardholderId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email" | "cardholderId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cardholderId?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    cardholderId?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CardCreateInput = {
    id?: string
    cardholderId: string
    stripeId: string
    status: string
    description?: string | null
    last4?: string | null
    createdAt?: Date | string
    authorizations?: AuthorizationCreateNestedManyWithoutCardInput
    rules?: RuleCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateInput = {
    id?: string
    cardholderId: string
    stripeId: string
    status: string
    description?: string | null
    last4?: string | null
    createdAt?: Date | string
    authorizations?: AuthorizationUncheckedCreateNestedManyWithoutCardInput
    rules?: RuleUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUpdateManyWithoutCardNestedInput
    rules?: RuleUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUncheckedUpdateManyWithoutCardNestedInput
    rules?: RuleUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateManyInput = {
    id?: string
    cardholderId: string
    stripeId: string
    status: string
    description?: string | null
    last4?: string | null
    createdAt?: Date | string
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthorizationCreateInput = {
    id?: string
    stripeId: string
    amountCents: number
    currency: string
    merchant: string
    decision: string
    createdAt?: Date | string
    raw: JsonNullValueInput | InputJsonValue
    card: CardCreateNestedOneWithoutAuthorizationsInput
  }

  export type AuthorizationUncheckedCreateInput = {
    id?: string
    stripeId: string
    cardId: string
    amountCents: number
    currency: string
    merchant: string
    decision: string
    createdAt?: Date | string
    raw: JsonNullValueInput | InputJsonValue
  }

  export type AuthorizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    merchant?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raw?: JsonNullValueInput | InputJsonValue
    card?: CardUpdateOneRequiredWithoutAuthorizationsNestedInput
  }

  export type AuthorizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    merchant?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raw?: JsonNullValueInput | InputJsonValue
  }

  export type AuthorizationCreateManyInput = {
    id?: string
    stripeId: string
    cardId: string
    amountCents: number
    currency: string
    merchant: string
    decision: string
    createdAt?: Date | string
    raw: JsonNullValueInput | InputJsonValue
  }

  export type AuthorizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    merchant?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raw?: JsonNullValueInput | InputJsonValue
  }

  export type AuthorizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    merchant?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raw?: JsonNullValueInput | InputJsonValue
  }

  export type RuleCreateInput = {
    id?: string
    type: $Enums.RuleType
    spendLimitCents?: number | null
    spendInterval?: $Enums.SpendInterval | null
    merchantAllowList?: string | null
    merchantBlockList?: string | null
    categoryAllowList?: string | null
    categoryBlockList?: string | null
    allowedWeekdays?: string | null
    allowedHourStart?: number | null
    allowedHourEnd?: number | null
    createdAt?: Date | string
    card: CardCreateNestedOneWithoutRulesInput
  }

  export type RuleUncheckedCreateInput = {
    id?: string
    cardId: string
    type: $Enums.RuleType
    spendLimitCents?: number | null
    spendInterval?: $Enums.SpendInterval | null
    merchantAllowList?: string | null
    merchantBlockList?: string | null
    categoryAllowList?: string | null
    categoryBlockList?: string | null
    allowedWeekdays?: string | null
    allowedHourStart?: number | null
    allowedHourEnd?: number | null
    createdAt?: Date | string
  }

  export type RuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    spendLimitCents?: NullableIntFieldUpdateOperationsInput | number | null
    spendInterval?: NullableEnumSpendIntervalFieldUpdateOperationsInput | $Enums.SpendInterval | null
    merchantAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    merchantBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    allowedWeekdays?: NullableStringFieldUpdateOperationsInput | string | null
    allowedHourStart?: NullableIntFieldUpdateOperationsInput | number | null
    allowedHourEnd?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    card?: CardUpdateOneRequiredWithoutRulesNestedInput
  }

  export type RuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    spendLimitCents?: NullableIntFieldUpdateOperationsInput | number | null
    spendInterval?: NullableEnumSpendIntervalFieldUpdateOperationsInput | $Enums.SpendInterval | null
    merchantAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    merchantBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    allowedWeekdays?: NullableStringFieldUpdateOperationsInput | string | null
    allowedHourStart?: NullableIntFieldUpdateOperationsInput | number | null
    allowedHourEnd?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleCreateManyInput = {
    id?: string
    cardId: string
    type: $Enums.RuleType
    spendLimitCents?: number | null
    spendInterval?: $Enums.SpendInterval | null
    merchantAllowList?: string | null
    merchantBlockList?: string | null
    categoryAllowList?: string | null
    categoryBlockList?: string | null
    allowedWeekdays?: string | null
    allowedHourStart?: number | null
    allowedHourEnd?: number | null
    createdAt?: Date | string
  }

  export type RuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    spendLimitCents?: NullableIntFieldUpdateOperationsInput | number | null
    spendInterval?: NullableEnumSpendIntervalFieldUpdateOperationsInput | $Enums.SpendInterval | null
    merchantAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    merchantBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    allowedWeekdays?: NullableStringFieldUpdateOperationsInput | string | null
    allowedHourStart?: NullableIntFieldUpdateOperationsInput | number | null
    allowedHourEnd?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    spendLimitCents?: NullableIntFieldUpdateOperationsInput | number | null
    spendInterval?: NullableEnumSpendIntervalFieldUpdateOperationsInput | $Enums.SpendInterval | null
    merchantAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    merchantBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    allowedWeekdays?: NullableStringFieldUpdateOperationsInput | string | null
    allowedHourStart?: NullableIntFieldUpdateOperationsInput | number | null
    allowedHourEnd?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    cardholderId: string
    name?: string | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    cardholderId: string
    name?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    cardholderId: string
    name?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuthorizationListRelationFilter = {
    every?: AuthorizationWhereInput
    some?: AuthorizationWhereInput
    none?: AuthorizationWhereInput
  }

  export type RuleListRelationFilter = {
    every?: RuleWhereInput
    some?: RuleWhereInput
    none?: RuleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthorizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    cardholderId?: SortOrder
    stripeId?: SortOrder
    status?: SortOrder
    description?: SortOrder
    last4?: SortOrder
    createdAt?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    cardholderId?: SortOrder
    stripeId?: SortOrder
    status?: SortOrder
    description?: SortOrder
    last4?: SortOrder
    createdAt?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    cardholderId?: SortOrder
    stripeId?: SortOrder
    status?: SortOrder
    description?: SortOrder
    last4?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CardScalarRelationFilter = {
    is?: CardWhereInput
    isNot?: CardWhereInput
  }

  export type AuthorizationCountOrderByAggregateInput = {
    id?: SortOrder
    stripeId?: SortOrder
    cardId?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    merchant?: SortOrder
    decision?: SortOrder
    createdAt?: SortOrder
    raw?: SortOrder
  }

  export type AuthorizationAvgOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type AuthorizationMaxOrderByAggregateInput = {
    id?: SortOrder
    stripeId?: SortOrder
    cardId?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    merchant?: SortOrder
    decision?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthorizationMinOrderByAggregateInput = {
    id?: SortOrder
    stripeId?: SortOrder
    cardId?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    merchant?: SortOrder
    decision?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthorizationSumOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumRuleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[]
    notIn?: $Enums.RuleType[]
    not?: NestedEnumRuleTypeFilter<$PrismaModel> | $Enums.RuleType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSpendIntervalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SpendInterval | EnumSpendIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.SpendInterval[] | null
    notIn?: $Enums.SpendInterval[] | null
    not?: NestedEnumSpendIntervalNullableFilter<$PrismaModel> | $Enums.SpendInterval | null
  }

  export type RuleCountOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    spendLimitCents?: SortOrder
    spendInterval?: SortOrder
    merchantAllowList?: SortOrder
    merchantBlockList?: SortOrder
    categoryAllowList?: SortOrder
    categoryBlockList?: SortOrder
    allowedWeekdays?: SortOrder
    allowedHourStart?: SortOrder
    allowedHourEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type RuleAvgOrderByAggregateInput = {
    spendLimitCents?: SortOrder
    allowedHourStart?: SortOrder
    allowedHourEnd?: SortOrder
  }

  export type RuleMaxOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    spendLimitCents?: SortOrder
    spendInterval?: SortOrder
    merchantAllowList?: SortOrder
    merchantBlockList?: SortOrder
    categoryAllowList?: SortOrder
    categoryBlockList?: SortOrder
    allowedWeekdays?: SortOrder
    allowedHourStart?: SortOrder
    allowedHourEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type RuleMinOrderByAggregateInput = {
    id?: SortOrder
    cardId?: SortOrder
    type?: SortOrder
    spendLimitCents?: SortOrder
    spendInterval?: SortOrder
    merchantAllowList?: SortOrder
    merchantBlockList?: SortOrder
    categoryAllowList?: SortOrder
    categoryBlockList?: SortOrder
    allowedWeekdays?: SortOrder
    allowedHourStart?: SortOrder
    allowedHourEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type RuleSumOrderByAggregateInput = {
    spendLimitCents?: SortOrder
    allowedHourStart?: SortOrder
    allowedHourEnd?: SortOrder
  }

  export type EnumRuleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[]
    notIn?: $Enums.RuleType[]
    not?: NestedEnumRuleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RuleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleTypeFilter<$PrismaModel>
    _max?: NestedEnumRuleTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSpendIntervalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpendInterval | EnumSpendIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.SpendInterval[] | null
    notIn?: $Enums.SpendInterval[] | null
    not?: NestedEnumSpendIntervalNullableWithAggregatesFilter<$PrismaModel> | $Enums.SpendInterval | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSpendIntervalNullableFilter<$PrismaModel>
    _max?: NestedEnumSpendIntervalNullableFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cardholderId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cardholderId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cardholderId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthorizationCreateNestedManyWithoutCardInput = {
    create?: XOR<AuthorizationCreateWithoutCardInput, AuthorizationUncheckedCreateWithoutCardInput> | AuthorizationCreateWithoutCardInput[] | AuthorizationUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutCardInput | AuthorizationCreateOrConnectWithoutCardInput[]
    createMany?: AuthorizationCreateManyCardInputEnvelope
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
  }

  export type RuleCreateNestedManyWithoutCardInput = {
    create?: XOR<RuleCreateWithoutCardInput, RuleUncheckedCreateWithoutCardInput> | RuleCreateWithoutCardInput[] | RuleUncheckedCreateWithoutCardInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutCardInput | RuleCreateOrConnectWithoutCardInput[]
    createMany?: RuleCreateManyCardInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type AuthorizationUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<AuthorizationCreateWithoutCardInput, AuthorizationUncheckedCreateWithoutCardInput> | AuthorizationCreateWithoutCardInput[] | AuthorizationUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutCardInput | AuthorizationCreateOrConnectWithoutCardInput[]
    createMany?: AuthorizationCreateManyCardInputEnvelope
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
  }

  export type RuleUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<RuleCreateWithoutCardInput, RuleUncheckedCreateWithoutCardInput> | RuleCreateWithoutCardInput[] | RuleUncheckedCreateWithoutCardInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutCardInput | RuleCreateOrConnectWithoutCardInput[]
    createMany?: RuleCreateManyCardInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuthorizationUpdateManyWithoutCardNestedInput = {
    create?: XOR<AuthorizationCreateWithoutCardInput, AuthorizationUncheckedCreateWithoutCardInput> | AuthorizationCreateWithoutCardInput[] | AuthorizationUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutCardInput | AuthorizationCreateOrConnectWithoutCardInput[]
    upsert?: AuthorizationUpsertWithWhereUniqueWithoutCardInput | AuthorizationUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: AuthorizationCreateManyCardInputEnvelope
    set?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    disconnect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    delete?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    update?: AuthorizationUpdateWithWhereUniqueWithoutCardInput | AuthorizationUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: AuthorizationUpdateManyWithWhereWithoutCardInput | AuthorizationUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: AuthorizationScalarWhereInput | AuthorizationScalarWhereInput[]
  }

  export type RuleUpdateManyWithoutCardNestedInput = {
    create?: XOR<RuleCreateWithoutCardInput, RuleUncheckedCreateWithoutCardInput> | RuleCreateWithoutCardInput[] | RuleUncheckedCreateWithoutCardInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutCardInput | RuleCreateOrConnectWithoutCardInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutCardInput | RuleUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: RuleCreateManyCardInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutCardInput | RuleUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutCardInput | RuleUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type AuthorizationUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<AuthorizationCreateWithoutCardInput, AuthorizationUncheckedCreateWithoutCardInput> | AuthorizationCreateWithoutCardInput[] | AuthorizationUncheckedCreateWithoutCardInput[]
    connectOrCreate?: AuthorizationCreateOrConnectWithoutCardInput | AuthorizationCreateOrConnectWithoutCardInput[]
    upsert?: AuthorizationUpsertWithWhereUniqueWithoutCardInput | AuthorizationUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: AuthorizationCreateManyCardInputEnvelope
    set?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    disconnect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    delete?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    connect?: AuthorizationWhereUniqueInput | AuthorizationWhereUniqueInput[]
    update?: AuthorizationUpdateWithWhereUniqueWithoutCardInput | AuthorizationUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: AuthorizationUpdateManyWithWhereWithoutCardInput | AuthorizationUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: AuthorizationScalarWhereInput | AuthorizationScalarWhereInput[]
  }

  export type RuleUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<RuleCreateWithoutCardInput, RuleUncheckedCreateWithoutCardInput> | RuleCreateWithoutCardInput[] | RuleUncheckedCreateWithoutCardInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutCardInput | RuleCreateOrConnectWithoutCardInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutCardInput | RuleUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: RuleCreateManyCardInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutCardInput | RuleUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutCardInput | RuleUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type CardCreateNestedOneWithoutAuthorizationsInput = {
    create?: XOR<CardCreateWithoutAuthorizationsInput, CardUncheckedCreateWithoutAuthorizationsInput>
    connectOrCreate?: CardCreateOrConnectWithoutAuthorizationsInput
    connect?: CardWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CardUpdateOneRequiredWithoutAuthorizationsNestedInput = {
    create?: XOR<CardCreateWithoutAuthorizationsInput, CardUncheckedCreateWithoutAuthorizationsInput>
    connectOrCreate?: CardCreateOrConnectWithoutAuthorizationsInput
    upsert?: CardUpsertWithoutAuthorizationsInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutAuthorizationsInput, CardUpdateWithoutAuthorizationsInput>, CardUncheckedUpdateWithoutAuthorizationsInput>
  }

  export type CardCreateNestedOneWithoutRulesInput = {
    create?: XOR<CardCreateWithoutRulesInput, CardUncheckedCreateWithoutRulesInput>
    connectOrCreate?: CardCreateOrConnectWithoutRulesInput
    connect?: CardWhereUniqueInput
  }

  export type EnumRuleTypeFieldUpdateOperationsInput = {
    set?: $Enums.RuleType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumSpendIntervalFieldUpdateOperationsInput = {
    set?: $Enums.SpendInterval | null
  }

  export type CardUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<CardCreateWithoutRulesInput, CardUncheckedCreateWithoutRulesInput>
    connectOrCreate?: CardCreateOrConnectWithoutRulesInput
    upsert?: CardUpsertWithoutRulesInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutRulesInput, CardUpdateWithoutRulesInput>, CardUncheckedUpdateWithoutRulesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumRuleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[]
    notIn?: $Enums.RuleType[]
    not?: NestedEnumRuleTypeFilter<$PrismaModel> | $Enums.RuleType
  }

  export type NestedEnumSpendIntervalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SpendInterval | EnumSpendIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.SpendInterval[] | null
    notIn?: $Enums.SpendInterval[] | null
    not?: NestedEnumSpendIntervalNullableFilter<$PrismaModel> | $Enums.SpendInterval | null
  }

  export type NestedEnumRuleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RuleType | EnumRuleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RuleType[]
    notIn?: $Enums.RuleType[]
    not?: NestedEnumRuleTypeWithAggregatesFilter<$PrismaModel> | $Enums.RuleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuleTypeFilter<$PrismaModel>
    _max?: NestedEnumRuleTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSpendIntervalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpendInterval | EnumSpendIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.SpendInterval[] | null
    notIn?: $Enums.SpendInterval[] | null
    not?: NestedEnumSpendIntervalNullableWithAggregatesFilter<$PrismaModel> | $Enums.SpendInterval | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSpendIntervalNullableFilter<$PrismaModel>
    _max?: NestedEnumSpendIntervalNullableFilter<$PrismaModel>
  }

  export type AuthorizationCreateWithoutCardInput = {
    id?: string
    stripeId: string
    amountCents: number
    currency: string
    merchant: string
    decision: string
    createdAt?: Date | string
    raw: JsonNullValueInput | InputJsonValue
  }

  export type AuthorizationUncheckedCreateWithoutCardInput = {
    id?: string
    stripeId: string
    amountCents: number
    currency: string
    merchant: string
    decision: string
    createdAt?: Date | string
    raw: JsonNullValueInput | InputJsonValue
  }

  export type AuthorizationCreateOrConnectWithoutCardInput = {
    where: AuthorizationWhereUniqueInput
    create: XOR<AuthorizationCreateWithoutCardInput, AuthorizationUncheckedCreateWithoutCardInput>
  }

  export type AuthorizationCreateManyCardInputEnvelope = {
    data: AuthorizationCreateManyCardInput | AuthorizationCreateManyCardInput[]
  }

  export type RuleCreateWithoutCardInput = {
    id?: string
    type: $Enums.RuleType
    spendLimitCents?: number | null
    spendInterval?: $Enums.SpendInterval | null
    merchantAllowList?: string | null
    merchantBlockList?: string | null
    categoryAllowList?: string | null
    categoryBlockList?: string | null
    allowedWeekdays?: string | null
    allowedHourStart?: number | null
    allowedHourEnd?: number | null
    createdAt?: Date | string
  }

  export type RuleUncheckedCreateWithoutCardInput = {
    id?: string
    type: $Enums.RuleType
    spendLimitCents?: number | null
    spendInterval?: $Enums.SpendInterval | null
    merchantAllowList?: string | null
    merchantBlockList?: string | null
    categoryAllowList?: string | null
    categoryBlockList?: string | null
    allowedWeekdays?: string | null
    allowedHourStart?: number | null
    allowedHourEnd?: number | null
    createdAt?: Date | string
  }

  export type RuleCreateOrConnectWithoutCardInput = {
    where: RuleWhereUniqueInput
    create: XOR<RuleCreateWithoutCardInput, RuleUncheckedCreateWithoutCardInput>
  }

  export type RuleCreateManyCardInputEnvelope = {
    data: RuleCreateManyCardInput | RuleCreateManyCardInput[]
  }

  export type AuthorizationUpsertWithWhereUniqueWithoutCardInput = {
    where: AuthorizationWhereUniqueInput
    update: XOR<AuthorizationUpdateWithoutCardInput, AuthorizationUncheckedUpdateWithoutCardInput>
    create: XOR<AuthorizationCreateWithoutCardInput, AuthorizationUncheckedCreateWithoutCardInput>
  }

  export type AuthorizationUpdateWithWhereUniqueWithoutCardInput = {
    where: AuthorizationWhereUniqueInput
    data: XOR<AuthorizationUpdateWithoutCardInput, AuthorizationUncheckedUpdateWithoutCardInput>
  }

  export type AuthorizationUpdateManyWithWhereWithoutCardInput = {
    where: AuthorizationScalarWhereInput
    data: XOR<AuthorizationUpdateManyMutationInput, AuthorizationUncheckedUpdateManyWithoutCardInput>
  }

  export type AuthorizationScalarWhereInput = {
    AND?: AuthorizationScalarWhereInput | AuthorizationScalarWhereInput[]
    OR?: AuthorizationScalarWhereInput[]
    NOT?: AuthorizationScalarWhereInput | AuthorizationScalarWhereInput[]
    id?: StringFilter<"Authorization"> | string
    stripeId?: StringFilter<"Authorization"> | string
    cardId?: StringFilter<"Authorization"> | string
    amountCents?: IntFilter<"Authorization"> | number
    currency?: StringFilter<"Authorization"> | string
    merchant?: StringFilter<"Authorization"> | string
    decision?: StringFilter<"Authorization"> | string
    createdAt?: DateTimeFilter<"Authorization"> | Date | string
    raw?: JsonFilter<"Authorization">
  }

  export type RuleUpsertWithWhereUniqueWithoutCardInput = {
    where: RuleWhereUniqueInput
    update: XOR<RuleUpdateWithoutCardInput, RuleUncheckedUpdateWithoutCardInput>
    create: XOR<RuleCreateWithoutCardInput, RuleUncheckedCreateWithoutCardInput>
  }

  export type RuleUpdateWithWhereUniqueWithoutCardInput = {
    where: RuleWhereUniqueInput
    data: XOR<RuleUpdateWithoutCardInput, RuleUncheckedUpdateWithoutCardInput>
  }

  export type RuleUpdateManyWithWhereWithoutCardInput = {
    where: RuleScalarWhereInput
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyWithoutCardInput>
  }

  export type RuleScalarWhereInput = {
    AND?: RuleScalarWhereInput | RuleScalarWhereInput[]
    OR?: RuleScalarWhereInput[]
    NOT?: RuleScalarWhereInput | RuleScalarWhereInput[]
    id?: StringFilter<"Rule"> | string
    cardId?: StringFilter<"Rule"> | string
    type?: EnumRuleTypeFilter<"Rule"> | $Enums.RuleType
    spendLimitCents?: IntNullableFilter<"Rule"> | number | null
    spendInterval?: EnumSpendIntervalNullableFilter<"Rule"> | $Enums.SpendInterval | null
    merchantAllowList?: StringNullableFilter<"Rule"> | string | null
    merchantBlockList?: StringNullableFilter<"Rule"> | string | null
    categoryAllowList?: StringNullableFilter<"Rule"> | string | null
    categoryBlockList?: StringNullableFilter<"Rule"> | string | null
    allowedWeekdays?: StringNullableFilter<"Rule"> | string | null
    allowedHourStart?: IntNullableFilter<"Rule"> | number | null
    allowedHourEnd?: IntNullableFilter<"Rule"> | number | null
    createdAt?: DateTimeFilter<"Rule"> | Date | string
  }

  export type CardCreateWithoutAuthorizationsInput = {
    id?: string
    cardholderId: string
    stripeId: string
    status: string
    description?: string | null
    last4?: string | null
    createdAt?: Date | string
    rules?: RuleCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutAuthorizationsInput = {
    id?: string
    cardholderId: string
    stripeId: string
    status: string
    description?: string | null
    last4?: string | null
    createdAt?: Date | string
    rules?: RuleUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutAuthorizationsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutAuthorizationsInput, CardUncheckedCreateWithoutAuthorizationsInput>
  }

  export type CardUpsertWithoutAuthorizationsInput = {
    update: XOR<CardUpdateWithoutAuthorizationsInput, CardUncheckedUpdateWithoutAuthorizationsInput>
    create: XOR<CardCreateWithoutAuthorizationsInput, CardUncheckedCreateWithoutAuthorizationsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutAuthorizationsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutAuthorizationsInput, CardUncheckedUpdateWithoutAuthorizationsInput>
  }

  export type CardUpdateWithoutAuthorizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: RuleUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutAuthorizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rules?: RuleUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateWithoutRulesInput = {
    id?: string
    cardholderId: string
    stripeId: string
    status: string
    description?: string | null
    last4?: string | null
    createdAt?: Date | string
    authorizations?: AuthorizationCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutRulesInput = {
    id?: string
    cardholderId: string
    stripeId: string
    status: string
    description?: string | null
    last4?: string | null
    createdAt?: Date | string
    authorizations?: AuthorizationUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutRulesInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutRulesInput, CardUncheckedCreateWithoutRulesInput>
  }

  export type CardUpsertWithoutRulesInput = {
    update: XOR<CardUpdateWithoutRulesInput, CardUncheckedUpdateWithoutRulesInput>
    create: XOR<CardCreateWithoutRulesInput, CardUncheckedCreateWithoutRulesInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutRulesInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutRulesInput, CardUncheckedUpdateWithoutRulesInput>
  }

  export type CardUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardholderId?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    last4?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizations?: AuthorizationUncheckedUpdateManyWithoutCardNestedInput
  }

  export type AuthorizationCreateManyCardInput = {
    id?: string
    stripeId: string
    amountCents: number
    currency: string
    merchant: string
    decision: string
    createdAt?: Date | string
    raw: JsonNullValueInput | InputJsonValue
  }

  export type RuleCreateManyCardInput = {
    id?: string
    type: $Enums.RuleType
    spendLimitCents?: number | null
    spendInterval?: $Enums.SpendInterval | null
    merchantAllowList?: string | null
    merchantBlockList?: string | null
    categoryAllowList?: string | null
    categoryBlockList?: string | null
    allowedWeekdays?: string | null
    allowedHourStart?: number | null
    allowedHourEnd?: number | null
    createdAt?: Date | string
  }

  export type AuthorizationUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    merchant?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raw?: JsonNullValueInput | InputJsonValue
  }

  export type AuthorizationUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    merchant?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raw?: JsonNullValueInput | InputJsonValue
  }

  export type AuthorizationUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeId?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    merchant?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    raw?: JsonNullValueInput | InputJsonValue
  }

  export type RuleUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    spendLimitCents?: NullableIntFieldUpdateOperationsInput | number | null
    spendInterval?: NullableEnumSpendIntervalFieldUpdateOperationsInput | $Enums.SpendInterval | null
    merchantAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    merchantBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    allowedWeekdays?: NullableStringFieldUpdateOperationsInput | string | null
    allowedHourStart?: NullableIntFieldUpdateOperationsInput | number | null
    allowedHourEnd?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    spendLimitCents?: NullableIntFieldUpdateOperationsInput | number | null
    spendInterval?: NullableEnumSpendIntervalFieldUpdateOperationsInput | $Enums.SpendInterval | null
    merchantAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    merchantBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    allowedWeekdays?: NullableStringFieldUpdateOperationsInput | string | null
    allowedHourStart?: NullableIntFieldUpdateOperationsInput | number | null
    allowedHourEnd?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuleUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRuleTypeFieldUpdateOperationsInput | $Enums.RuleType
    spendLimitCents?: NullableIntFieldUpdateOperationsInput | number | null
    spendInterval?: NullableEnumSpendIntervalFieldUpdateOperationsInput | $Enums.SpendInterval | null
    merchantAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    merchantBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryAllowList?: NullableStringFieldUpdateOperationsInput | string | null
    categoryBlockList?: NullableStringFieldUpdateOperationsInput | string | null
    allowedWeekdays?: NullableStringFieldUpdateOperationsInput | string | null
    allowedHourStart?: NullableIntFieldUpdateOperationsInput | number | null
    allowedHourEnd?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}