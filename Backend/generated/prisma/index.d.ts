
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Captain
 * 
 */
export type Captain = $Result.DefaultSelection<Prisma.$CaptainPayload>
/**
 * Model BlacklistToken
 * 
 */
export type BlacklistToken = $Result.DefaultSelection<Prisma.$BlacklistTokenPayload>
/**
 * Model Ride
 * 
 */
export type Ride = $Result.DefaultSelection<Prisma.$RidePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CaptainStatus: {
  active: 'active',
  inactive: 'inactive'
};

export type CaptainStatus = (typeof CaptainStatus)[keyof typeof CaptainStatus]


export const VehicleType: {
  car: 'car',
  motorcycle: 'motorcycle',
  auto: 'auto'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]


export const RideStatus: {
  pending: 'pending',
  accepted: 'accepted',
  ongoing: 'ongoing',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type RideStatus = (typeof RideStatus)[keyof typeof RideStatus]

}

export type CaptainStatus = $Enums.CaptainStatus

export const CaptainStatus: typeof $Enums.CaptainStatus

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

export type RideStatus = $Enums.RideStatus

export const RideStatus: typeof $Enums.RideStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.captain`: Exposes CRUD operations for the **Captain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Captains
    * const captains = await prisma.captain.findMany()
    * ```
    */
  get captain(): Prisma.CaptainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blacklistToken`: Exposes CRUD operations for the **BlacklistToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlacklistTokens
    * const blacklistTokens = await prisma.blacklistToken.findMany()
    * ```
    */
  get blacklistToken(): Prisma.BlacklistTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ride`: Exposes CRUD operations for the **Ride** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rides
    * const rides = await prisma.ride.findMany()
    * ```
    */
  get ride(): Prisma.RideDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Captain: 'Captain',
    BlacklistToken: 'BlacklistToken',
    Ride: 'Ride'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "captain" | "blacklistToken" | "ride"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Captain: {
        payload: Prisma.$CaptainPayload<ExtArgs>
        fields: Prisma.CaptainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaptainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaptainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          findFirst: {
            args: Prisma.CaptainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaptainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          findMany: {
            args: Prisma.CaptainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>[]
          }
          create: {
            args: Prisma.CaptainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          createMany: {
            args: Prisma.CaptainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CaptainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>[]
          }
          delete: {
            args: Prisma.CaptainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          update: {
            args: Prisma.CaptainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          deleteMany: {
            args: Prisma.CaptainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CaptainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CaptainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>[]
          }
          upsert: {
            args: Prisma.CaptainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CaptainPayload>
          }
          aggregate: {
            args: Prisma.CaptainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaptain>
          }
          groupBy: {
            args: Prisma.CaptainGroupByArgs<ExtArgs>
            result: $Utils.Optional<CaptainGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaptainCountArgs<ExtArgs>
            result: $Utils.Optional<CaptainCountAggregateOutputType> | number
          }
        }
      }
      BlacklistToken: {
        payload: Prisma.$BlacklistTokenPayload<ExtArgs>
        fields: Prisma.BlacklistTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlacklistTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlacklistTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistTokenPayload>
          }
          findFirst: {
            args: Prisma.BlacklistTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlacklistTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistTokenPayload>
          }
          findMany: {
            args: Prisma.BlacklistTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistTokenPayload>[]
          }
          create: {
            args: Prisma.BlacklistTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistTokenPayload>
          }
          createMany: {
            args: Prisma.BlacklistTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlacklistTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistTokenPayload>[]
          }
          delete: {
            args: Prisma.BlacklistTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistTokenPayload>
          }
          update: {
            args: Prisma.BlacklistTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistTokenPayload>
          }
          deleteMany: {
            args: Prisma.BlacklistTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlacklistTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlacklistTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistTokenPayload>[]
          }
          upsert: {
            args: Prisma.BlacklistTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistTokenPayload>
          }
          aggregate: {
            args: Prisma.BlacklistTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlacklistToken>
          }
          groupBy: {
            args: Prisma.BlacklistTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlacklistTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlacklistTokenCountArgs<ExtArgs>
            result: $Utils.Optional<BlacklistTokenCountAggregateOutputType> | number
          }
        }
      }
      Ride: {
        payload: Prisma.$RidePayload<ExtArgs>
        fields: Prisma.RideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          findFirst: {
            args: Prisma.RideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          findMany: {
            args: Prisma.RideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          create: {
            args: Prisma.RideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          createMany: {
            args: Prisma.RideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          delete: {
            args: Prisma.RideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          update: {
            args: Prisma.RideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          deleteMany: {
            args: Prisma.RideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          upsert: {
            args: Prisma.RideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          aggregate: {
            args: Prisma.RideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRide>
          }
          groupBy: {
            args: Prisma.RideGroupByArgs<ExtArgs>
            result: $Utils.Optional<RideGroupByOutputType>[]
          }
          count: {
            args: Prisma.RideCountArgs<ExtArgs>
            result: $Utils.Optional<RideCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    captain?: CaptainOmit
    blacklistToken?: BlacklistTokenOmit
    ride?: RideOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    rides: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides?: boolean | UserCountOutputTypeCountRidesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
  }


  /**
   * Count Type CaptainCountOutputType
   */

  export type CaptainCountOutputType = {
    rides: number
  }

  export type CaptainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides?: boolean | CaptainCountOutputTypeCountRidesArgs
  }

  // Custom InputTypes
  /**
   * CaptainCountOutputType without action
   */
  export type CaptainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaptainCountOutputType
     */
    select?: CaptainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CaptainCountOutputType without action
   */
  export type CaptainCountOutputTypeCountRidesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
  }


  /**
   * Models
   */

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
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    socketId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    socketId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    socketId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    socketId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    socketId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    socketId?: true
    createdAt?: true
    updatedAt?: true
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
    firstname: string
    lastname: string | null
    email: string
    password: string
    socketId: string | null
    createdAt: Date
    updatedAt: Date
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
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    socketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rides?: boolean | User$ridesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    socketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    socketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    socketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "socketId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides?: boolean | User$ridesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      rides: Prisma.$RidePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string | null
      email: string
      password: string
      socketId: string | null
      createdAt: Date
      updatedAt: Date
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
    rides<T extends User$ridesArgs<ExtArgs> = {}>(args?: Subset<T, User$ridesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly socketId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.rides
   */
  export type User$ridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    where?: RideWhereInput
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    cursor?: RideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Captain
   */

  export type AggregateCaptain = {
    _count: CaptainCountAggregateOutputType | null
    _avg: CaptainAvgAggregateOutputType | null
    _sum: CaptainSumAggregateOutputType | null
    _min: CaptainMinAggregateOutputType | null
    _max: CaptainMaxAggregateOutputType | null
  }

  export type CaptainAvgAggregateOutputType = {
    vehicleCapacity: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CaptainSumAggregateOutputType = {
    vehicleCapacity: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CaptainMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    socketId: string | null
    status: $Enums.CaptainStatus | null
    vehicleColor: string | null
    vehiclePlate: string | null
    vehicleCapacity: number | null
    vehicleType: $Enums.VehicleType | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaptainMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    socketId: string | null
    status: $Enums.CaptainStatus | null
    vehicleColor: string | null
    vehiclePlate: string | null
    vehicleCapacity: number | null
    vehicleType: $Enums.VehicleType | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CaptainCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    socketId: number
    status: number
    vehicleColor: number
    vehiclePlate: number
    vehicleCapacity: number
    vehicleType: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CaptainAvgAggregateInputType = {
    vehicleCapacity?: true
    latitude?: true
    longitude?: true
  }

  export type CaptainSumAggregateInputType = {
    vehicleCapacity?: true
    latitude?: true
    longitude?: true
  }

  export type CaptainMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    socketId?: true
    status?: true
    vehicleColor?: true
    vehiclePlate?: true
    vehicleCapacity?: true
    vehicleType?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaptainMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    socketId?: true
    status?: true
    vehicleColor?: true
    vehiclePlate?: true
    vehicleCapacity?: true
    vehicleType?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CaptainCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    socketId?: true
    status?: true
    vehicleColor?: true
    vehiclePlate?: true
    vehicleCapacity?: true
    vehicleType?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CaptainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Captain to aggregate.
     */
    where?: CaptainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Captains to fetch.
     */
    orderBy?: CaptainOrderByWithRelationInput | CaptainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaptainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Captains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Captains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Captains
    **/
    _count?: true | CaptainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaptainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaptainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaptainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaptainMaxAggregateInputType
  }

  export type GetCaptainAggregateType<T extends CaptainAggregateArgs> = {
        [P in keyof T & keyof AggregateCaptain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaptain[P]>
      : GetScalarType<T[P], AggregateCaptain[P]>
  }




  export type CaptainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaptainWhereInput
    orderBy?: CaptainOrderByWithAggregationInput | CaptainOrderByWithAggregationInput[]
    by: CaptainScalarFieldEnum[] | CaptainScalarFieldEnum
    having?: CaptainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaptainCountAggregateInputType | true
    _avg?: CaptainAvgAggregateInputType
    _sum?: CaptainSumAggregateInputType
    _min?: CaptainMinAggregateInputType
    _max?: CaptainMaxAggregateInputType
  }

  export type CaptainGroupByOutputType = {
    id: string
    firstname: string
    lastname: string | null
    email: string
    password: string
    socketId: string | null
    status: $Enums.CaptainStatus
    vehicleColor: string
    vehiclePlate: string
    vehicleCapacity: number
    vehicleType: $Enums.VehicleType
    latitude: number | null
    longitude: number | null
    createdAt: Date
    updatedAt: Date
    _count: CaptainCountAggregateOutputType | null
    _avg: CaptainAvgAggregateOutputType | null
    _sum: CaptainSumAggregateOutputType | null
    _min: CaptainMinAggregateOutputType | null
    _max: CaptainMaxAggregateOutputType | null
  }

  type GetCaptainGroupByPayload<T extends CaptainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaptainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaptainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaptainGroupByOutputType[P]>
            : GetScalarType<T[P], CaptainGroupByOutputType[P]>
        }
      >
    >


  export type CaptainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    socketId?: boolean
    status?: boolean
    vehicleColor?: boolean
    vehiclePlate?: boolean
    vehicleCapacity?: boolean
    vehicleType?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rides?: boolean | Captain$ridesArgs<ExtArgs>
    _count?: boolean | CaptainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["captain"]>

  export type CaptainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    socketId?: boolean
    status?: boolean
    vehicleColor?: boolean
    vehiclePlate?: boolean
    vehicleCapacity?: boolean
    vehicleType?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["captain"]>

  export type CaptainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    socketId?: boolean
    status?: boolean
    vehicleColor?: boolean
    vehiclePlate?: boolean
    vehicleCapacity?: boolean
    vehicleType?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["captain"]>

  export type CaptainSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    socketId?: boolean
    status?: boolean
    vehicleColor?: boolean
    vehiclePlate?: boolean
    vehicleCapacity?: boolean
    vehicleType?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CaptainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "socketId" | "status" | "vehicleColor" | "vehiclePlate" | "vehicleCapacity" | "vehicleType" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["captain"]>
  export type CaptainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides?: boolean | Captain$ridesArgs<ExtArgs>
    _count?: boolean | CaptainCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CaptainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CaptainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CaptainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Captain"
    objects: {
      rides: Prisma.$RidePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string | null
      email: string
      password: string
      socketId: string | null
      status: $Enums.CaptainStatus
      vehicleColor: string
      vehiclePlate: string
      vehicleCapacity: number
      vehicleType: $Enums.VehicleType
      latitude: number | null
      longitude: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["captain"]>
    composites: {}
  }

  type CaptainGetPayload<S extends boolean | null | undefined | CaptainDefaultArgs> = $Result.GetResult<Prisma.$CaptainPayload, S>

  type CaptainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CaptainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CaptainCountAggregateInputType | true
    }

  export interface CaptainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Captain'], meta: { name: 'Captain' } }
    /**
     * Find zero or one Captain that matches the filter.
     * @param {CaptainFindUniqueArgs} args - Arguments to find a Captain
     * @example
     * // Get one Captain
     * const captain = await prisma.captain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CaptainFindUniqueArgs>(args: SelectSubset<T, CaptainFindUniqueArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Captain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CaptainFindUniqueOrThrowArgs} args - Arguments to find a Captain
     * @example
     * // Get one Captain
     * const captain = await prisma.captain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CaptainFindUniqueOrThrowArgs>(args: SelectSubset<T, CaptainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Captain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainFindFirstArgs} args - Arguments to find a Captain
     * @example
     * // Get one Captain
     * const captain = await prisma.captain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CaptainFindFirstArgs>(args?: SelectSubset<T, CaptainFindFirstArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Captain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainFindFirstOrThrowArgs} args - Arguments to find a Captain
     * @example
     * // Get one Captain
     * const captain = await prisma.captain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CaptainFindFirstOrThrowArgs>(args?: SelectSubset<T, CaptainFindFirstOrThrowArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Captains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Captains
     * const captains = await prisma.captain.findMany()
     * 
     * // Get first 10 Captains
     * const captains = await prisma.captain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const captainWithIdOnly = await prisma.captain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CaptainFindManyArgs>(args?: SelectSubset<T, CaptainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Captain.
     * @param {CaptainCreateArgs} args - Arguments to create a Captain.
     * @example
     * // Create one Captain
     * const Captain = await prisma.captain.create({
     *   data: {
     *     // ... data to create a Captain
     *   }
     * })
     * 
     */
    create<T extends CaptainCreateArgs>(args: SelectSubset<T, CaptainCreateArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Captains.
     * @param {CaptainCreateManyArgs} args - Arguments to create many Captains.
     * @example
     * // Create many Captains
     * const captain = await prisma.captain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CaptainCreateManyArgs>(args?: SelectSubset<T, CaptainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Captains and returns the data saved in the database.
     * @param {CaptainCreateManyAndReturnArgs} args - Arguments to create many Captains.
     * @example
     * // Create many Captains
     * const captain = await prisma.captain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Captains and only return the `id`
     * const captainWithIdOnly = await prisma.captain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CaptainCreateManyAndReturnArgs>(args?: SelectSubset<T, CaptainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Captain.
     * @param {CaptainDeleteArgs} args - Arguments to delete one Captain.
     * @example
     * // Delete one Captain
     * const Captain = await prisma.captain.delete({
     *   where: {
     *     // ... filter to delete one Captain
     *   }
     * })
     * 
     */
    delete<T extends CaptainDeleteArgs>(args: SelectSubset<T, CaptainDeleteArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Captain.
     * @param {CaptainUpdateArgs} args - Arguments to update one Captain.
     * @example
     * // Update one Captain
     * const captain = await prisma.captain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CaptainUpdateArgs>(args: SelectSubset<T, CaptainUpdateArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Captains.
     * @param {CaptainDeleteManyArgs} args - Arguments to filter Captains to delete.
     * @example
     * // Delete a few Captains
     * const { count } = await prisma.captain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CaptainDeleteManyArgs>(args?: SelectSubset<T, CaptainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Captains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Captains
     * const captain = await prisma.captain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CaptainUpdateManyArgs>(args: SelectSubset<T, CaptainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Captains and returns the data updated in the database.
     * @param {CaptainUpdateManyAndReturnArgs} args - Arguments to update many Captains.
     * @example
     * // Update many Captains
     * const captain = await prisma.captain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Captains and only return the `id`
     * const captainWithIdOnly = await prisma.captain.updateManyAndReturn({
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
    updateManyAndReturn<T extends CaptainUpdateManyAndReturnArgs>(args: SelectSubset<T, CaptainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Captain.
     * @param {CaptainUpsertArgs} args - Arguments to update or create a Captain.
     * @example
     * // Update or create a Captain
     * const captain = await prisma.captain.upsert({
     *   create: {
     *     // ... data to create a Captain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Captain we want to update
     *   }
     * })
     */
    upsert<T extends CaptainUpsertArgs>(args: SelectSubset<T, CaptainUpsertArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Captains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainCountArgs} args - Arguments to filter Captains to count.
     * @example
     * // Count the number of Captains
     * const count = await prisma.captain.count({
     *   where: {
     *     // ... the filter for the Captains we want to count
     *   }
     * })
    **/
    count<T extends CaptainCountArgs>(
      args?: Subset<T, CaptainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaptainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Captain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CaptainAggregateArgs>(args: Subset<T, CaptainAggregateArgs>): Prisma.PrismaPromise<GetCaptainAggregateType<T>>

    /**
     * Group by Captain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaptainGroupByArgs} args - Group by arguments.
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
      T extends CaptainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaptainGroupByArgs['orderBy'] }
        : { orderBy?: CaptainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CaptainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaptainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Captain model
   */
  readonly fields: CaptainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Captain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaptainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rides<T extends Captain$ridesArgs<ExtArgs> = {}>(args?: Subset<T, Captain$ridesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Captain model
   */
  interface CaptainFieldRefs {
    readonly id: FieldRef<"Captain", 'String'>
    readonly firstname: FieldRef<"Captain", 'String'>
    readonly lastname: FieldRef<"Captain", 'String'>
    readonly email: FieldRef<"Captain", 'String'>
    readonly password: FieldRef<"Captain", 'String'>
    readonly socketId: FieldRef<"Captain", 'String'>
    readonly status: FieldRef<"Captain", 'CaptainStatus'>
    readonly vehicleColor: FieldRef<"Captain", 'String'>
    readonly vehiclePlate: FieldRef<"Captain", 'String'>
    readonly vehicleCapacity: FieldRef<"Captain", 'Int'>
    readonly vehicleType: FieldRef<"Captain", 'VehicleType'>
    readonly latitude: FieldRef<"Captain", 'Float'>
    readonly longitude: FieldRef<"Captain", 'Float'>
    readonly createdAt: FieldRef<"Captain", 'DateTime'>
    readonly updatedAt: FieldRef<"Captain", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Captain findUnique
   */
  export type CaptainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaptainInclude<ExtArgs> | null
    /**
     * Filter, which Captain to fetch.
     */
    where: CaptainWhereUniqueInput
  }

  /**
   * Captain findUniqueOrThrow
   */
  export type CaptainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaptainInclude<ExtArgs> | null
    /**
     * Filter, which Captain to fetch.
     */
    where: CaptainWhereUniqueInput
  }

  /**
   * Captain findFirst
   */
  export type CaptainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaptainInclude<ExtArgs> | null
    /**
     * Filter, which Captain to fetch.
     */
    where?: CaptainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Captains to fetch.
     */
    orderBy?: CaptainOrderByWithRelationInput | CaptainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Captains.
     */
    cursor?: CaptainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Captains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Captains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Captains.
     */
    distinct?: CaptainScalarFieldEnum | CaptainScalarFieldEnum[]
  }

  /**
   * Captain findFirstOrThrow
   */
  export type CaptainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaptainInclude<ExtArgs> | null
    /**
     * Filter, which Captain to fetch.
     */
    where?: CaptainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Captains to fetch.
     */
    orderBy?: CaptainOrderByWithRelationInput | CaptainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Captains.
     */
    cursor?: CaptainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Captains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Captains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Captains.
     */
    distinct?: CaptainScalarFieldEnum | CaptainScalarFieldEnum[]
  }

  /**
   * Captain findMany
   */
  export type CaptainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaptainInclude<ExtArgs> | null
    /**
     * Filter, which Captains to fetch.
     */
    where?: CaptainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Captains to fetch.
     */
    orderBy?: CaptainOrderByWithRelationInput | CaptainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Captains.
     */
    cursor?: CaptainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Captains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Captains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Captains.
     */
    distinct?: CaptainScalarFieldEnum | CaptainScalarFieldEnum[]
  }

  /**
   * Captain create
   */
  export type CaptainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaptainInclude<ExtArgs> | null
    /**
     * The data needed to create a Captain.
     */
    data: XOR<CaptainCreateInput, CaptainUncheckedCreateInput>
  }

  /**
   * Captain createMany
   */
  export type CaptainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Captains.
     */
    data: CaptainCreateManyInput | CaptainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Captain createManyAndReturn
   */
  export type CaptainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * The data used to create many Captains.
     */
    data: CaptainCreateManyInput | CaptainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Captain update
   */
  export type CaptainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaptainInclude<ExtArgs> | null
    /**
     * The data needed to update a Captain.
     */
    data: XOR<CaptainUpdateInput, CaptainUncheckedUpdateInput>
    /**
     * Choose, which Captain to update.
     */
    where: CaptainWhereUniqueInput
  }

  /**
   * Captain updateMany
   */
  export type CaptainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Captains.
     */
    data: XOR<CaptainUpdateManyMutationInput, CaptainUncheckedUpdateManyInput>
    /**
     * Filter which Captains to update
     */
    where?: CaptainWhereInput
    /**
     * Limit how many Captains to update.
     */
    limit?: number
  }

  /**
   * Captain updateManyAndReturn
   */
  export type CaptainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * The data used to update Captains.
     */
    data: XOR<CaptainUpdateManyMutationInput, CaptainUncheckedUpdateManyInput>
    /**
     * Filter which Captains to update
     */
    where?: CaptainWhereInput
    /**
     * Limit how many Captains to update.
     */
    limit?: number
  }

  /**
   * Captain upsert
   */
  export type CaptainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaptainInclude<ExtArgs> | null
    /**
     * The filter to search for the Captain to update in case it exists.
     */
    where: CaptainWhereUniqueInput
    /**
     * In case the Captain found by the `where` argument doesn't exist, create a new Captain with this data.
     */
    create: XOR<CaptainCreateInput, CaptainUncheckedCreateInput>
    /**
     * In case the Captain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaptainUpdateInput, CaptainUncheckedUpdateInput>
  }

  /**
   * Captain delete
   */
  export type CaptainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaptainInclude<ExtArgs> | null
    /**
     * Filter which Captain to delete.
     */
    where: CaptainWhereUniqueInput
  }

  /**
   * Captain deleteMany
   */
  export type CaptainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Captains to delete
     */
    where?: CaptainWhereInput
    /**
     * Limit how many Captains to delete.
     */
    limit?: number
  }

  /**
   * Captain.rides
   */
  export type Captain$ridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    where?: RideWhereInput
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    cursor?: RideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Captain without action
   */
  export type CaptainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaptainInclude<ExtArgs> | null
  }


  /**
   * Model BlacklistToken
   */

  export type AggregateBlacklistToken = {
    _count: BlacklistTokenCountAggregateOutputType | null
    _min: BlacklistTokenMinAggregateOutputType | null
    _max: BlacklistTokenMaxAggregateOutputType | null
  }

  export type BlacklistTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    createdAt: Date | null
  }

  export type BlacklistTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    createdAt: Date | null
  }

  export type BlacklistTokenCountAggregateOutputType = {
    id: number
    token: number
    createdAt: number
    _all: number
  }


  export type BlacklistTokenMinAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
  }

  export type BlacklistTokenMaxAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
  }

  export type BlacklistTokenCountAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    _all?: true
  }

  export type BlacklistTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlacklistToken to aggregate.
     */
    where?: BlacklistTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistTokens to fetch.
     */
    orderBy?: BlacklistTokenOrderByWithRelationInput | BlacklistTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlacklistTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlacklistTokens
    **/
    _count?: true | BlacklistTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlacklistTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlacklistTokenMaxAggregateInputType
  }

  export type GetBlacklistTokenAggregateType<T extends BlacklistTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateBlacklistToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlacklistToken[P]>
      : GetScalarType<T[P], AggregateBlacklistToken[P]>
  }




  export type BlacklistTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlacklistTokenWhereInput
    orderBy?: BlacklistTokenOrderByWithAggregationInput | BlacklistTokenOrderByWithAggregationInput[]
    by: BlacklistTokenScalarFieldEnum[] | BlacklistTokenScalarFieldEnum
    having?: BlacklistTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlacklistTokenCountAggregateInputType | true
    _min?: BlacklistTokenMinAggregateInputType
    _max?: BlacklistTokenMaxAggregateInputType
  }

  export type BlacklistTokenGroupByOutputType = {
    id: string
    token: string
    createdAt: Date
    _count: BlacklistTokenCountAggregateOutputType | null
    _min: BlacklistTokenMinAggregateOutputType | null
    _max: BlacklistTokenMaxAggregateOutputType | null
  }

  type GetBlacklistTokenGroupByPayload<T extends BlacklistTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlacklistTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlacklistTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlacklistTokenGroupByOutputType[P]>
            : GetScalarType<T[P], BlacklistTokenGroupByOutputType[P]>
        }
      >
    >


  export type BlacklistTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blacklistToken"]>

  export type BlacklistTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blacklistToken"]>

  export type BlacklistTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blacklistToken"]>

  export type BlacklistTokenSelectScalar = {
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }

  export type BlacklistTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "createdAt", ExtArgs["result"]["blacklistToken"]>

  export type $BlacklistTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlacklistToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      createdAt: Date
    }, ExtArgs["result"]["blacklistToken"]>
    composites: {}
  }

  type BlacklistTokenGetPayload<S extends boolean | null | undefined | BlacklistTokenDefaultArgs> = $Result.GetResult<Prisma.$BlacklistTokenPayload, S>

  type BlacklistTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlacklistTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlacklistTokenCountAggregateInputType | true
    }

  export interface BlacklistTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlacklistToken'], meta: { name: 'BlacklistToken' } }
    /**
     * Find zero or one BlacklistToken that matches the filter.
     * @param {BlacklistTokenFindUniqueArgs} args - Arguments to find a BlacklistToken
     * @example
     * // Get one BlacklistToken
     * const blacklistToken = await prisma.blacklistToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlacklistTokenFindUniqueArgs>(args: SelectSubset<T, BlacklistTokenFindUniqueArgs<ExtArgs>>): Prisma__BlacklistTokenClient<$Result.GetResult<Prisma.$BlacklistTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlacklistToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlacklistTokenFindUniqueOrThrowArgs} args - Arguments to find a BlacklistToken
     * @example
     * // Get one BlacklistToken
     * const blacklistToken = await prisma.blacklistToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlacklistTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, BlacklistTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlacklistTokenClient<$Result.GetResult<Prisma.$BlacklistTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlacklistToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistTokenFindFirstArgs} args - Arguments to find a BlacklistToken
     * @example
     * // Get one BlacklistToken
     * const blacklistToken = await prisma.blacklistToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlacklistTokenFindFirstArgs>(args?: SelectSubset<T, BlacklistTokenFindFirstArgs<ExtArgs>>): Prisma__BlacklistTokenClient<$Result.GetResult<Prisma.$BlacklistTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlacklistToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistTokenFindFirstOrThrowArgs} args - Arguments to find a BlacklistToken
     * @example
     * // Get one BlacklistToken
     * const blacklistToken = await prisma.blacklistToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlacklistTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, BlacklistTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlacklistTokenClient<$Result.GetResult<Prisma.$BlacklistTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlacklistTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlacklistTokens
     * const blacklistTokens = await prisma.blacklistToken.findMany()
     * 
     * // Get first 10 BlacklistTokens
     * const blacklistTokens = await prisma.blacklistToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blacklistTokenWithIdOnly = await prisma.blacklistToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlacklistTokenFindManyArgs>(args?: SelectSubset<T, BlacklistTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlacklistToken.
     * @param {BlacklistTokenCreateArgs} args - Arguments to create a BlacklistToken.
     * @example
     * // Create one BlacklistToken
     * const BlacklistToken = await prisma.blacklistToken.create({
     *   data: {
     *     // ... data to create a BlacklistToken
     *   }
     * })
     * 
     */
    create<T extends BlacklistTokenCreateArgs>(args: SelectSubset<T, BlacklistTokenCreateArgs<ExtArgs>>): Prisma__BlacklistTokenClient<$Result.GetResult<Prisma.$BlacklistTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlacklistTokens.
     * @param {BlacklistTokenCreateManyArgs} args - Arguments to create many BlacklistTokens.
     * @example
     * // Create many BlacklistTokens
     * const blacklistToken = await prisma.blacklistToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlacklistTokenCreateManyArgs>(args?: SelectSubset<T, BlacklistTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlacklistTokens and returns the data saved in the database.
     * @param {BlacklistTokenCreateManyAndReturnArgs} args - Arguments to create many BlacklistTokens.
     * @example
     * // Create many BlacklistTokens
     * const blacklistToken = await prisma.blacklistToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlacklistTokens and only return the `id`
     * const blacklistTokenWithIdOnly = await prisma.blacklistToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlacklistTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, BlacklistTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlacklistToken.
     * @param {BlacklistTokenDeleteArgs} args - Arguments to delete one BlacklistToken.
     * @example
     * // Delete one BlacklistToken
     * const BlacklistToken = await prisma.blacklistToken.delete({
     *   where: {
     *     // ... filter to delete one BlacklistToken
     *   }
     * })
     * 
     */
    delete<T extends BlacklistTokenDeleteArgs>(args: SelectSubset<T, BlacklistTokenDeleteArgs<ExtArgs>>): Prisma__BlacklistTokenClient<$Result.GetResult<Prisma.$BlacklistTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlacklistToken.
     * @param {BlacklistTokenUpdateArgs} args - Arguments to update one BlacklistToken.
     * @example
     * // Update one BlacklistToken
     * const blacklistToken = await prisma.blacklistToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlacklistTokenUpdateArgs>(args: SelectSubset<T, BlacklistTokenUpdateArgs<ExtArgs>>): Prisma__BlacklistTokenClient<$Result.GetResult<Prisma.$BlacklistTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlacklistTokens.
     * @param {BlacklistTokenDeleteManyArgs} args - Arguments to filter BlacklistTokens to delete.
     * @example
     * // Delete a few BlacklistTokens
     * const { count } = await prisma.blacklistToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlacklistTokenDeleteManyArgs>(args?: SelectSubset<T, BlacklistTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlacklistTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlacklistTokens
     * const blacklistToken = await prisma.blacklistToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlacklistTokenUpdateManyArgs>(args: SelectSubset<T, BlacklistTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlacklistTokens and returns the data updated in the database.
     * @param {BlacklistTokenUpdateManyAndReturnArgs} args - Arguments to update many BlacklistTokens.
     * @example
     * // Update many BlacklistTokens
     * const blacklistToken = await prisma.blacklistToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlacklistTokens and only return the `id`
     * const blacklistTokenWithIdOnly = await prisma.blacklistToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlacklistTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, BlacklistTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlacklistToken.
     * @param {BlacklistTokenUpsertArgs} args - Arguments to update or create a BlacklistToken.
     * @example
     * // Update or create a BlacklistToken
     * const blacklistToken = await prisma.blacklistToken.upsert({
     *   create: {
     *     // ... data to create a BlacklistToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlacklistToken we want to update
     *   }
     * })
     */
    upsert<T extends BlacklistTokenUpsertArgs>(args: SelectSubset<T, BlacklistTokenUpsertArgs<ExtArgs>>): Prisma__BlacklistTokenClient<$Result.GetResult<Prisma.$BlacklistTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlacklistTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistTokenCountArgs} args - Arguments to filter BlacklistTokens to count.
     * @example
     * // Count the number of BlacklistTokens
     * const count = await prisma.blacklistToken.count({
     *   where: {
     *     // ... the filter for the BlacklistTokens we want to count
     *   }
     * })
    **/
    count<T extends BlacklistTokenCountArgs>(
      args?: Subset<T, BlacklistTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlacklistTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlacklistToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlacklistTokenAggregateArgs>(args: Subset<T, BlacklistTokenAggregateArgs>): Prisma.PrismaPromise<GetBlacklistTokenAggregateType<T>>

    /**
     * Group by BlacklistToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistTokenGroupByArgs} args - Group by arguments.
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
      T extends BlacklistTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlacklistTokenGroupByArgs['orderBy'] }
        : { orderBy?: BlacklistTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlacklistTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlacklistTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlacklistToken model
   */
  readonly fields: BlacklistTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlacklistToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlacklistTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BlacklistToken model
   */
  interface BlacklistTokenFieldRefs {
    readonly id: FieldRef<"BlacklistToken", 'String'>
    readonly token: FieldRef<"BlacklistToken", 'String'>
    readonly createdAt: FieldRef<"BlacklistToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlacklistToken findUnique
   */
  export type BlacklistTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistToken to fetch.
     */
    where: BlacklistTokenWhereUniqueInput
  }

  /**
   * BlacklistToken findUniqueOrThrow
   */
  export type BlacklistTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistToken to fetch.
     */
    where: BlacklistTokenWhereUniqueInput
  }

  /**
   * BlacklistToken findFirst
   */
  export type BlacklistTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistToken to fetch.
     */
    where?: BlacklistTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistTokens to fetch.
     */
    orderBy?: BlacklistTokenOrderByWithRelationInput | BlacklistTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlacklistTokens.
     */
    cursor?: BlacklistTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlacklistTokens.
     */
    distinct?: BlacklistTokenScalarFieldEnum | BlacklistTokenScalarFieldEnum[]
  }

  /**
   * BlacklistToken findFirstOrThrow
   */
  export type BlacklistTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistToken to fetch.
     */
    where?: BlacklistTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistTokens to fetch.
     */
    orderBy?: BlacklistTokenOrderByWithRelationInput | BlacklistTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlacklistTokens.
     */
    cursor?: BlacklistTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlacklistTokens.
     */
    distinct?: BlacklistTokenScalarFieldEnum | BlacklistTokenScalarFieldEnum[]
  }

  /**
   * BlacklistToken findMany
   */
  export type BlacklistTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistTokens to fetch.
     */
    where?: BlacklistTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistTokens to fetch.
     */
    orderBy?: BlacklistTokenOrderByWithRelationInput | BlacklistTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlacklistTokens.
     */
    cursor?: BlacklistTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlacklistTokens.
     */
    distinct?: BlacklistTokenScalarFieldEnum | BlacklistTokenScalarFieldEnum[]
  }

  /**
   * BlacklistToken create
   */
  export type BlacklistTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a BlacklistToken.
     */
    data: XOR<BlacklistTokenCreateInput, BlacklistTokenUncheckedCreateInput>
  }

  /**
   * BlacklistToken createMany
   */
  export type BlacklistTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlacklistTokens.
     */
    data: BlacklistTokenCreateManyInput | BlacklistTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlacklistToken createManyAndReturn
   */
  export type BlacklistTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
    /**
     * The data used to create many BlacklistTokens.
     */
    data: BlacklistTokenCreateManyInput | BlacklistTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlacklistToken update
   */
  export type BlacklistTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a BlacklistToken.
     */
    data: XOR<BlacklistTokenUpdateInput, BlacklistTokenUncheckedUpdateInput>
    /**
     * Choose, which BlacklistToken to update.
     */
    where: BlacklistTokenWhereUniqueInput
  }

  /**
   * BlacklistToken updateMany
   */
  export type BlacklistTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlacklistTokens.
     */
    data: XOR<BlacklistTokenUpdateManyMutationInput, BlacklistTokenUncheckedUpdateManyInput>
    /**
     * Filter which BlacklistTokens to update
     */
    where?: BlacklistTokenWhereInput
    /**
     * Limit how many BlacklistTokens to update.
     */
    limit?: number
  }

  /**
   * BlacklistToken updateManyAndReturn
   */
  export type BlacklistTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
    /**
     * The data used to update BlacklistTokens.
     */
    data: XOR<BlacklistTokenUpdateManyMutationInput, BlacklistTokenUncheckedUpdateManyInput>
    /**
     * Filter which BlacklistTokens to update
     */
    where?: BlacklistTokenWhereInput
    /**
     * Limit how many BlacklistTokens to update.
     */
    limit?: number
  }

  /**
   * BlacklistToken upsert
   */
  export type BlacklistTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the BlacklistToken to update in case it exists.
     */
    where: BlacklistTokenWhereUniqueInput
    /**
     * In case the BlacklistToken found by the `where` argument doesn't exist, create a new BlacklistToken with this data.
     */
    create: XOR<BlacklistTokenCreateInput, BlacklistTokenUncheckedCreateInput>
    /**
     * In case the BlacklistToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlacklistTokenUpdateInput, BlacklistTokenUncheckedUpdateInput>
  }

  /**
   * BlacklistToken delete
   */
  export type BlacklistTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
    /**
     * Filter which BlacklistToken to delete.
     */
    where: BlacklistTokenWhereUniqueInput
  }

  /**
   * BlacklistToken deleteMany
   */
  export type BlacklistTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlacklistTokens to delete
     */
    where?: BlacklistTokenWhereInput
    /**
     * Limit how many BlacklistTokens to delete.
     */
    limit?: number
  }

  /**
   * BlacklistToken without action
   */
  export type BlacklistTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistToken
     */
    select?: BlacklistTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistToken
     */
    omit?: BlacklistTokenOmit<ExtArgs> | null
  }


  /**
   * Model Ride
   */

  export type AggregateRide = {
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  export type RideAvgAggregateOutputType = {
    fare: number | null
    duration: number | null
    distance: number | null
  }

  export type RideSumAggregateOutputType = {
    fare: number | null
    duration: number | null
    distance: number | null
  }

  export type RideMinAggregateOutputType = {
    id: string | null
    pickup: string | null
    destination: string | null
    fare: number | null
    status: $Enums.RideStatus | null
    duration: number | null
    distance: number | null
    paymentID: string | null
    orderId: string | null
    signature: string | null
    otp: string | null
    userId: string | null
    captainId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RideMaxAggregateOutputType = {
    id: string | null
    pickup: string | null
    destination: string | null
    fare: number | null
    status: $Enums.RideStatus | null
    duration: number | null
    distance: number | null
    paymentID: string | null
    orderId: string | null
    signature: string | null
    otp: string | null
    userId: string | null
    captainId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RideCountAggregateOutputType = {
    id: number
    pickup: number
    destination: number
    fare: number
    status: number
    duration: number
    distance: number
    paymentID: number
    orderId: number
    signature: number
    otp: number
    userId: number
    captainId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RideAvgAggregateInputType = {
    fare?: true
    duration?: true
    distance?: true
  }

  export type RideSumAggregateInputType = {
    fare?: true
    duration?: true
    distance?: true
  }

  export type RideMinAggregateInputType = {
    id?: true
    pickup?: true
    destination?: true
    fare?: true
    status?: true
    duration?: true
    distance?: true
    paymentID?: true
    orderId?: true
    signature?: true
    otp?: true
    userId?: true
    captainId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RideMaxAggregateInputType = {
    id?: true
    pickup?: true
    destination?: true
    fare?: true
    status?: true
    duration?: true
    distance?: true
    paymentID?: true
    orderId?: true
    signature?: true
    otp?: true
    userId?: true
    captainId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RideCountAggregateInputType = {
    id?: true
    pickup?: true
    destination?: true
    fare?: true
    status?: true
    duration?: true
    distance?: true
    paymentID?: true
    orderId?: true
    signature?: true
    otp?: true
    userId?: true
    captainId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ride to aggregate.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rides
    **/
    _count?: true | RideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RideMaxAggregateInputType
  }

  export type GetRideAggregateType<T extends RideAggregateArgs> = {
        [P in keyof T & keyof AggregateRide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRide[P]>
      : GetScalarType<T[P], AggregateRide[P]>
  }




  export type RideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
    orderBy?: RideOrderByWithAggregationInput | RideOrderByWithAggregationInput[]
    by: RideScalarFieldEnum[] | RideScalarFieldEnum
    having?: RideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RideCountAggregateInputType | true
    _avg?: RideAvgAggregateInputType
    _sum?: RideSumAggregateInputType
    _min?: RideMinAggregateInputType
    _max?: RideMaxAggregateInputType
  }

  export type RideGroupByOutputType = {
    id: string
    pickup: string
    destination: string
    fare: number
    status: $Enums.RideStatus
    duration: number | null
    distance: number | null
    paymentID: string | null
    orderId: string | null
    signature: string | null
    otp: string
    userId: string
    captainId: string | null
    createdAt: Date
    updatedAt: Date
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  type GetRideGroupByPayload<T extends RideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RideGroupByOutputType[P]>
            : GetScalarType<T[P], RideGroupByOutputType[P]>
        }
      >
    >


  export type RideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pickup?: boolean
    destination?: boolean
    fare?: boolean
    status?: boolean
    duration?: boolean
    distance?: boolean
    paymentID?: boolean
    orderId?: boolean
    signature?: boolean
    otp?: boolean
    userId?: boolean
    captainId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    captain?: boolean | Ride$captainArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pickup?: boolean
    destination?: boolean
    fare?: boolean
    status?: boolean
    duration?: boolean
    distance?: boolean
    paymentID?: boolean
    orderId?: boolean
    signature?: boolean
    otp?: boolean
    userId?: boolean
    captainId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    captain?: boolean | Ride$captainArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pickup?: boolean
    destination?: boolean
    fare?: boolean
    status?: boolean
    duration?: boolean
    distance?: boolean
    paymentID?: boolean
    orderId?: boolean
    signature?: boolean
    otp?: boolean
    userId?: boolean
    captainId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    captain?: boolean | Ride$captainArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectScalar = {
    id?: boolean
    pickup?: boolean
    destination?: boolean
    fare?: boolean
    status?: boolean
    duration?: boolean
    distance?: boolean
    paymentID?: boolean
    orderId?: boolean
    signature?: boolean
    otp?: boolean
    userId?: boolean
    captainId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pickup" | "destination" | "fare" | "status" | "duration" | "distance" | "paymentID" | "orderId" | "signature" | "otp" | "userId" | "captainId" | "createdAt" | "updatedAt", ExtArgs["result"]["ride"]>
  export type RideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    captain?: boolean | Ride$captainArgs<ExtArgs>
  }
  export type RideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    captain?: boolean | Ride$captainArgs<ExtArgs>
  }
  export type RideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    captain?: boolean | Ride$captainArgs<ExtArgs>
  }

  export type $RidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ride"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      captain: Prisma.$CaptainPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pickup: string
      destination: string
      fare: number
      status: $Enums.RideStatus
      duration: number | null
      distance: number | null
      paymentID: string | null
      orderId: string | null
      signature: string | null
      otp: string
      userId: string
      captainId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ride"]>
    composites: {}
  }

  type RideGetPayload<S extends boolean | null | undefined | RideDefaultArgs> = $Result.GetResult<Prisma.$RidePayload, S>

  type RideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RideCountAggregateInputType | true
    }

  export interface RideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ride'], meta: { name: 'Ride' } }
    /**
     * Find zero or one Ride that matches the filter.
     * @param {RideFindUniqueArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RideFindUniqueArgs>(args: SelectSubset<T, RideFindUniqueArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ride that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RideFindUniqueOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RideFindUniqueOrThrowArgs>(args: SelectSubset<T, RideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindFirstArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RideFindFirstArgs>(args?: SelectSubset<T, RideFindFirstArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindFirstOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RideFindFirstOrThrowArgs>(args?: SelectSubset<T, RideFindFirstOrThrowArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rides
     * const rides = await prisma.ride.findMany()
     * 
     * // Get first 10 Rides
     * const rides = await prisma.ride.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rideWithIdOnly = await prisma.ride.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RideFindManyArgs>(args?: SelectSubset<T, RideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ride.
     * @param {RideCreateArgs} args - Arguments to create a Ride.
     * @example
     * // Create one Ride
     * const Ride = await prisma.ride.create({
     *   data: {
     *     // ... data to create a Ride
     *   }
     * })
     * 
     */
    create<T extends RideCreateArgs>(args: SelectSubset<T, RideCreateArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rides.
     * @param {RideCreateManyArgs} args - Arguments to create many Rides.
     * @example
     * // Create many Rides
     * const ride = await prisma.ride.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RideCreateManyArgs>(args?: SelectSubset<T, RideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rides and returns the data saved in the database.
     * @param {RideCreateManyAndReturnArgs} args - Arguments to create many Rides.
     * @example
     * // Create many Rides
     * const ride = await prisma.ride.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rides and only return the `id`
     * const rideWithIdOnly = await prisma.ride.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RideCreateManyAndReturnArgs>(args?: SelectSubset<T, RideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ride.
     * @param {RideDeleteArgs} args - Arguments to delete one Ride.
     * @example
     * // Delete one Ride
     * const Ride = await prisma.ride.delete({
     *   where: {
     *     // ... filter to delete one Ride
     *   }
     * })
     * 
     */
    delete<T extends RideDeleteArgs>(args: SelectSubset<T, RideDeleteArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ride.
     * @param {RideUpdateArgs} args - Arguments to update one Ride.
     * @example
     * // Update one Ride
     * const ride = await prisma.ride.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RideUpdateArgs>(args: SelectSubset<T, RideUpdateArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rides.
     * @param {RideDeleteManyArgs} args - Arguments to filter Rides to delete.
     * @example
     * // Delete a few Rides
     * const { count } = await prisma.ride.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RideDeleteManyArgs>(args?: SelectSubset<T, RideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rides
     * const ride = await prisma.ride.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RideUpdateManyArgs>(args: SelectSubset<T, RideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides and returns the data updated in the database.
     * @param {RideUpdateManyAndReturnArgs} args - Arguments to update many Rides.
     * @example
     * // Update many Rides
     * const ride = await prisma.ride.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rides and only return the `id`
     * const rideWithIdOnly = await prisma.ride.updateManyAndReturn({
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
    updateManyAndReturn<T extends RideUpdateManyAndReturnArgs>(args: SelectSubset<T, RideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ride.
     * @param {RideUpsertArgs} args - Arguments to update or create a Ride.
     * @example
     * // Update or create a Ride
     * const ride = await prisma.ride.upsert({
     *   create: {
     *     // ... data to create a Ride
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ride we want to update
     *   }
     * })
     */
    upsert<T extends RideUpsertArgs>(args: SelectSubset<T, RideUpsertArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCountArgs} args - Arguments to filter Rides to count.
     * @example
     * // Count the number of Rides
     * const count = await prisma.ride.count({
     *   where: {
     *     // ... the filter for the Rides we want to count
     *   }
     * })
    **/
    count<T extends RideCountArgs>(
      args?: Subset<T, RideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RideAggregateArgs>(args: Subset<T, RideAggregateArgs>): Prisma.PrismaPromise<GetRideAggregateType<T>>

    /**
     * Group by Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideGroupByArgs} args - Group by arguments.
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
      T extends RideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RideGroupByArgs['orderBy'] }
        : { orderBy?: RideGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ride model
   */
  readonly fields: RideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ride.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    captain<T extends Ride$captainArgs<ExtArgs> = {}>(args?: Subset<T, Ride$captainArgs<ExtArgs>>): Prisma__CaptainClient<$Result.GetResult<Prisma.$CaptainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ride model
   */
  interface RideFieldRefs {
    readonly id: FieldRef<"Ride", 'String'>
    readonly pickup: FieldRef<"Ride", 'String'>
    readonly destination: FieldRef<"Ride", 'String'>
    readonly fare: FieldRef<"Ride", 'Float'>
    readonly status: FieldRef<"Ride", 'RideStatus'>
    readonly duration: FieldRef<"Ride", 'Int'>
    readonly distance: FieldRef<"Ride", 'Float'>
    readonly paymentID: FieldRef<"Ride", 'String'>
    readonly orderId: FieldRef<"Ride", 'String'>
    readonly signature: FieldRef<"Ride", 'String'>
    readonly otp: FieldRef<"Ride", 'String'>
    readonly userId: FieldRef<"Ride", 'String'>
    readonly captainId: FieldRef<"Ride", 'String'>
    readonly createdAt: FieldRef<"Ride", 'DateTime'>
    readonly updatedAt: FieldRef<"Ride", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ride findUnique
   */
  export type RideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride findUniqueOrThrow
   */
  export type RideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride findFirst
   */
  export type RideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride findFirstOrThrow
   */
  export type RideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride findMany
   */
  export type RideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Rides to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride create
   */
  export type RideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The data needed to create a Ride.
     */
    data: XOR<RideCreateInput, RideUncheckedCreateInput>
  }

  /**
   * Ride createMany
   */
  export type RideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rides.
     */
    data: RideCreateManyInput | RideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ride createManyAndReturn
   */
  export type RideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * The data used to create many Rides.
     */
    data: RideCreateManyInput | RideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ride update
   */
  export type RideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The data needed to update a Ride.
     */
    data: XOR<RideUpdateInput, RideUncheckedUpdateInput>
    /**
     * Choose, which Ride to update.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride updateMany
   */
  export type RideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rides.
     */
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyInput>
    /**
     * Filter which Rides to update
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to update.
     */
    limit?: number
  }

  /**
   * Ride updateManyAndReturn
   */
  export type RideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * The data used to update Rides.
     */
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyInput>
    /**
     * Filter which Rides to update
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ride upsert
   */
  export type RideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The filter to search for the Ride to update in case it exists.
     */
    where: RideWhereUniqueInput
    /**
     * In case the Ride found by the `where` argument doesn't exist, create a new Ride with this data.
     */
    create: XOR<RideCreateInput, RideUncheckedCreateInput>
    /**
     * In case the Ride was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RideUpdateInput, RideUncheckedUpdateInput>
  }

  /**
   * Ride delete
   */
  export type RideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter which Ride to delete.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride deleteMany
   */
  export type RideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rides to delete
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to delete.
     */
    limit?: number
  }

  /**
   * Ride.captain
   */
  export type Ride$captainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Captain
     */
    select?: CaptainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Captain
     */
    omit?: CaptainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CaptainInclude<ExtArgs> | null
    where?: CaptainWhereInput
  }

  /**
   * Ride without action
   */
  export type RideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    socketId: 'socketId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CaptainScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    socketId: 'socketId',
    status: 'status',
    vehicleColor: 'vehicleColor',
    vehiclePlate: 'vehiclePlate',
    vehicleCapacity: 'vehicleCapacity',
    vehicleType: 'vehicleType',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CaptainScalarFieldEnum = (typeof CaptainScalarFieldEnum)[keyof typeof CaptainScalarFieldEnum]


  export const BlacklistTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    createdAt: 'createdAt'
  };

  export type BlacklistTokenScalarFieldEnum = (typeof BlacklistTokenScalarFieldEnum)[keyof typeof BlacklistTokenScalarFieldEnum]


  export const RideScalarFieldEnum: {
    id: 'id',
    pickup: 'pickup',
    destination: 'destination',
    fare: 'fare',
    status: 'status',
    duration: 'duration',
    distance: 'distance',
    paymentID: 'paymentID',
    orderId: 'orderId',
    signature: 'signature',
    otp: 'otp',
    userId: 'userId',
    captainId: 'captainId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RideScalarFieldEnum = (typeof RideScalarFieldEnum)[keyof typeof RideScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CaptainStatus'
   */
  export type EnumCaptainStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaptainStatus'>
    


  /**
   * Reference to a field of type 'CaptainStatus[]'
   */
  export type ListEnumCaptainStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CaptainStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'VehicleType[]'
   */
  export type ListEnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RideStatus'
   */
  export type EnumRideStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RideStatus'>
    


  /**
   * Reference to a field of type 'RideStatus[]'
   */
  export type ListEnumRideStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RideStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    socketId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rides?: RideListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    socketId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rides?: RideOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    socketId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    rides?: RideListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    socketId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    socketId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CaptainWhereInput = {
    AND?: CaptainWhereInput | CaptainWhereInput[]
    OR?: CaptainWhereInput[]
    NOT?: CaptainWhereInput | CaptainWhereInput[]
    id?: StringFilter<"Captain"> | string
    firstname?: StringFilter<"Captain"> | string
    lastname?: StringNullableFilter<"Captain"> | string | null
    email?: StringFilter<"Captain"> | string
    password?: StringFilter<"Captain"> | string
    socketId?: StringNullableFilter<"Captain"> | string | null
    status?: EnumCaptainStatusFilter<"Captain"> | $Enums.CaptainStatus
    vehicleColor?: StringFilter<"Captain"> | string
    vehiclePlate?: StringFilter<"Captain"> | string
    vehicleCapacity?: IntFilter<"Captain"> | number
    vehicleType?: EnumVehicleTypeFilter<"Captain"> | $Enums.VehicleType
    latitude?: FloatNullableFilter<"Captain"> | number | null
    longitude?: FloatNullableFilter<"Captain"> | number | null
    createdAt?: DateTimeFilter<"Captain"> | Date | string
    updatedAt?: DateTimeFilter<"Captain"> | Date | string
    rides?: RideListRelationFilter
  }

  export type CaptainOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    socketId?: SortOrderInput | SortOrder
    status?: SortOrder
    vehicleColor?: SortOrder
    vehiclePlate?: SortOrder
    vehicleCapacity?: SortOrder
    vehicleType?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rides?: RideOrderByRelationAggregateInput
  }

  export type CaptainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CaptainWhereInput | CaptainWhereInput[]
    OR?: CaptainWhereInput[]
    NOT?: CaptainWhereInput | CaptainWhereInput[]
    firstname?: StringFilter<"Captain"> | string
    lastname?: StringNullableFilter<"Captain"> | string | null
    password?: StringFilter<"Captain"> | string
    socketId?: StringNullableFilter<"Captain"> | string | null
    status?: EnumCaptainStatusFilter<"Captain"> | $Enums.CaptainStatus
    vehicleColor?: StringFilter<"Captain"> | string
    vehiclePlate?: StringFilter<"Captain"> | string
    vehicleCapacity?: IntFilter<"Captain"> | number
    vehicleType?: EnumVehicleTypeFilter<"Captain"> | $Enums.VehicleType
    latitude?: FloatNullableFilter<"Captain"> | number | null
    longitude?: FloatNullableFilter<"Captain"> | number | null
    createdAt?: DateTimeFilter<"Captain"> | Date | string
    updatedAt?: DateTimeFilter<"Captain"> | Date | string
    rides?: RideListRelationFilter
  }, "id" | "email">

  export type CaptainOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    socketId?: SortOrderInput | SortOrder
    status?: SortOrder
    vehicleColor?: SortOrder
    vehiclePlate?: SortOrder
    vehicleCapacity?: SortOrder
    vehicleType?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CaptainCountOrderByAggregateInput
    _avg?: CaptainAvgOrderByAggregateInput
    _max?: CaptainMaxOrderByAggregateInput
    _min?: CaptainMinOrderByAggregateInput
    _sum?: CaptainSumOrderByAggregateInput
  }

  export type CaptainScalarWhereWithAggregatesInput = {
    AND?: CaptainScalarWhereWithAggregatesInput | CaptainScalarWhereWithAggregatesInput[]
    OR?: CaptainScalarWhereWithAggregatesInput[]
    NOT?: CaptainScalarWhereWithAggregatesInput | CaptainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Captain"> | string
    firstname?: StringWithAggregatesFilter<"Captain"> | string
    lastname?: StringNullableWithAggregatesFilter<"Captain"> | string | null
    email?: StringWithAggregatesFilter<"Captain"> | string
    password?: StringWithAggregatesFilter<"Captain"> | string
    socketId?: StringNullableWithAggregatesFilter<"Captain"> | string | null
    status?: EnumCaptainStatusWithAggregatesFilter<"Captain"> | $Enums.CaptainStatus
    vehicleColor?: StringWithAggregatesFilter<"Captain"> | string
    vehiclePlate?: StringWithAggregatesFilter<"Captain"> | string
    vehicleCapacity?: IntWithAggregatesFilter<"Captain"> | number
    vehicleType?: EnumVehicleTypeWithAggregatesFilter<"Captain"> | $Enums.VehicleType
    latitude?: FloatNullableWithAggregatesFilter<"Captain"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Captain"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Captain"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Captain"> | Date | string
  }

  export type BlacklistTokenWhereInput = {
    AND?: BlacklistTokenWhereInput | BlacklistTokenWhereInput[]
    OR?: BlacklistTokenWhereInput[]
    NOT?: BlacklistTokenWhereInput | BlacklistTokenWhereInput[]
    id?: StringFilter<"BlacklistToken"> | string
    token?: StringFilter<"BlacklistToken"> | string
    createdAt?: DateTimeFilter<"BlacklistToken"> | Date | string
  }

  export type BlacklistTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: BlacklistTokenWhereInput | BlacklistTokenWhereInput[]
    OR?: BlacklistTokenWhereInput[]
    NOT?: BlacklistTokenWhereInput | BlacklistTokenWhereInput[]
    createdAt?: DateTimeFilter<"BlacklistToken"> | Date | string
  }, "id" | "token">

  export type BlacklistTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    _count?: BlacklistTokenCountOrderByAggregateInput
    _max?: BlacklistTokenMaxOrderByAggregateInput
    _min?: BlacklistTokenMinOrderByAggregateInput
  }

  export type BlacklistTokenScalarWhereWithAggregatesInput = {
    AND?: BlacklistTokenScalarWhereWithAggregatesInput | BlacklistTokenScalarWhereWithAggregatesInput[]
    OR?: BlacklistTokenScalarWhereWithAggregatesInput[]
    NOT?: BlacklistTokenScalarWhereWithAggregatesInput | BlacklistTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlacklistToken"> | string
    token?: StringWithAggregatesFilter<"BlacklistToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlacklistToken"> | Date | string
  }

  export type RideWhereInput = {
    AND?: RideWhereInput | RideWhereInput[]
    OR?: RideWhereInput[]
    NOT?: RideWhereInput | RideWhereInput[]
    id?: StringFilter<"Ride"> | string
    pickup?: StringFilter<"Ride"> | string
    destination?: StringFilter<"Ride"> | string
    fare?: FloatFilter<"Ride"> | number
    status?: EnumRideStatusFilter<"Ride"> | $Enums.RideStatus
    duration?: IntNullableFilter<"Ride"> | number | null
    distance?: FloatNullableFilter<"Ride"> | number | null
    paymentID?: StringNullableFilter<"Ride"> | string | null
    orderId?: StringNullableFilter<"Ride"> | string | null
    signature?: StringNullableFilter<"Ride"> | string | null
    otp?: StringFilter<"Ride"> | string
    userId?: StringFilter<"Ride"> | string
    captainId?: StringNullableFilter<"Ride"> | string | null
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    captain?: XOR<CaptainNullableScalarRelationFilter, CaptainWhereInput> | null
  }

  export type RideOrderByWithRelationInput = {
    id?: SortOrder
    pickup?: SortOrder
    destination?: SortOrder
    fare?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    paymentID?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    otp?: SortOrder
    userId?: SortOrder
    captainId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    captain?: CaptainOrderByWithRelationInput
  }

  export type RideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RideWhereInput | RideWhereInput[]
    OR?: RideWhereInput[]
    NOT?: RideWhereInput | RideWhereInput[]
    pickup?: StringFilter<"Ride"> | string
    destination?: StringFilter<"Ride"> | string
    fare?: FloatFilter<"Ride"> | number
    status?: EnumRideStatusFilter<"Ride"> | $Enums.RideStatus
    duration?: IntNullableFilter<"Ride"> | number | null
    distance?: FloatNullableFilter<"Ride"> | number | null
    paymentID?: StringNullableFilter<"Ride"> | string | null
    orderId?: StringNullableFilter<"Ride"> | string | null
    signature?: StringNullableFilter<"Ride"> | string | null
    otp?: StringFilter<"Ride"> | string
    userId?: StringFilter<"Ride"> | string
    captainId?: StringNullableFilter<"Ride"> | string | null
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    captain?: XOR<CaptainNullableScalarRelationFilter, CaptainWhereInput> | null
  }, "id">

  export type RideOrderByWithAggregationInput = {
    id?: SortOrder
    pickup?: SortOrder
    destination?: SortOrder
    fare?: SortOrder
    status?: SortOrder
    duration?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    paymentID?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    otp?: SortOrder
    userId?: SortOrder
    captainId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RideCountOrderByAggregateInput
    _avg?: RideAvgOrderByAggregateInput
    _max?: RideMaxOrderByAggregateInput
    _min?: RideMinOrderByAggregateInput
    _sum?: RideSumOrderByAggregateInput
  }

  export type RideScalarWhereWithAggregatesInput = {
    AND?: RideScalarWhereWithAggregatesInput | RideScalarWhereWithAggregatesInput[]
    OR?: RideScalarWhereWithAggregatesInput[]
    NOT?: RideScalarWhereWithAggregatesInput | RideScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ride"> | string
    pickup?: StringWithAggregatesFilter<"Ride"> | string
    destination?: StringWithAggregatesFilter<"Ride"> | string
    fare?: FloatWithAggregatesFilter<"Ride"> | number
    status?: EnumRideStatusWithAggregatesFilter<"Ride"> | $Enums.RideStatus
    duration?: IntNullableWithAggregatesFilter<"Ride"> | number | null
    distance?: FloatNullableWithAggregatesFilter<"Ride"> | number | null
    paymentID?: StringNullableWithAggregatesFilter<"Ride"> | string | null
    orderId?: StringNullableWithAggregatesFilter<"Ride"> | string | null
    signature?: StringNullableWithAggregatesFilter<"Ride"> | string | null
    otp?: StringWithAggregatesFilter<"Ride"> | string
    userId?: StringWithAggregatesFilter<"Ride"> | string
    captainId?: StringNullableWithAggregatesFilter<"Ride"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    socketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rides?: RideCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    socketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rides?: RideUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rides?: RideUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rides?: RideUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    socketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaptainCreateInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    socketId?: string | null
    status?: $Enums.CaptainStatus
    vehicleColor: string
    vehiclePlate: string
    vehicleCapacity: number
    vehicleType: $Enums.VehicleType
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rides?: RideCreateNestedManyWithoutCaptainInput
  }

  export type CaptainUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    socketId?: string | null
    status?: $Enums.CaptainStatus
    vehicleColor: string
    vehiclePlate: string
    vehicleCapacity: number
    vehicleType: $Enums.VehicleType
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rides?: RideUncheckedCreateNestedManyWithoutCaptainInput
  }

  export type CaptainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaptainStatusFieldUpdateOperationsInput | $Enums.CaptainStatus
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleCapacity?: IntFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rides?: RideUpdateManyWithoutCaptainNestedInput
  }

  export type CaptainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaptainStatusFieldUpdateOperationsInput | $Enums.CaptainStatus
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleCapacity?: IntFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rides?: RideUncheckedUpdateManyWithoutCaptainNestedInput
  }

  export type CaptainCreateManyInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    socketId?: string | null
    status?: $Enums.CaptainStatus
    vehicleColor: string
    vehiclePlate: string
    vehicleCapacity: number
    vehicleType: $Enums.VehicleType
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaptainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaptainStatusFieldUpdateOperationsInput | $Enums.CaptainStatus
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleCapacity?: IntFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaptainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaptainStatusFieldUpdateOperationsInput | $Enums.CaptainStatus
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleCapacity?: IntFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistTokenCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type BlacklistTokenUncheckedCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type BlacklistTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistTokenCreateManyInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type BlacklistTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCreateInput = {
    id?: string
    pickup: string
    destination: string
    fare: number
    status?: $Enums.RideStatus
    duration?: number | null
    distance?: number | null
    paymentID?: string | null
    orderId?: string | null
    signature?: string | null
    otp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRidesInput
    captain?: CaptainCreateNestedOneWithoutRidesInput
  }

  export type RideUncheckedCreateInput = {
    id?: string
    pickup: string
    destination: string
    fare: number
    status?: $Enums.RideStatus
    duration?: number | null
    distance?: number | null
    paymentID?: string | null
    orderId?: string | null
    signature?: string | null
    otp: string
    userId: string
    captainId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickup?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentID?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRidesNestedInput
    captain?: CaptainUpdateOneWithoutRidesNestedInput
  }

  export type RideUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickup?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentID?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    captainId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCreateManyInput = {
    id?: string
    pickup: string
    destination: string
    fare: number
    status?: $Enums.RideStatus
    duration?: number | null
    distance?: number | null
    paymentID?: string | null
    orderId?: string | null
    signature?: string | null
    otp: string
    userId: string
    captainId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickup?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentID?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickup?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentID?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    captainId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RideListRelationFilter = {
    every?: RideWhereInput
    some?: RideWhereInput
    none?: RideWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    socketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    socketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    socketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCaptainStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaptainStatus | EnumCaptainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaptainStatus[] | ListEnumCaptainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaptainStatus[] | ListEnumCaptainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaptainStatusFilter<$PrismaModel> | $Enums.CaptainStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CaptainCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    socketId?: SortOrder
    status?: SortOrder
    vehicleColor?: SortOrder
    vehiclePlate?: SortOrder
    vehicleCapacity?: SortOrder
    vehicleType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaptainAvgOrderByAggregateInput = {
    vehicleCapacity?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CaptainMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    socketId?: SortOrder
    status?: SortOrder
    vehicleColor?: SortOrder
    vehiclePlate?: SortOrder
    vehicleCapacity?: SortOrder
    vehicleType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaptainMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    socketId?: SortOrder
    status?: SortOrder
    vehicleColor?: SortOrder
    vehiclePlate?: SortOrder
    vehicleCapacity?: SortOrder
    vehicleType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CaptainSumOrderByAggregateInput = {
    vehicleCapacity?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumCaptainStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaptainStatus | EnumCaptainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaptainStatus[] | ListEnumCaptainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaptainStatus[] | ListEnumCaptainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaptainStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaptainStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaptainStatusFilter<$PrismaModel>
    _max?: NestedEnumCaptainStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BlacklistTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumRideStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusFilter<$PrismaModel> | $Enums.RideStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CaptainNullableScalarRelationFilter = {
    is?: CaptainWhereInput | null
    isNot?: CaptainWhereInput | null
  }

  export type RideCountOrderByAggregateInput = {
    id?: SortOrder
    pickup?: SortOrder
    destination?: SortOrder
    fare?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    distance?: SortOrder
    paymentID?: SortOrder
    orderId?: SortOrder
    signature?: SortOrder
    otp?: SortOrder
    userId?: SortOrder
    captainId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideAvgOrderByAggregateInput = {
    fare?: SortOrder
    duration?: SortOrder
    distance?: SortOrder
  }

  export type RideMaxOrderByAggregateInput = {
    id?: SortOrder
    pickup?: SortOrder
    destination?: SortOrder
    fare?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    distance?: SortOrder
    paymentID?: SortOrder
    orderId?: SortOrder
    signature?: SortOrder
    otp?: SortOrder
    userId?: SortOrder
    captainId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideMinOrderByAggregateInput = {
    id?: SortOrder
    pickup?: SortOrder
    destination?: SortOrder
    fare?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    distance?: SortOrder
    paymentID?: SortOrder
    orderId?: SortOrder
    signature?: SortOrder
    otp?: SortOrder
    userId?: SortOrder
    captainId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideSumOrderByAggregateInput = {
    fare?: SortOrder
    duration?: SortOrder
    distance?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumRideStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusWithAggregatesFilter<$PrismaModel> | $Enums.RideStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRideStatusFilter<$PrismaModel>
    _max?: NestedEnumRideStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type RideCreateNestedManyWithoutUserInput = {
    create?: XOR<RideCreateWithoutUserInput, RideUncheckedCreateWithoutUserInput> | RideCreateWithoutUserInput[] | RideUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideCreateOrConnectWithoutUserInput | RideCreateOrConnectWithoutUserInput[]
    createMany?: RideCreateManyUserInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type RideUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RideCreateWithoutUserInput, RideUncheckedCreateWithoutUserInput> | RideCreateWithoutUserInput[] | RideUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideCreateOrConnectWithoutUserInput | RideCreateOrConnectWithoutUserInput[]
    createMany?: RideCreateManyUserInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
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

  export type RideUpdateManyWithoutUserNestedInput = {
    create?: XOR<RideCreateWithoutUserInput, RideUncheckedCreateWithoutUserInput> | RideCreateWithoutUserInput[] | RideUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideCreateOrConnectWithoutUserInput | RideCreateOrConnectWithoutUserInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutUserInput | RideUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RideCreateManyUserInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutUserInput | RideUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RideUpdateManyWithWhereWithoutUserInput | RideUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type RideUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RideCreateWithoutUserInput, RideUncheckedCreateWithoutUserInput> | RideCreateWithoutUserInput[] | RideUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RideCreateOrConnectWithoutUserInput | RideCreateOrConnectWithoutUserInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutUserInput | RideUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RideCreateManyUserInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutUserInput | RideUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RideUpdateManyWithWhereWithoutUserInput | RideUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type RideCreateNestedManyWithoutCaptainInput = {
    create?: XOR<RideCreateWithoutCaptainInput, RideUncheckedCreateWithoutCaptainInput> | RideCreateWithoutCaptainInput[] | RideUncheckedCreateWithoutCaptainInput[]
    connectOrCreate?: RideCreateOrConnectWithoutCaptainInput | RideCreateOrConnectWithoutCaptainInput[]
    createMany?: RideCreateManyCaptainInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type RideUncheckedCreateNestedManyWithoutCaptainInput = {
    create?: XOR<RideCreateWithoutCaptainInput, RideUncheckedCreateWithoutCaptainInput> | RideCreateWithoutCaptainInput[] | RideUncheckedCreateWithoutCaptainInput[]
    connectOrCreate?: RideCreateOrConnectWithoutCaptainInput | RideCreateOrConnectWithoutCaptainInput[]
    createMany?: RideCreateManyCaptainInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type EnumCaptainStatusFieldUpdateOperationsInput = {
    set?: $Enums.CaptainStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RideUpdateManyWithoutCaptainNestedInput = {
    create?: XOR<RideCreateWithoutCaptainInput, RideUncheckedCreateWithoutCaptainInput> | RideCreateWithoutCaptainInput[] | RideUncheckedCreateWithoutCaptainInput[]
    connectOrCreate?: RideCreateOrConnectWithoutCaptainInput | RideCreateOrConnectWithoutCaptainInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutCaptainInput | RideUpsertWithWhereUniqueWithoutCaptainInput[]
    createMany?: RideCreateManyCaptainInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutCaptainInput | RideUpdateWithWhereUniqueWithoutCaptainInput[]
    updateMany?: RideUpdateManyWithWhereWithoutCaptainInput | RideUpdateManyWithWhereWithoutCaptainInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type RideUncheckedUpdateManyWithoutCaptainNestedInput = {
    create?: XOR<RideCreateWithoutCaptainInput, RideUncheckedCreateWithoutCaptainInput> | RideCreateWithoutCaptainInput[] | RideUncheckedCreateWithoutCaptainInput[]
    connectOrCreate?: RideCreateOrConnectWithoutCaptainInput | RideCreateOrConnectWithoutCaptainInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutCaptainInput | RideUpsertWithWhereUniqueWithoutCaptainInput[]
    createMany?: RideCreateManyCaptainInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutCaptainInput | RideUpdateWithWhereUniqueWithoutCaptainInput[]
    updateMany?: RideUpdateManyWithWhereWithoutCaptainInput | RideUpdateManyWithWhereWithoutCaptainInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRidesInput = {
    create?: XOR<UserCreateWithoutRidesInput, UserUncheckedCreateWithoutRidesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRidesInput
    connect?: UserWhereUniqueInput
  }

  export type CaptainCreateNestedOneWithoutRidesInput = {
    create?: XOR<CaptainCreateWithoutRidesInput, CaptainUncheckedCreateWithoutRidesInput>
    connectOrCreate?: CaptainCreateOrConnectWithoutRidesInput
    connect?: CaptainWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRideStatusFieldUpdateOperationsInput = {
    set?: $Enums.RideStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutRidesNestedInput = {
    create?: XOR<UserCreateWithoutRidesInput, UserUncheckedCreateWithoutRidesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRidesInput
    upsert?: UserUpsertWithoutRidesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRidesInput, UserUpdateWithoutRidesInput>, UserUncheckedUpdateWithoutRidesInput>
  }

  export type CaptainUpdateOneWithoutRidesNestedInput = {
    create?: XOR<CaptainCreateWithoutRidesInput, CaptainUncheckedCreateWithoutRidesInput>
    connectOrCreate?: CaptainCreateOrConnectWithoutRidesInput
    upsert?: CaptainUpsertWithoutRidesInput
    disconnect?: CaptainWhereInput | boolean
    delete?: CaptainWhereInput | boolean
    connect?: CaptainWhereUniqueInput
    update?: XOR<XOR<CaptainUpdateToOneWithWhereWithoutRidesInput, CaptainUpdateWithoutRidesInput>, CaptainUncheckedUpdateWithoutRidesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCaptainStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CaptainStatus | EnumCaptainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaptainStatus[] | ListEnumCaptainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaptainStatus[] | ListEnumCaptainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaptainStatusFilter<$PrismaModel> | $Enums.CaptainStatus
  }

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCaptainStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CaptainStatus | EnumCaptainStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CaptainStatus[] | ListEnumCaptainStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CaptainStatus[] | ListEnumCaptainStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCaptainStatusWithAggregatesFilter<$PrismaModel> | $Enums.CaptainStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCaptainStatusFilter<$PrismaModel>
    _max?: NestedEnumCaptainStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleType[] | ListEnumVehicleTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumRideStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusFilter<$PrismaModel> | $Enums.RideStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRideStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RideStatus | EnumRideStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RideStatus[] | ListEnumRideStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRideStatusWithAggregatesFilter<$PrismaModel> | $Enums.RideStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRideStatusFilter<$PrismaModel>
    _max?: NestedEnumRideStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type RideCreateWithoutUserInput = {
    id?: string
    pickup: string
    destination: string
    fare: number
    status?: $Enums.RideStatus
    duration?: number | null
    distance?: number | null
    paymentID?: string | null
    orderId?: string | null
    signature?: string | null
    otp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    captain?: CaptainCreateNestedOneWithoutRidesInput
  }

  export type RideUncheckedCreateWithoutUserInput = {
    id?: string
    pickup: string
    destination: string
    fare: number
    status?: $Enums.RideStatus
    duration?: number | null
    distance?: number | null
    paymentID?: string | null
    orderId?: string | null
    signature?: string | null
    otp: string
    captainId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideCreateOrConnectWithoutUserInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutUserInput, RideUncheckedCreateWithoutUserInput>
  }

  export type RideCreateManyUserInputEnvelope = {
    data: RideCreateManyUserInput | RideCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RideUpsertWithWhereUniqueWithoutUserInput = {
    where: RideWhereUniqueInput
    update: XOR<RideUpdateWithoutUserInput, RideUncheckedUpdateWithoutUserInput>
    create: XOR<RideCreateWithoutUserInput, RideUncheckedCreateWithoutUserInput>
  }

  export type RideUpdateWithWhereUniqueWithoutUserInput = {
    where: RideWhereUniqueInput
    data: XOR<RideUpdateWithoutUserInput, RideUncheckedUpdateWithoutUserInput>
  }

  export type RideUpdateManyWithWhereWithoutUserInput = {
    where: RideScalarWhereInput
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyWithoutUserInput>
  }

  export type RideScalarWhereInput = {
    AND?: RideScalarWhereInput | RideScalarWhereInput[]
    OR?: RideScalarWhereInput[]
    NOT?: RideScalarWhereInput | RideScalarWhereInput[]
    id?: StringFilter<"Ride"> | string
    pickup?: StringFilter<"Ride"> | string
    destination?: StringFilter<"Ride"> | string
    fare?: FloatFilter<"Ride"> | number
    status?: EnumRideStatusFilter<"Ride"> | $Enums.RideStatus
    duration?: IntNullableFilter<"Ride"> | number | null
    distance?: FloatNullableFilter<"Ride"> | number | null
    paymentID?: StringNullableFilter<"Ride"> | string | null
    orderId?: StringNullableFilter<"Ride"> | string | null
    signature?: StringNullableFilter<"Ride"> | string | null
    otp?: StringFilter<"Ride"> | string
    userId?: StringFilter<"Ride"> | string
    captainId?: StringNullableFilter<"Ride"> | string | null
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
  }

  export type RideCreateWithoutCaptainInput = {
    id?: string
    pickup: string
    destination: string
    fare: number
    status?: $Enums.RideStatus
    duration?: number | null
    distance?: number | null
    paymentID?: string | null
    orderId?: string | null
    signature?: string | null
    otp: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRidesInput
  }

  export type RideUncheckedCreateWithoutCaptainInput = {
    id?: string
    pickup: string
    destination: string
    fare: number
    status?: $Enums.RideStatus
    duration?: number | null
    distance?: number | null
    paymentID?: string | null
    orderId?: string | null
    signature?: string | null
    otp: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideCreateOrConnectWithoutCaptainInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutCaptainInput, RideUncheckedCreateWithoutCaptainInput>
  }

  export type RideCreateManyCaptainInputEnvelope = {
    data: RideCreateManyCaptainInput | RideCreateManyCaptainInput[]
    skipDuplicates?: boolean
  }

  export type RideUpsertWithWhereUniqueWithoutCaptainInput = {
    where: RideWhereUniqueInput
    update: XOR<RideUpdateWithoutCaptainInput, RideUncheckedUpdateWithoutCaptainInput>
    create: XOR<RideCreateWithoutCaptainInput, RideUncheckedCreateWithoutCaptainInput>
  }

  export type RideUpdateWithWhereUniqueWithoutCaptainInput = {
    where: RideWhereUniqueInput
    data: XOR<RideUpdateWithoutCaptainInput, RideUncheckedUpdateWithoutCaptainInput>
  }

  export type RideUpdateManyWithWhereWithoutCaptainInput = {
    where: RideScalarWhereInput
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyWithoutCaptainInput>
  }

  export type UserCreateWithoutRidesInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    socketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRidesInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    socketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRidesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRidesInput, UserUncheckedCreateWithoutRidesInput>
  }

  export type CaptainCreateWithoutRidesInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    socketId?: string | null
    status?: $Enums.CaptainStatus
    vehicleColor: string
    vehiclePlate: string
    vehicleCapacity: number
    vehicleType: $Enums.VehicleType
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaptainUncheckedCreateWithoutRidesInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    socketId?: string | null
    status?: $Enums.CaptainStatus
    vehicleColor: string
    vehiclePlate: string
    vehicleCapacity: number
    vehicleType: $Enums.VehicleType
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CaptainCreateOrConnectWithoutRidesInput = {
    where: CaptainWhereUniqueInput
    create: XOR<CaptainCreateWithoutRidesInput, CaptainUncheckedCreateWithoutRidesInput>
  }

  export type UserUpsertWithoutRidesInput = {
    update: XOR<UserUpdateWithoutRidesInput, UserUncheckedUpdateWithoutRidesInput>
    create: XOR<UserCreateWithoutRidesInput, UserUncheckedCreateWithoutRidesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRidesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRidesInput, UserUncheckedUpdateWithoutRidesInput>
  }

  export type UserUpdateWithoutRidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaptainUpsertWithoutRidesInput = {
    update: XOR<CaptainUpdateWithoutRidesInput, CaptainUncheckedUpdateWithoutRidesInput>
    create: XOR<CaptainCreateWithoutRidesInput, CaptainUncheckedCreateWithoutRidesInput>
    where?: CaptainWhereInput
  }

  export type CaptainUpdateToOneWithWhereWithoutRidesInput = {
    where?: CaptainWhereInput
    data: XOR<CaptainUpdateWithoutRidesInput, CaptainUncheckedUpdateWithoutRidesInput>
  }

  export type CaptainUpdateWithoutRidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaptainStatusFieldUpdateOperationsInput | $Enums.CaptainStatus
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleCapacity?: IntFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CaptainUncheckedUpdateWithoutRidesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCaptainStatusFieldUpdateOperationsInput | $Enums.CaptainStatus
    vehicleColor?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleCapacity?: IntFieldUpdateOperationsInput | number
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCreateManyUserInput = {
    id?: string
    pickup: string
    destination: string
    fare: number
    status?: $Enums.RideStatus
    duration?: number | null
    distance?: number | null
    paymentID?: string | null
    orderId?: string | null
    signature?: string | null
    otp: string
    captainId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickup?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentID?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    captain?: CaptainUpdateOneWithoutRidesNestedInput
  }

  export type RideUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickup?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentID?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    captainId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickup?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentID?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    captainId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCreateManyCaptainInput = {
    id?: string
    pickup: string
    destination: string
    fare: number
    status?: $Enums.RideStatus
    duration?: number | null
    distance?: number | null
    paymentID?: string | null
    orderId?: string | null
    signature?: string | null
    otp: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateWithoutCaptainInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickup?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentID?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRidesNestedInput
  }

  export type RideUncheckedUpdateWithoutCaptainInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickup?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentID?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUncheckedUpdateManyWithoutCaptainInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickup?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    fare?: FloatFieldUpdateOperationsInput | number
    status?: EnumRideStatusFieldUpdateOperationsInput | $Enums.RideStatus
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    paymentID?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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