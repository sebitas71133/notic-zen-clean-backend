
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model NoteTag
 * 
 */
export type NoteTag = $Result.DefaultSelection<Prisma.$NoteTagPayload>
/**
 * Model NoteImage
 * 
 */
export type NoteImage = $Result.DefaultSelection<Prisma.$NoteImagePayload>
/**
 * Model SubNote
 * 
 */
export type SubNote = $Result.DefaultSelection<Prisma.$SubNotePayload>
/**
 * Model SubNoteTag
 * 
 */
export type SubNoteTag = $Result.DefaultSelection<Prisma.$SubNoteTagPayload>
/**
 * Model SubNoteImage
 * 
 */
export type SubNoteImage = $Result.DefaultSelection<Prisma.$SubNoteImagePayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
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
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noteTag`: Exposes CRUD operations for the **NoteTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoteTags
    * const noteTags = await prisma.noteTag.findMany()
    * ```
    */
  get noteTag(): Prisma.NoteTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noteImage`: Exposes CRUD operations for the **NoteImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoteImages
    * const noteImages = await prisma.noteImage.findMany()
    * ```
    */
  get noteImage(): Prisma.NoteImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subNote`: Exposes CRUD operations for the **SubNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubNotes
    * const subNotes = await prisma.subNote.findMany()
    * ```
    */
  get subNote(): Prisma.SubNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subNoteTag`: Exposes CRUD operations for the **SubNoteTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubNoteTags
    * const subNoteTags = await prisma.subNoteTag.findMany()
    * ```
    */
  get subNoteTag(): Prisma.SubNoteTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subNoteImage`: Exposes CRUD operations for the **SubNoteImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubNoteImages
    * const subNoteImages = await prisma.subNoteImage.findMany()
    * ```
    */
  get subNoteImage(): Prisma.SubNoteImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Role: 'Role',
    User: 'User',
    Category: 'Category',
    Note: 'Note',
    Tag: 'Tag',
    NoteTag: 'NoteTag',
    NoteImage: 'NoteImage',
    SubNote: 'SubNote',
    SubNoteTag: 'SubNoteTag',
    SubNoteImage: 'SubNoteImage',
    Setting: 'Setting'
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
      modelProps: "role" | "user" | "category" | "note" | "tag" | "noteTag" | "noteImage" | "subNote" | "subNoteTag" | "subNoteImage" | "setting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
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
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      NoteTag: {
        payload: Prisma.$NoteTagPayload<ExtArgs>
        fields: Prisma.NoteTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          findFirst: {
            args: Prisma.NoteTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          findMany: {
            args: Prisma.NoteTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[]
          }
          create: {
            args: Prisma.NoteTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          createMany: {
            args: Prisma.NoteTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[]
          }
          delete: {
            args: Prisma.NoteTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          update: {
            args: Prisma.NoteTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          deleteMany: {
            args: Prisma.NoteTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[]
          }
          upsert: {
            args: Prisma.NoteTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          aggregate: {
            args: Prisma.NoteTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoteTag>
          }
          groupBy: {
            args: Prisma.NoteTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteTagCountArgs<ExtArgs>
            result: $Utils.Optional<NoteTagCountAggregateOutputType> | number
          }
        }
      }
      NoteImage: {
        payload: Prisma.$NoteImagePayload<ExtArgs>
        fields: Prisma.NoteImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteImagePayload>
          }
          findFirst: {
            args: Prisma.NoteImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteImagePayload>
          }
          findMany: {
            args: Prisma.NoteImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteImagePayload>[]
          }
          create: {
            args: Prisma.NoteImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteImagePayload>
          }
          createMany: {
            args: Prisma.NoteImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteImagePayload>[]
          }
          delete: {
            args: Prisma.NoteImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteImagePayload>
          }
          update: {
            args: Prisma.NoteImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteImagePayload>
          }
          deleteMany: {
            args: Prisma.NoteImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteImagePayload>[]
          }
          upsert: {
            args: Prisma.NoteImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteImagePayload>
          }
          aggregate: {
            args: Prisma.NoteImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoteImage>
          }
          groupBy: {
            args: Prisma.NoteImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteImageCountArgs<ExtArgs>
            result: $Utils.Optional<NoteImageCountAggregateOutputType> | number
          }
        }
      }
      SubNote: {
        payload: Prisma.$SubNotePayload<ExtArgs>
        fields: Prisma.SubNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNotePayload>
          }
          findFirst: {
            args: Prisma.SubNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNotePayload>
          }
          findMany: {
            args: Prisma.SubNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNotePayload>[]
          }
          create: {
            args: Prisma.SubNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNotePayload>
          }
          createMany: {
            args: Prisma.SubNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNotePayload>[]
          }
          delete: {
            args: Prisma.SubNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNotePayload>
          }
          update: {
            args: Prisma.SubNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNotePayload>
          }
          deleteMany: {
            args: Prisma.SubNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNotePayload>[]
          }
          upsert: {
            args: Prisma.SubNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNotePayload>
          }
          aggregate: {
            args: Prisma.SubNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubNote>
          }
          groupBy: {
            args: Prisma.SubNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubNoteCountArgs<ExtArgs>
            result: $Utils.Optional<SubNoteCountAggregateOutputType> | number
          }
        }
      }
      SubNoteTag: {
        payload: Prisma.$SubNoteTagPayload<ExtArgs>
        fields: Prisma.SubNoteTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubNoteTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubNoteTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteTagPayload>
          }
          findFirst: {
            args: Prisma.SubNoteTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubNoteTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteTagPayload>
          }
          findMany: {
            args: Prisma.SubNoteTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteTagPayload>[]
          }
          create: {
            args: Prisma.SubNoteTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteTagPayload>
          }
          createMany: {
            args: Prisma.SubNoteTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubNoteTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteTagPayload>[]
          }
          delete: {
            args: Prisma.SubNoteTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteTagPayload>
          }
          update: {
            args: Prisma.SubNoteTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteTagPayload>
          }
          deleteMany: {
            args: Prisma.SubNoteTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubNoteTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubNoteTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteTagPayload>[]
          }
          upsert: {
            args: Prisma.SubNoteTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteTagPayload>
          }
          aggregate: {
            args: Prisma.SubNoteTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubNoteTag>
          }
          groupBy: {
            args: Prisma.SubNoteTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubNoteTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubNoteTagCountArgs<ExtArgs>
            result: $Utils.Optional<SubNoteTagCountAggregateOutputType> | number
          }
        }
      }
      SubNoteImage: {
        payload: Prisma.$SubNoteImagePayload<ExtArgs>
        fields: Prisma.SubNoteImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubNoteImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubNoteImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteImagePayload>
          }
          findFirst: {
            args: Prisma.SubNoteImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubNoteImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteImagePayload>
          }
          findMany: {
            args: Prisma.SubNoteImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteImagePayload>[]
          }
          create: {
            args: Prisma.SubNoteImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteImagePayload>
          }
          createMany: {
            args: Prisma.SubNoteImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubNoteImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteImagePayload>[]
          }
          delete: {
            args: Prisma.SubNoteImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteImagePayload>
          }
          update: {
            args: Prisma.SubNoteImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteImagePayload>
          }
          deleteMany: {
            args: Prisma.SubNoteImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubNoteImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubNoteImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteImagePayload>[]
          }
          upsert: {
            args: Prisma.SubNoteImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubNoteImagePayload>
          }
          aggregate: {
            args: Prisma.SubNoteImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubNoteImage>
          }
          groupBy: {
            args: Prisma.SubNoteImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubNoteImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubNoteImageCountArgs<ExtArgs>
            result: $Utils.Optional<SubNoteImageCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
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
    role?: RoleOmit
    user?: UserOmit
    category?: CategoryOmit
    note?: NoteOmit
    tag?: TagOmit
    noteTag?: NoteTagOmit
    noteImage?: NoteImageOmit
    subNote?: SubNoteOmit
    subNoteTag?: SubNoteTagOmit
    subNoteImage?: SubNoteImageOmit
    setting?: SettingOmit
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    categories: number
    notes: number
    tags: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    tags?: boolean | UserCountOutputTypeCountTagsArgs
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
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    notes: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | CategoryCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Count Type NoteCountOutputType
   */

  export type NoteCountOutputType = {
    tags: number
    images: number
    SubNote: number
  }

  export type NoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | NoteCountOutputTypeCountTagsArgs
    images?: boolean | NoteCountOutputTypeCountImagesArgs
    SubNote?: boolean | NoteCountOutputTypeCountSubNoteArgs
  }

  // Custom InputTypes
  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCountOutputType
     */
    select?: NoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteTagWhereInput
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteImageWhereInput
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountSubNoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubNoteWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    notes: number
    SubNoteTag: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | TagCountOutputTypeCountNotesArgs
    SubNoteTag?: boolean | TagCountOutputTypeCountSubNoteTagArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteTagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountSubNoteTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubNoteTagWhereInput
  }


  /**
   * Count Type SubNoteCountOutputType
   */

  export type SubNoteCountOutputType = {
    tags: number
    images: number
  }

  export type SubNoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | SubNoteCountOutputTypeCountTagsArgs
    images?: boolean | SubNoteCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * SubNoteCountOutputType without action
   */
  export type SubNoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteCountOutputType
     */
    select?: SubNoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubNoteCountOutputType without action
   */
  export type SubNoteCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubNoteTagWhereInput
  }

  /**
   * SubNoteCountOutputType without action
   */
  export type SubNoteCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubNoteImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    emailValidated: boolean | null
    is_active: boolean | null
    image: string | null
    created_at: Date | null
    role_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password_hash: string | null
    emailValidated: boolean | null
    is_active: boolean | null
    image: string | null
    created_at: Date | null
    role_id: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    emailValidated: number
    is_active: number
    image: number
    created_at: number
    role_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    emailValidated?: true
    is_active?: true
    image?: true
    created_at?: true
    role_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    emailValidated?: true
    is_active?: true
    image?: true
    created_at?: true
    role_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    emailValidated?: true
    is_active?: true
    image?: true
    created_at?: true
    role_id?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password_hash: string
    emailValidated: boolean
    is_active: boolean
    image: string | null
    created_at: Date
    role_id: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password_hash?: boolean
    emailValidated?: boolean
    is_active?: boolean
    image?: boolean
    created_at?: boolean
    role_id?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    emailValidated?: boolean
    is_active?: boolean
    image?: boolean
    created_at?: boolean
    role_id?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    emailValidated?: boolean
    is_active?: boolean
    image?: boolean
    created_at?: boolean
    role_id?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    emailValidated?: boolean
    is_active?: boolean
    image?: boolean
    created_at?: boolean
    role_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "emailValidated" | "is_active" | "image" | "created_at" | "role_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    tags?: boolean | User$tagsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs> | null
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password_hash: string
      emailValidated: boolean
      is_active: boolean
      image: string | null
      created_at: Date
      role_id: number | null
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
    role<T extends User$roleArgs<ExtArgs> = {}>(args?: Subset<T, User$roleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends User$tagsArgs<ExtArgs> = {}>(args?: Subset<T, User$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly emailValidated: FieldRef<"User", 'Boolean'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly role_id: FieldRef<"User", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.role
   */
  export type User$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User.tags
   */
  export type User$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
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
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    user_id: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    user_id: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    color: number
    user_id: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    user_id?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    user_id?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    user_id?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    color: string | null
    user_id: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    user_id?: boolean
    user?: boolean | Category$userArgs<ExtArgs>
    notes?: boolean | Category$notesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    user_id?: boolean
    user?: boolean | Category$userArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    user_id?: boolean
    user?: boolean | Category$userArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    user_id?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "user_id", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Category$userArgs<ExtArgs>
    notes?: boolean | Category$notesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Category$userArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Category$userArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string | null
      user_id: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Category$userArgs<ExtArgs> = {}>(args?: Subset<T, Category$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notes<T extends Category$notesArgs<ExtArgs> = {}>(args?: Subset<T, Category$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly color: FieldRef<"Category", 'String'>
    readonly user_id: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.user
   */
  export type Category$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Category.notes
   */
  export type Category$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    is_archived: boolean | null
    is_pinned: boolean | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    category_id: string | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    is_archived: boolean | null
    is_pinned: boolean | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    category_id: string | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    title: number
    content: number
    is_archived: number
    is_pinned: number
    created_at: number
    updated_at: number
    user_id: number
    category_id: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    is_archived?: true
    is_pinned?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    category_id?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    is_archived?: true
    is_pinned?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    category_id?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    is_archived?: true
    is_pinned?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    category_id?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    title: string | null
    content: string | null
    is_archived: boolean
    is_pinned: boolean
    created_at: Date
    updated_at: Date
    user_id: string
    category_id: string | null
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    category_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Note$categoryArgs<ExtArgs>
    tags?: boolean | Note$tagsArgs<ExtArgs>
    images?: boolean | Note$imagesArgs<ExtArgs>
    SubNote?: boolean | Note$SubNoteArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    category_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Note$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    category_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Note$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    category_id?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "is_archived" | "is_pinned" | "created_at" | "updated_at" | "user_id" | "category_id", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Note$categoryArgs<ExtArgs>
    tags?: boolean | Note$tagsArgs<ExtArgs>
    images?: boolean | Note$imagesArgs<ExtArgs>
    SubNote?: boolean | Note$SubNoteArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Note$categoryArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Note$categoryArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      tags: Prisma.$NoteTagPayload<ExtArgs>[]
      images: Prisma.$NoteImagePayload<ExtArgs>[]
      SubNote: Prisma.$SubNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      content: string | null
      is_archived: boolean
      is_pinned: boolean
      created_at: Date
      updated_at: Date
      user_id: string
      category_id: string | null
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Note$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Note$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tags<T extends Note$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Note$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Note$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Note$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SubNote<T extends Note$SubNoteArgs<ExtArgs> = {}>(args?: Subset<T, Note$SubNoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly title: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly is_archived: FieldRef<"Note", 'Boolean'>
    readonly is_pinned: FieldRef<"Note", 'Boolean'>
    readonly created_at: FieldRef<"Note", 'DateTime'>
    readonly updated_at: FieldRef<"Note", 'DateTime'>
    readonly user_id: FieldRef<"Note", 'String'>
    readonly category_id: FieldRef<"Note", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note.category
   */
  export type Note$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Note.tags
   */
  export type Note$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    where?: NoteTagWhereInput
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    cursor?: NoteTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * Note.images
   */
  export type Note$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageInclude<ExtArgs> | null
    where?: NoteImageWhereInput
    orderBy?: NoteImageOrderByWithRelationInput | NoteImageOrderByWithRelationInput[]
    cursor?: NoteImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteImageScalarFieldEnum | NoteImageScalarFieldEnum[]
  }

  /**
   * Note.SubNote
   */
  export type Note$SubNoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteInclude<ExtArgs> | null
    where?: SubNoteWhereInput
    orderBy?: SubNoteOrderByWithRelationInput | SubNoteOrderByWithRelationInput[]
    cursor?: SubNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubNoteScalarFieldEnum | SubNoteScalarFieldEnum[]
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    user_id: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    user_id: string | null
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    user?: boolean | Tag$userArgs<ExtArgs>
    notes?: boolean | Tag$notesArgs<ExtArgs>
    SubNoteTag?: boolean | Tag$SubNoteTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    user?: boolean | Tag$userArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    user?: boolean | Tag$userArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    user_id?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "user_id", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Tag$userArgs<ExtArgs>
    notes?: boolean | Tag$notesArgs<ExtArgs>
    SubNoteTag?: boolean | Tag$SubNoteTagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Tag$userArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Tag$userArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      notes: Prisma.$NoteTagPayload<ExtArgs>[]
      SubNoteTag: Prisma.$SubNoteTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      user_id: string | null
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Tag$userArgs<ExtArgs> = {}>(args?: Subset<T, Tag$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notes<T extends Tag$notesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SubNoteTag<T extends Tag$SubNoteTagArgs<ExtArgs> = {}>(args?: Subset<T, Tag$SubNoteTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly user_id: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.user
   */
  export type Tag$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Tag.notes
   */
  export type Tag$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    where?: NoteTagWhereInput
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    cursor?: NoteTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * Tag.SubNoteTag
   */
  export type Tag$SubNoteTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
    where?: SubNoteTagWhereInput
    orderBy?: SubNoteTagOrderByWithRelationInput | SubNoteTagOrderByWithRelationInput[]
    cursor?: SubNoteTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubNoteTagScalarFieldEnum | SubNoteTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model NoteTag
   */

  export type AggregateNoteTag = {
    _count: NoteTagCountAggregateOutputType | null
    _min: NoteTagMinAggregateOutputType | null
    _max: NoteTagMaxAggregateOutputType | null
  }

  export type NoteTagMinAggregateOutputType = {
    note_id: string | null
    tag_id: string | null
  }

  export type NoteTagMaxAggregateOutputType = {
    note_id: string | null
    tag_id: string | null
  }

  export type NoteTagCountAggregateOutputType = {
    note_id: number
    tag_id: number
    _all: number
  }


  export type NoteTagMinAggregateInputType = {
    note_id?: true
    tag_id?: true
  }

  export type NoteTagMaxAggregateInputType = {
    note_id?: true
    tag_id?: true
  }

  export type NoteTagCountAggregateInputType = {
    note_id?: true
    tag_id?: true
    _all?: true
  }

  export type NoteTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteTag to aggregate.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoteTags
    **/
    _count?: true | NoteTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteTagMaxAggregateInputType
  }

  export type GetNoteTagAggregateType<T extends NoteTagAggregateArgs> = {
        [P in keyof T & keyof AggregateNoteTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteTag[P]>
      : GetScalarType<T[P], AggregateNoteTag[P]>
  }




  export type NoteTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteTagWhereInput
    orderBy?: NoteTagOrderByWithAggregationInput | NoteTagOrderByWithAggregationInput[]
    by: NoteTagScalarFieldEnum[] | NoteTagScalarFieldEnum
    having?: NoteTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteTagCountAggregateInputType | true
    _min?: NoteTagMinAggregateInputType
    _max?: NoteTagMaxAggregateInputType
  }

  export type NoteTagGroupByOutputType = {
    note_id: string
    tag_id: string
    _count: NoteTagCountAggregateOutputType | null
    _min: NoteTagMinAggregateOutputType | null
    _max: NoteTagMaxAggregateOutputType | null
  }

  type GetNoteTagGroupByPayload<T extends NoteTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteTagGroupByOutputType[P]>
            : GetScalarType<T[P], NoteTagGroupByOutputType[P]>
        }
      >
    >


  export type NoteTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    tag_id?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteTag"]>

  export type NoteTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    tag_id?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteTag"]>

  export type NoteTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    tag_id?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteTag"]>

  export type NoteTagSelectScalar = {
    note_id?: boolean
    tag_id?: boolean
  }

  export type NoteTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"note_id" | "tag_id", ExtArgs["result"]["noteTag"]>
  export type NoteTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type NoteTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type NoteTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $NoteTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoteTag"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      note_id: string
      tag_id: string
    }, ExtArgs["result"]["noteTag"]>
    composites: {}
  }

  type NoteTagGetPayload<S extends boolean | null | undefined | NoteTagDefaultArgs> = $Result.GetResult<Prisma.$NoteTagPayload, S>

  type NoteTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteTagCountAggregateInputType | true
    }

  export interface NoteTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoteTag'], meta: { name: 'NoteTag' } }
    /**
     * Find zero or one NoteTag that matches the filter.
     * @param {NoteTagFindUniqueArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteTagFindUniqueArgs>(args: SelectSubset<T, NoteTagFindUniqueArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoteTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteTagFindUniqueOrThrowArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteTagFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindFirstArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteTagFindFirstArgs>(args?: SelectSubset<T, NoteTagFindFirstArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindFirstOrThrowArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteTagFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoteTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteTags
     * const noteTags = await prisma.noteTag.findMany()
     * 
     * // Get first 10 NoteTags
     * const noteTags = await prisma.noteTag.findMany({ take: 10 })
     * 
     * // Only select the `note_id`
     * const noteTagWithNote_idOnly = await prisma.noteTag.findMany({ select: { note_id: true } })
     * 
     */
    findMany<T extends NoteTagFindManyArgs>(args?: SelectSubset<T, NoteTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoteTag.
     * @param {NoteTagCreateArgs} args - Arguments to create a NoteTag.
     * @example
     * // Create one NoteTag
     * const NoteTag = await prisma.noteTag.create({
     *   data: {
     *     // ... data to create a NoteTag
     *   }
     * })
     * 
     */
    create<T extends NoteTagCreateArgs>(args: SelectSubset<T, NoteTagCreateArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoteTags.
     * @param {NoteTagCreateManyArgs} args - Arguments to create many NoteTags.
     * @example
     * // Create many NoteTags
     * const noteTag = await prisma.noteTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteTagCreateManyArgs>(args?: SelectSubset<T, NoteTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoteTags and returns the data saved in the database.
     * @param {NoteTagCreateManyAndReturnArgs} args - Arguments to create many NoteTags.
     * @example
     * // Create many NoteTags
     * const noteTag = await prisma.noteTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoteTags and only return the `note_id`
     * const noteTagWithNote_idOnly = await prisma.noteTag.createManyAndReturn({
     *   select: { note_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteTagCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NoteTag.
     * @param {NoteTagDeleteArgs} args - Arguments to delete one NoteTag.
     * @example
     * // Delete one NoteTag
     * const NoteTag = await prisma.noteTag.delete({
     *   where: {
     *     // ... filter to delete one NoteTag
     *   }
     * })
     * 
     */
    delete<T extends NoteTagDeleteArgs>(args: SelectSubset<T, NoteTagDeleteArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoteTag.
     * @param {NoteTagUpdateArgs} args - Arguments to update one NoteTag.
     * @example
     * // Update one NoteTag
     * const noteTag = await prisma.noteTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteTagUpdateArgs>(args: SelectSubset<T, NoteTagUpdateArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoteTags.
     * @param {NoteTagDeleteManyArgs} args - Arguments to filter NoteTags to delete.
     * @example
     * // Delete a few NoteTags
     * const { count } = await prisma.noteTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteTagDeleteManyArgs>(args?: SelectSubset<T, NoteTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteTags
     * const noteTag = await prisma.noteTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteTagUpdateManyArgs>(args: SelectSubset<T, NoteTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteTags and returns the data updated in the database.
     * @param {NoteTagUpdateManyAndReturnArgs} args - Arguments to update many NoteTags.
     * @example
     * // Update many NoteTags
     * const noteTag = await prisma.noteTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NoteTags and only return the `note_id`
     * const noteTagWithNote_idOnly = await prisma.noteTag.updateManyAndReturn({
     *   select: { note_id: true },
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
    updateManyAndReturn<T extends NoteTagUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NoteTag.
     * @param {NoteTagUpsertArgs} args - Arguments to update or create a NoteTag.
     * @example
     * // Update or create a NoteTag
     * const noteTag = await prisma.noteTag.upsert({
     *   create: {
     *     // ... data to create a NoteTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteTag we want to update
     *   }
     * })
     */
    upsert<T extends NoteTagUpsertArgs>(args: SelectSubset<T, NoteTagUpsertArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagCountArgs} args - Arguments to filter NoteTags to count.
     * @example
     * // Count the number of NoteTags
     * const count = await prisma.noteTag.count({
     *   where: {
     *     // ... the filter for the NoteTags we want to count
     *   }
     * })
    **/
    count<T extends NoteTagCountArgs>(
      args?: Subset<T, NoteTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteTagAggregateArgs>(args: Subset<T, NoteTagAggregateArgs>): Prisma.PrismaPromise<GetNoteTagAggregateType<T>>

    /**
     * Group by NoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagGroupByArgs} args - Group by arguments.
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
      T extends NoteTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteTagGroupByArgs['orderBy'] }
        : { orderBy?: NoteTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoteTag model
   */
  readonly fields: NoteTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NoteTag model
   */
  interface NoteTagFieldRefs {
    readonly note_id: FieldRef<"NoteTag", 'String'>
    readonly tag_id: FieldRef<"NoteTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NoteTag findUnique
   */
  export type NoteTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag findUniqueOrThrow
   */
  export type NoteTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag findFirst
   */
  export type NoteTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteTags.
     */
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * NoteTag findFirstOrThrow
   */
  export type NoteTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteTags.
     */
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * NoteTag findMany
   */
  export type NoteTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTags to fetch.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * NoteTag create
   */
  export type NoteTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * The data needed to create a NoteTag.
     */
    data: XOR<NoteTagCreateInput, NoteTagUncheckedCreateInput>
  }

  /**
   * NoteTag createMany
   */
  export type NoteTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoteTags.
     */
    data: NoteTagCreateManyInput | NoteTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteTag createManyAndReturn
   */
  export type NoteTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * The data used to create many NoteTags.
     */
    data: NoteTagCreateManyInput | NoteTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteTag update
   */
  export type NoteTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * The data needed to update a NoteTag.
     */
    data: XOR<NoteTagUpdateInput, NoteTagUncheckedUpdateInput>
    /**
     * Choose, which NoteTag to update.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag updateMany
   */
  export type NoteTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoteTags.
     */
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyInput>
    /**
     * Filter which NoteTags to update
     */
    where?: NoteTagWhereInput
    /**
     * Limit how many NoteTags to update.
     */
    limit?: number
  }

  /**
   * NoteTag updateManyAndReturn
   */
  export type NoteTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * The data used to update NoteTags.
     */
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyInput>
    /**
     * Filter which NoteTags to update
     */
    where?: NoteTagWhereInput
    /**
     * Limit how many NoteTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteTag upsert
   */
  export type NoteTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * The filter to search for the NoteTag to update in case it exists.
     */
    where: NoteTagWhereUniqueInput
    /**
     * In case the NoteTag found by the `where` argument doesn't exist, create a new NoteTag with this data.
     */
    create: XOR<NoteTagCreateInput, NoteTagUncheckedCreateInput>
    /**
     * In case the NoteTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteTagUpdateInput, NoteTagUncheckedUpdateInput>
  }

  /**
   * NoteTag delete
   */
  export type NoteTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter which NoteTag to delete.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag deleteMany
   */
  export type NoteTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteTags to delete
     */
    where?: NoteTagWhereInput
    /**
     * Limit how many NoteTags to delete.
     */
    limit?: number
  }

  /**
   * NoteTag without action
   */
  export type NoteTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
  }


  /**
   * Model NoteImage
   */

  export type AggregateNoteImage = {
    _count: NoteImageCountAggregateOutputType | null
    _min: NoteImageMinAggregateOutputType | null
    _max: NoteImageMaxAggregateOutputType | null
  }

  export type NoteImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    public_id: string | null
    alt_text: string | null
    created_at: Date | null
    note_id: string | null
  }

  export type NoteImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    public_id: string | null
    alt_text: string | null
    created_at: Date | null
    note_id: string | null
  }

  export type NoteImageCountAggregateOutputType = {
    id: number
    url: number
    public_id: number
    alt_text: number
    created_at: number
    note_id: number
    _all: number
  }


  export type NoteImageMinAggregateInputType = {
    id?: true
    url?: true
    public_id?: true
    alt_text?: true
    created_at?: true
    note_id?: true
  }

  export type NoteImageMaxAggregateInputType = {
    id?: true
    url?: true
    public_id?: true
    alt_text?: true
    created_at?: true
    note_id?: true
  }

  export type NoteImageCountAggregateInputType = {
    id?: true
    url?: true
    public_id?: true
    alt_text?: true
    created_at?: true
    note_id?: true
    _all?: true
  }

  export type NoteImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteImage to aggregate.
     */
    where?: NoteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteImages to fetch.
     */
    orderBy?: NoteImageOrderByWithRelationInput | NoteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoteImages
    **/
    _count?: true | NoteImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteImageMaxAggregateInputType
  }

  export type GetNoteImageAggregateType<T extends NoteImageAggregateArgs> = {
        [P in keyof T & keyof AggregateNoteImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteImage[P]>
      : GetScalarType<T[P], AggregateNoteImage[P]>
  }




  export type NoteImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteImageWhereInput
    orderBy?: NoteImageOrderByWithAggregationInput | NoteImageOrderByWithAggregationInput[]
    by: NoteImageScalarFieldEnum[] | NoteImageScalarFieldEnum
    having?: NoteImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteImageCountAggregateInputType | true
    _min?: NoteImageMinAggregateInputType
    _max?: NoteImageMaxAggregateInputType
  }

  export type NoteImageGroupByOutputType = {
    id: string
    url: string
    public_id: string | null
    alt_text: string | null
    created_at: Date
    note_id: string
    _count: NoteImageCountAggregateOutputType | null
    _min: NoteImageMinAggregateOutputType | null
    _max: NoteImageMaxAggregateOutputType | null
  }

  type GetNoteImageGroupByPayload<T extends NoteImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteImageGroupByOutputType[P]>
            : GetScalarType<T[P], NoteImageGroupByOutputType[P]>
        }
      >
    >


  export type NoteImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    public_id?: boolean
    alt_text?: boolean
    created_at?: boolean
    note_id?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteImage"]>

  export type NoteImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    public_id?: boolean
    alt_text?: boolean
    created_at?: boolean
    note_id?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteImage"]>

  export type NoteImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    public_id?: boolean
    alt_text?: boolean
    created_at?: boolean
    note_id?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteImage"]>

  export type NoteImageSelectScalar = {
    id?: boolean
    url?: boolean
    public_id?: boolean
    alt_text?: boolean
    created_at?: boolean
    note_id?: boolean
  }

  export type NoteImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "public_id" | "alt_text" | "created_at" | "note_id", ExtArgs["result"]["noteImage"]>
  export type NoteImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }
  export type NoteImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }
  export type NoteImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }

  export type $NoteImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoteImage"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      public_id: string | null
      alt_text: string | null
      created_at: Date
      note_id: string
    }, ExtArgs["result"]["noteImage"]>
    composites: {}
  }

  type NoteImageGetPayload<S extends boolean | null | undefined | NoteImageDefaultArgs> = $Result.GetResult<Prisma.$NoteImagePayload, S>

  type NoteImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteImageCountAggregateInputType | true
    }

  export interface NoteImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoteImage'], meta: { name: 'NoteImage' } }
    /**
     * Find zero or one NoteImage that matches the filter.
     * @param {NoteImageFindUniqueArgs} args - Arguments to find a NoteImage
     * @example
     * // Get one NoteImage
     * const noteImage = await prisma.noteImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteImageFindUniqueArgs>(args: SelectSubset<T, NoteImageFindUniqueArgs<ExtArgs>>): Prisma__NoteImageClient<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoteImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteImageFindUniqueOrThrowArgs} args - Arguments to find a NoteImage
     * @example
     * // Get one NoteImage
     * const noteImage = await prisma.noteImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteImageFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteImageClient<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteImageFindFirstArgs} args - Arguments to find a NoteImage
     * @example
     * // Get one NoteImage
     * const noteImage = await prisma.noteImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteImageFindFirstArgs>(args?: SelectSubset<T, NoteImageFindFirstArgs<ExtArgs>>): Prisma__NoteImageClient<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteImageFindFirstOrThrowArgs} args - Arguments to find a NoteImage
     * @example
     * // Get one NoteImage
     * const noteImage = await prisma.noteImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteImageFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteImageClient<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoteImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteImages
     * const noteImages = await prisma.noteImage.findMany()
     * 
     * // Get first 10 NoteImages
     * const noteImages = await prisma.noteImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteImageWithIdOnly = await prisma.noteImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteImageFindManyArgs>(args?: SelectSubset<T, NoteImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoteImage.
     * @param {NoteImageCreateArgs} args - Arguments to create a NoteImage.
     * @example
     * // Create one NoteImage
     * const NoteImage = await prisma.noteImage.create({
     *   data: {
     *     // ... data to create a NoteImage
     *   }
     * })
     * 
     */
    create<T extends NoteImageCreateArgs>(args: SelectSubset<T, NoteImageCreateArgs<ExtArgs>>): Prisma__NoteImageClient<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoteImages.
     * @param {NoteImageCreateManyArgs} args - Arguments to create many NoteImages.
     * @example
     * // Create many NoteImages
     * const noteImage = await prisma.noteImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteImageCreateManyArgs>(args?: SelectSubset<T, NoteImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoteImages and returns the data saved in the database.
     * @param {NoteImageCreateManyAndReturnArgs} args - Arguments to create many NoteImages.
     * @example
     * // Create many NoteImages
     * const noteImage = await prisma.noteImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoteImages and only return the `id`
     * const noteImageWithIdOnly = await prisma.noteImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteImageCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NoteImage.
     * @param {NoteImageDeleteArgs} args - Arguments to delete one NoteImage.
     * @example
     * // Delete one NoteImage
     * const NoteImage = await prisma.noteImage.delete({
     *   where: {
     *     // ... filter to delete one NoteImage
     *   }
     * })
     * 
     */
    delete<T extends NoteImageDeleteArgs>(args: SelectSubset<T, NoteImageDeleteArgs<ExtArgs>>): Prisma__NoteImageClient<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoteImage.
     * @param {NoteImageUpdateArgs} args - Arguments to update one NoteImage.
     * @example
     * // Update one NoteImage
     * const noteImage = await prisma.noteImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteImageUpdateArgs>(args: SelectSubset<T, NoteImageUpdateArgs<ExtArgs>>): Prisma__NoteImageClient<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoteImages.
     * @param {NoteImageDeleteManyArgs} args - Arguments to filter NoteImages to delete.
     * @example
     * // Delete a few NoteImages
     * const { count } = await prisma.noteImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteImageDeleteManyArgs>(args?: SelectSubset<T, NoteImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteImages
     * const noteImage = await prisma.noteImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteImageUpdateManyArgs>(args: SelectSubset<T, NoteImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteImages and returns the data updated in the database.
     * @param {NoteImageUpdateManyAndReturnArgs} args - Arguments to update many NoteImages.
     * @example
     * // Update many NoteImages
     * const noteImage = await prisma.noteImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NoteImages and only return the `id`
     * const noteImageWithIdOnly = await prisma.noteImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoteImageUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NoteImage.
     * @param {NoteImageUpsertArgs} args - Arguments to update or create a NoteImage.
     * @example
     * // Update or create a NoteImage
     * const noteImage = await prisma.noteImage.upsert({
     *   create: {
     *     // ... data to create a NoteImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteImage we want to update
     *   }
     * })
     */
    upsert<T extends NoteImageUpsertArgs>(args: SelectSubset<T, NoteImageUpsertArgs<ExtArgs>>): Prisma__NoteImageClient<$Result.GetResult<Prisma.$NoteImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoteImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteImageCountArgs} args - Arguments to filter NoteImages to count.
     * @example
     * // Count the number of NoteImages
     * const count = await prisma.noteImage.count({
     *   where: {
     *     // ... the filter for the NoteImages we want to count
     *   }
     * })
    **/
    count<T extends NoteImageCountArgs>(
      args?: Subset<T, NoteImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoteImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteImageAggregateArgs>(args: Subset<T, NoteImageAggregateArgs>): Prisma.PrismaPromise<GetNoteImageAggregateType<T>>

    /**
     * Group by NoteImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteImageGroupByArgs} args - Group by arguments.
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
      T extends NoteImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteImageGroupByArgs['orderBy'] }
        : { orderBy?: NoteImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoteImage model
   */
  readonly fields: NoteImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NoteImage model
   */
  interface NoteImageFieldRefs {
    readonly id: FieldRef<"NoteImage", 'String'>
    readonly url: FieldRef<"NoteImage", 'String'>
    readonly public_id: FieldRef<"NoteImage", 'String'>
    readonly alt_text: FieldRef<"NoteImage", 'String'>
    readonly created_at: FieldRef<"NoteImage", 'DateTime'>
    readonly note_id: FieldRef<"NoteImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NoteImage findUnique
   */
  export type NoteImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageInclude<ExtArgs> | null
    /**
     * Filter, which NoteImage to fetch.
     */
    where: NoteImageWhereUniqueInput
  }

  /**
   * NoteImage findUniqueOrThrow
   */
  export type NoteImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageInclude<ExtArgs> | null
    /**
     * Filter, which NoteImage to fetch.
     */
    where: NoteImageWhereUniqueInput
  }

  /**
   * NoteImage findFirst
   */
  export type NoteImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageInclude<ExtArgs> | null
    /**
     * Filter, which NoteImage to fetch.
     */
    where?: NoteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteImages to fetch.
     */
    orderBy?: NoteImageOrderByWithRelationInput | NoteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteImages.
     */
    cursor?: NoteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteImages.
     */
    distinct?: NoteImageScalarFieldEnum | NoteImageScalarFieldEnum[]
  }

  /**
   * NoteImage findFirstOrThrow
   */
  export type NoteImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageInclude<ExtArgs> | null
    /**
     * Filter, which NoteImage to fetch.
     */
    where?: NoteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteImages to fetch.
     */
    orderBy?: NoteImageOrderByWithRelationInput | NoteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteImages.
     */
    cursor?: NoteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteImages.
     */
    distinct?: NoteImageScalarFieldEnum | NoteImageScalarFieldEnum[]
  }

  /**
   * NoteImage findMany
   */
  export type NoteImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageInclude<ExtArgs> | null
    /**
     * Filter, which NoteImages to fetch.
     */
    where?: NoteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteImages to fetch.
     */
    orderBy?: NoteImageOrderByWithRelationInput | NoteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoteImages.
     */
    cursor?: NoteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteImages.
     */
    skip?: number
    distinct?: NoteImageScalarFieldEnum | NoteImageScalarFieldEnum[]
  }

  /**
   * NoteImage create
   */
  export type NoteImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageInclude<ExtArgs> | null
    /**
     * The data needed to create a NoteImage.
     */
    data: XOR<NoteImageCreateInput, NoteImageUncheckedCreateInput>
  }

  /**
   * NoteImage createMany
   */
  export type NoteImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoteImages.
     */
    data: NoteImageCreateManyInput | NoteImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteImage createManyAndReturn
   */
  export type NoteImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * The data used to create many NoteImages.
     */
    data: NoteImageCreateManyInput | NoteImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteImage update
   */
  export type NoteImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageInclude<ExtArgs> | null
    /**
     * The data needed to update a NoteImage.
     */
    data: XOR<NoteImageUpdateInput, NoteImageUncheckedUpdateInput>
    /**
     * Choose, which NoteImage to update.
     */
    where: NoteImageWhereUniqueInput
  }

  /**
   * NoteImage updateMany
   */
  export type NoteImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoteImages.
     */
    data: XOR<NoteImageUpdateManyMutationInput, NoteImageUncheckedUpdateManyInput>
    /**
     * Filter which NoteImages to update
     */
    where?: NoteImageWhereInput
    /**
     * Limit how many NoteImages to update.
     */
    limit?: number
  }

  /**
   * NoteImage updateManyAndReturn
   */
  export type NoteImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * The data used to update NoteImages.
     */
    data: XOR<NoteImageUpdateManyMutationInput, NoteImageUncheckedUpdateManyInput>
    /**
     * Filter which NoteImages to update
     */
    where?: NoteImageWhereInput
    /**
     * Limit how many NoteImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteImage upsert
   */
  export type NoteImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageInclude<ExtArgs> | null
    /**
     * The filter to search for the NoteImage to update in case it exists.
     */
    where: NoteImageWhereUniqueInput
    /**
     * In case the NoteImage found by the `where` argument doesn't exist, create a new NoteImage with this data.
     */
    create: XOR<NoteImageCreateInput, NoteImageUncheckedCreateInput>
    /**
     * In case the NoteImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteImageUpdateInput, NoteImageUncheckedUpdateInput>
  }

  /**
   * NoteImage delete
   */
  export type NoteImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageInclude<ExtArgs> | null
    /**
     * Filter which NoteImage to delete.
     */
    where: NoteImageWhereUniqueInput
  }

  /**
   * NoteImage deleteMany
   */
  export type NoteImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteImages to delete
     */
    where?: NoteImageWhereInput
    /**
     * Limit how many NoteImages to delete.
     */
    limit?: number
  }

  /**
   * NoteImage without action
   */
  export type NoteImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteImage
     */
    select?: NoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteImage
     */
    omit?: NoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteImageInclude<ExtArgs> | null
  }


  /**
   * Model SubNote
   */

  export type AggregateSubNote = {
    _count: SubNoteCountAggregateOutputType | null
    _min: SubNoteMinAggregateOutputType | null
    _max: SubNoteMaxAggregateOutputType | null
  }

  export type SubNoteMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    note_id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_archived: boolean | null
    is_pinned: boolean | null
  }

  export type SubNoteMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    note_id: string | null
    created_at: Date | null
    updated_at: Date | null
    is_archived: boolean | null
    is_pinned: boolean | null
  }

  export type SubNoteCountAggregateOutputType = {
    id: number
    title: number
    description: number
    note_id: number
    created_at: number
    updated_at: number
    is_archived: number
    is_pinned: number
    _all: number
  }


  export type SubNoteMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    note_id?: true
    created_at?: true
    updated_at?: true
    is_archived?: true
    is_pinned?: true
  }

  export type SubNoteMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    note_id?: true
    created_at?: true
    updated_at?: true
    is_archived?: true
    is_pinned?: true
  }

  export type SubNoteCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    note_id?: true
    created_at?: true
    updated_at?: true
    is_archived?: true
    is_pinned?: true
    _all?: true
  }

  export type SubNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubNote to aggregate.
     */
    where?: SubNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNotes to fetch.
     */
    orderBy?: SubNoteOrderByWithRelationInput | SubNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubNotes
    **/
    _count?: true | SubNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubNoteMaxAggregateInputType
  }

  export type GetSubNoteAggregateType<T extends SubNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateSubNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubNote[P]>
      : GetScalarType<T[P], AggregateSubNote[P]>
  }




  export type SubNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubNoteWhereInput
    orderBy?: SubNoteOrderByWithAggregationInput | SubNoteOrderByWithAggregationInput[]
    by: SubNoteScalarFieldEnum[] | SubNoteScalarFieldEnum
    having?: SubNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubNoteCountAggregateInputType | true
    _min?: SubNoteMinAggregateInputType
    _max?: SubNoteMaxAggregateInputType
  }

  export type SubNoteGroupByOutputType = {
    id: string
    title: string
    description: string | null
    note_id: string
    created_at: Date
    updated_at: Date
    is_archived: boolean
    is_pinned: boolean
    _count: SubNoteCountAggregateOutputType | null
    _min: SubNoteMinAggregateOutputType | null
    _max: SubNoteMaxAggregateOutputType | null
  }

  type GetSubNoteGroupByPayload<T extends SubNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubNoteGroupByOutputType[P]>
            : GetScalarType<T[P], SubNoteGroupByOutputType[P]>
        }
      >
    >


  export type SubNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    note_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_archived?: boolean
    is_pinned?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tags?: boolean | SubNote$tagsArgs<ExtArgs>
    images?: boolean | SubNote$imagesArgs<ExtArgs>
    _count?: boolean | SubNoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subNote"]>

  export type SubNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    note_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_archived?: boolean
    is_pinned?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subNote"]>

  export type SubNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    note_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_archived?: boolean
    is_pinned?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subNote"]>

  export type SubNoteSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    note_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_archived?: boolean
    is_pinned?: boolean
  }

  export type SubNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "note_id" | "created_at" | "updated_at" | "is_archived" | "is_pinned", ExtArgs["result"]["subNote"]>
  export type SubNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tags?: boolean | SubNote$tagsArgs<ExtArgs>
    images?: boolean | SubNote$imagesArgs<ExtArgs>
    _count?: boolean | SubNoteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }
  export type SubNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }

  export type $SubNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubNote"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
      tags: Prisma.$SubNoteTagPayload<ExtArgs>[]
      images: Prisma.$SubNoteImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      note_id: string
      created_at: Date
      updated_at: Date
      is_archived: boolean
      is_pinned: boolean
    }, ExtArgs["result"]["subNote"]>
    composites: {}
  }

  type SubNoteGetPayload<S extends boolean | null | undefined | SubNoteDefaultArgs> = $Result.GetResult<Prisma.$SubNotePayload, S>

  type SubNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubNoteCountAggregateInputType | true
    }

  export interface SubNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubNote'], meta: { name: 'SubNote' } }
    /**
     * Find zero or one SubNote that matches the filter.
     * @param {SubNoteFindUniqueArgs} args - Arguments to find a SubNote
     * @example
     * // Get one SubNote
     * const subNote = await prisma.subNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubNoteFindUniqueArgs>(args: SelectSubset<T, SubNoteFindUniqueArgs<ExtArgs>>): Prisma__SubNoteClient<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubNoteFindUniqueOrThrowArgs} args - Arguments to find a SubNote
     * @example
     * // Get one SubNote
     * const subNote = await prisma.subNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, SubNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubNoteClient<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteFindFirstArgs} args - Arguments to find a SubNote
     * @example
     * // Get one SubNote
     * const subNote = await prisma.subNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubNoteFindFirstArgs>(args?: SelectSubset<T, SubNoteFindFirstArgs<ExtArgs>>): Prisma__SubNoteClient<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteFindFirstOrThrowArgs} args - Arguments to find a SubNote
     * @example
     * // Get one SubNote
     * const subNote = await prisma.subNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, SubNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubNoteClient<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubNotes
     * const subNotes = await prisma.subNote.findMany()
     * 
     * // Get first 10 SubNotes
     * const subNotes = await prisma.subNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subNoteWithIdOnly = await prisma.subNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubNoteFindManyArgs>(args?: SelectSubset<T, SubNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubNote.
     * @param {SubNoteCreateArgs} args - Arguments to create a SubNote.
     * @example
     * // Create one SubNote
     * const SubNote = await prisma.subNote.create({
     *   data: {
     *     // ... data to create a SubNote
     *   }
     * })
     * 
     */
    create<T extends SubNoteCreateArgs>(args: SelectSubset<T, SubNoteCreateArgs<ExtArgs>>): Prisma__SubNoteClient<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubNotes.
     * @param {SubNoteCreateManyArgs} args - Arguments to create many SubNotes.
     * @example
     * // Create many SubNotes
     * const subNote = await prisma.subNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubNoteCreateManyArgs>(args?: SelectSubset<T, SubNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubNotes and returns the data saved in the database.
     * @param {SubNoteCreateManyAndReturnArgs} args - Arguments to create many SubNotes.
     * @example
     * // Create many SubNotes
     * const subNote = await prisma.subNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubNotes and only return the `id`
     * const subNoteWithIdOnly = await prisma.subNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, SubNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubNote.
     * @param {SubNoteDeleteArgs} args - Arguments to delete one SubNote.
     * @example
     * // Delete one SubNote
     * const SubNote = await prisma.subNote.delete({
     *   where: {
     *     // ... filter to delete one SubNote
     *   }
     * })
     * 
     */
    delete<T extends SubNoteDeleteArgs>(args: SelectSubset<T, SubNoteDeleteArgs<ExtArgs>>): Prisma__SubNoteClient<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubNote.
     * @param {SubNoteUpdateArgs} args - Arguments to update one SubNote.
     * @example
     * // Update one SubNote
     * const subNote = await prisma.subNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubNoteUpdateArgs>(args: SelectSubset<T, SubNoteUpdateArgs<ExtArgs>>): Prisma__SubNoteClient<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubNotes.
     * @param {SubNoteDeleteManyArgs} args - Arguments to filter SubNotes to delete.
     * @example
     * // Delete a few SubNotes
     * const { count } = await prisma.subNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubNoteDeleteManyArgs>(args?: SelectSubset<T, SubNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubNotes
     * const subNote = await prisma.subNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubNoteUpdateManyArgs>(args: SelectSubset<T, SubNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubNotes and returns the data updated in the database.
     * @param {SubNoteUpdateManyAndReturnArgs} args - Arguments to update many SubNotes.
     * @example
     * // Update many SubNotes
     * const subNote = await prisma.subNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubNotes and only return the `id`
     * const subNoteWithIdOnly = await prisma.subNote.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, SubNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubNote.
     * @param {SubNoteUpsertArgs} args - Arguments to update or create a SubNote.
     * @example
     * // Update or create a SubNote
     * const subNote = await prisma.subNote.upsert({
     *   create: {
     *     // ... data to create a SubNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubNote we want to update
     *   }
     * })
     */
    upsert<T extends SubNoteUpsertArgs>(args: SelectSubset<T, SubNoteUpsertArgs<ExtArgs>>): Prisma__SubNoteClient<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteCountArgs} args - Arguments to filter SubNotes to count.
     * @example
     * // Count the number of SubNotes
     * const count = await prisma.subNote.count({
     *   where: {
     *     // ... the filter for the SubNotes we want to count
     *   }
     * })
    **/
    count<T extends SubNoteCountArgs>(
      args?: Subset<T, SubNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubNoteAggregateArgs>(args: Subset<T, SubNoteAggregateArgs>): Prisma.PrismaPromise<GetSubNoteAggregateType<T>>

    /**
     * Group by SubNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteGroupByArgs} args - Group by arguments.
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
      T extends SubNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubNoteGroupByArgs['orderBy'] }
        : { orderBy?: SubNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubNote model
   */
  readonly fields: SubNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends SubNote$tagsArgs<ExtArgs> = {}>(args?: Subset<T, SubNote$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends SubNote$imagesArgs<ExtArgs> = {}>(args?: Subset<T, SubNote$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubNote model
   */
  interface SubNoteFieldRefs {
    readonly id: FieldRef<"SubNote", 'String'>
    readonly title: FieldRef<"SubNote", 'String'>
    readonly description: FieldRef<"SubNote", 'String'>
    readonly note_id: FieldRef<"SubNote", 'String'>
    readonly created_at: FieldRef<"SubNote", 'DateTime'>
    readonly updated_at: FieldRef<"SubNote", 'DateTime'>
    readonly is_archived: FieldRef<"SubNote", 'Boolean'>
    readonly is_pinned: FieldRef<"SubNote", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SubNote findUnique
   */
  export type SubNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteInclude<ExtArgs> | null
    /**
     * Filter, which SubNote to fetch.
     */
    where: SubNoteWhereUniqueInput
  }

  /**
   * SubNote findUniqueOrThrow
   */
  export type SubNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteInclude<ExtArgs> | null
    /**
     * Filter, which SubNote to fetch.
     */
    where: SubNoteWhereUniqueInput
  }

  /**
   * SubNote findFirst
   */
  export type SubNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteInclude<ExtArgs> | null
    /**
     * Filter, which SubNote to fetch.
     */
    where?: SubNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNotes to fetch.
     */
    orderBy?: SubNoteOrderByWithRelationInput | SubNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubNotes.
     */
    cursor?: SubNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubNotes.
     */
    distinct?: SubNoteScalarFieldEnum | SubNoteScalarFieldEnum[]
  }

  /**
   * SubNote findFirstOrThrow
   */
  export type SubNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteInclude<ExtArgs> | null
    /**
     * Filter, which SubNote to fetch.
     */
    where?: SubNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNotes to fetch.
     */
    orderBy?: SubNoteOrderByWithRelationInput | SubNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubNotes.
     */
    cursor?: SubNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubNotes.
     */
    distinct?: SubNoteScalarFieldEnum | SubNoteScalarFieldEnum[]
  }

  /**
   * SubNote findMany
   */
  export type SubNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteInclude<ExtArgs> | null
    /**
     * Filter, which SubNotes to fetch.
     */
    where?: SubNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNotes to fetch.
     */
    orderBy?: SubNoteOrderByWithRelationInput | SubNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubNotes.
     */
    cursor?: SubNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNotes.
     */
    skip?: number
    distinct?: SubNoteScalarFieldEnum | SubNoteScalarFieldEnum[]
  }

  /**
   * SubNote create
   */
  export type SubNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a SubNote.
     */
    data: XOR<SubNoteCreateInput, SubNoteUncheckedCreateInput>
  }

  /**
   * SubNote createMany
   */
  export type SubNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubNotes.
     */
    data: SubNoteCreateManyInput | SubNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubNote createManyAndReturn
   */
  export type SubNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * The data used to create many SubNotes.
     */
    data: SubNoteCreateManyInput | SubNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubNote update
   */
  export type SubNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a SubNote.
     */
    data: XOR<SubNoteUpdateInput, SubNoteUncheckedUpdateInput>
    /**
     * Choose, which SubNote to update.
     */
    where: SubNoteWhereUniqueInput
  }

  /**
   * SubNote updateMany
   */
  export type SubNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubNotes.
     */
    data: XOR<SubNoteUpdateManyMutationInput, SubNoteUncheckedUpdateManyInput>
    /**
     * Filter which SubNotes to update
     */
    where?: SubNoteWhereInput
    /**
     * Limit how many SubNotes to update.
     */
    limit?: number
  }

  /**
   * SubNote updateManyAndReturn
   */
  export type SubNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * The data used to update SubNotes.
     */
    data: XOR<SubNoteUpdateManyMutationInput, SubNoteUncheckedUpdateManyInput>
    /**
     * Filter which SubNotes to update
     */
    where?: SubNoteWhereInput
    /**
     * Limit how many SubNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubNote upsert
   */
  export type SubNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the SubNote to update in case it exists.
     */
    where: SubNoteWhereUniqueInput
    /**
     * In case the SubNote found by the `where` argument doesn't exist, create a new SubNote with this data.
     */
    create: XOR<SubNoteCreateInput, SubNoteUncheckedCreateInput>
    /**
     * In case the SubNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubNoteUpdateInput, SubNoteUncheckedUpdateInput>
  }

  /**
   * SubNote delete
   */
  export type SubNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteInclude<ExtArgs> | null
    /**
     * Filter which SubNote to delete.
     */
    where: SubNoteWhereUniqueInput
  }

  /**
   * SubNote deleteMany
   */
  export type SubNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubNotes to delete
     */
    where?: SubNoteWhereInput
    /**
     * Limit how many SubNotes to delete.
     */
    limit?: number
  }

  /**
   * SubNote.tags
   */
  export type SubNote$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
    where?: SubNoteTagWhereInput
    orderBy?: SubNoteTagOrderByWithRelationInput | SubNoteTagOrderByWithRelationInput[]
    cursor?: SubNoteTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubNoteTagScalarFieldEnum | SubNoteTagScalarFieldEnum[]
  }

  /**
   * SubNote.images
   */
  export type SubNote$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageInclude<ExtArgs> | null
    where?: SubNoteImageWhereInput
    orderBy?: SubNoteImageOrderByWithRelationInput | SubNoteImageOrderByWithRelationInput[]
    cursor?: SubNoteImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubNoteImageScalarFieldEnum | SubNoteImageScalarFieldEnum[]
  }

  /**
   * SubNote without action
   */
  export type SubNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNote
     */
    select?: SubNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNote
     */
    omit?: SubNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteInclude<ExtArgs> | null
  }


  /**
   * Model SubNoteTag
   */

  export type AggregateSubNoteTag = {
    _count: SubNoteTagCountAggregateOutputType | null
    _min: SubNoteTagMinAggregateOutputType | null
    _max: SubNoteTagMaxAggregateOutputType | null
  }

  export type SubNoteTagMinAggregateOutputType = {
    sub_note_id: string | null
    tag_id: string | null
  }

  export type SubNoteTagMaxAggregateOutputType = {
    sub_note_id: string | null
    tag_id: string | null
  }

  export type SubNoteTagCountAggregateOutputType = {
    sub_note_id: number
    tag_id: number
    _all: number
  }


  export type SubNoteTagMinAggregateInputType = {
    sub_note_id?: true
    tag_id?: true
  }

  export type SubNoteTagMaxAggregateInputType = {
    sub_note_id?: true
    tag_id?: true
  }

  export type SubNoteTagCountAggregateInputType = {
    sub_note_id?: true
    tag_id?: true
    _all?: true
  }

  export type SubNoteTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubNoteTag to aggregate.
     */
    where?: SubNoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNoteTags to fetch.
     */
    orderBy?: SubNoteTagOrderByWithRelationInput | SubNoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubNoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubNoteTags
    **/
    _count?: true | SubNoteTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubNoteTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubNoteTagMaxAggregateInputType
  }

  export type GetSubNoteTagAggregateType<T extends SubNoteTagAggregateArgs> = {
        [P in keyof T & keyof AggregateSubNoteTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubNoteTag[P]>
      : GetScalarType<T[P], AggregateSubNoteTag[P]>
  }




  export type SubNoteTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubNoteTagWhereInput
    orderBy?: SubNoteTagOrderByWithAggregationInput | SubNoteTagOrderByWithAggregationInput[]
    by: SubNoteTagScalarFieldEnum[] | SubNoteTagScalarFieldEnum
    having?: SubNoteTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubNoteTagCountAggregateInputType | true
    _min?: SubNoteTagMinAggregateInputType
    _max?: SubNoteTagMaxAggregateInputType
  }

  export type SubNoteTagGroupByOutputType = {
    sub_note_id: string
    tag_id: string
    _count: SubNoteTagCountAggregateOutputType | null
    _min: SubNoteTagMinAggregateOutputType | null
    _max: SubNoteTagMaxAggregateOutputType | null
  }

  type GetSubNoteTagGroupByPayload<T extends SubNoteTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubNoteTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubNoteTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubNoteTagGroupByOutputType[P]>
            : GetScalarType<T[P], SubNoteTagGroupByOutputType[P]>
        }
      >
    >


  export type SubNoteTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_note_id?: boolean
    tag_id?: boolean
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subNoteTag"]>

  export type SubNoteTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_note_id?: boolean
    tag_id?: boolean
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subNoteTag"]>

  export type SubNoteTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_note_id?: boolean
    tag_id?: boolean
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subNoteTag"]>

  export type SubNoteTagSelectScalar = {
    sub_note_id?: boolean
    tag_id?: boolean
  }

  export type SubNoteTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sub_note_id" | "tag_id", ExtArgs["result"]["subNoteTag"]>
  export type SubNoteTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type SubNoteTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type SubNoteTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $SubNoteTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubNoteTag"
    objects: {
      subNote: Prisma.$SubNotePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sub_note_id: string
      tag_id: string
    }, ExtArgs["result"]["subNoteTag"]>
    composites: {}
  }

  type SubNoteTagGetPayload<S extends boolean | null | undefined | SubNoteTagDefaultArgs> = $Result.GetResult<Prisma.$SubNoteTagPayload, S>

  type SubNoteTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubNoteTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubNoteTagCountAggregateInputType | true
    }

  export interface SubNoteTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubNoteTag'], meta: { name: 'SubNoteTag' } }
    /**
     * Find zero or one SubNoteTag that matches the filter.
     * @param {SubNoteTagFindUniqueArgs} args - Arguments to find a SubNoteTag
     * @example
     * // Get one SubNoteTag
     * const subNoteTag = await prisma.subNoteTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubNoteTagFindUniqueArgs>(args: SelectSubset<T, SubNoteTagFindUniqueArgs<ExtArgs>>): Prisma__SubNoteTagClient<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubNoteTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubNoteTagFindUniqueOrThrowArgs} args - Arguments to find a SubNoteTag
     * @example
     * // Get one SubNoteTag
     * const subNoteTag = await prisma.subNoteTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubNoteTagFindUniqueOrThrowArgs>(args: SelectSubset<T, SubNoteTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubNoteTagClient<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubNoteTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteTagFindFirstArgs} args - Arguments to find a SubNoteTag
     * @example
     * // Get one SubNoteTag
     * const subNoteTag = await prisma.subNoteTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubNoteTagFindFirstArgs>(args?: SelectSubset<T, SubNoteTagFindFirstArgs<ExtArgs>>): Prisma__SubNoteTagClient<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubNoteTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteTagFindFirstOrThrowArgs} args - Arguments to find a SubNoteTag
     * @example
     * // Get one SubNoteTag
     * const subNoteTag = await prisma.subNoteTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubNoteTagFindFirstOrThrowArgs>(args?: SelectSubset<T, SubNoteTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubNoteTagClient<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubNoteTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubNoteTags
     * const subNoteTags = await prisma.subNoteTag.findMany()
     * 
     * // Get first 10 SubNoteTags
     * const subNoteTags = await prisma.subNoteTag.findMany({ take: 10 })
     * 
     * // Only select the `sub_note_id`
     * const subNoteTagWithSub_note_idOnly = await prisma.subNoteTag.findMany({ select: { sub_note_id: true } })
     * 
     */
    findMany<T extends SubNoteTagFindManyArgs>(args?: SelectSubset<T, SubNoteTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubNoteTag.
     * @param {SubNoteTagCreateArgs} args - Arguments to create a SubNoteTag.
     * @example
     * // Create one SubNoteTag
     * const SubNoteTag = await prisma.subNoteTag.create({
     *   data: {
     *     // ... data to create a SubNoteTag
     *   }
     * })
     * 
     */
    create<T extends SubNoteTagCreateArgs>(args: SelectSubset<T, SubNoteTagCreateArgs<ExtArgs>>): Prisma__SubNoteTagClient<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubNoteTags.
     * @param {SubNoteTagCreateManyArgs} args - Arguments to create many SubNoteTags.
     * @example
     * // Create many SubNoteTags
     * const subNoteTag = await prisma.subNoteTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubNoteTagCreateManyArgs>(args?: SelectSubset<T, SubNoteTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubNoteTags and returns the data saved in the database.
     * @param {SubNoteTagCreateManyAndReturnArgs} args - Arguments to create many SubNoteTags.
     * @example
     * // Create many SubNoteTags
     * const subNoteTag = await prisma.subNoteTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubNoteTags and only return the `sub_note_id`
     * const subNoteTagWithSub_note_idOnly = await prisma.subNoteTag.createManyAndReturn({
     *   select: { sub_note_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubNoteTagCreateManyAndReturnArgs>(args?: SelectSubset<T, SubNoteTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubNoteTag.
     * @param {SubNoteTagDeleteArgs} args - Arguments to delete one SubNoteTag.
     * @example
     * // Delete one SubNoteTag
     * const SubNoteTag = await prisma.subNoteTag.delete({
     *   where: {
     *     // ... filter to delete one SubNoteTag
     *   }
     * })
     * 
     */
    delete<T extends SubNoteTagDeleteArgs>(args: SelectSubset<T, SubNoteTagDeleteArgs<ExtArgs>>): Prisma__SubNoteTagClient<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubNoteTag.
     * @param {SubNoteTagUpdateArgs} args - Arguments to update one SubNoteTag.
     * @example
     * // Update one SubNoteTag
     * const subNoteTag = await prisma.subNoteTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubNoteTagUpdateArgs>(args: SelectSubset<T, SubNoteTagUpdateArgs<ExtArgs>>): Prisma__SubNoteTagClient<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubNoteTags.
     * @param {SubNoteTagDeleteManyArgs} args - Arguments to filter SubNoteTags to delete.
     * @example
     * // Delete a few SubNoteTags
     * const { count } = await prisma.subNoteTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubNoteTagDeleteManyArgs>(args?: SelectSubset<T, SubNoteTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubNoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubNoteTags
     * const subNoteTag = await prisma.subNoteTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubNoteTagUpdateManyArgs>(args: SelectSubset<T, SubNoteTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubNoteTags and returns the data updated in the database.
     * @param {SubNoteTagUpdateManyAndReturnArgs} args - Arguments to update many SubNoteTags.
     * @example
     * // Update many SubNoteTags
     * const subNoteTag = await prisma.subNoteTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubNoteTags and only return the `sub_note_id`
     * const subNoteTagWithSub_note_idOnly = await prisma.subNoteTag.updateManyAndReturn({
     *   select: { sub_note_id: true },
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
    updateManyAndReturn<T extends SubNoteTagUpdateManyAndReturnArgs>(args: SelectSubset<T, SubNoteTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubNoteTag.
     * @param {SubNoteTagUpsertArgs} args - Arguments to update or create a SubNoteTag.
     * @example
     * // Update or create a SubNoteTag
     * const subNoteTag = await prisma.subNoteTag.upsert({
     *   create: {
     *     // ... data to create a SubNoteTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubNoteTag we want to update
     *   }
     * })
     */
    upsert<T extends SubNoteTagUpsertArgs>(args: SelectSubset<T, SubNoteTagUpsertArgs<ExtArgs>>): Prisma__SubNoteTagClient<$Result.GetResult<Prisma.$SubNoteTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubNoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteTagCountArgs} args - Arguments to filter SubNoteTags to count.
     * @example
     * // Count the number of SubNoteTags
     * const count = await prisma.subNoteTag.count({
     *   where: {
     *     // ... the filter for the SubNoteTags we want to count
     *   }
     * })
    **/
    count<T extends SubNoteTagCountArgs>(
      args?: Subset<T, SubNoteTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubNoteTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubNoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubNoteTagAggregateArgs>(args: Subset<T, SubNoteTagAggregateArgs>): Prisma.PrismaPromise<GetSubNoteTagAggregateType<T>>

    /**
     * Group by SubNoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteTagGroupByArgs} args - Group by arguments.
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
      T extends SubNoteTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubNoteTagGroupByArgs['orderBy'] }
        : { orderBy?: SubNoteTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubNoteTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubNoteTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubNoteTag model
   */
  readonly fields: SubNoteTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubNoteTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubNoteTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subNote<T extends SubNoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubNoteDefaultArgs<ExtArgs>>): Prisma__SubNoteClient<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubNoteTag model
   */
  interface SubNoteTagFieldRefs {
    readonly sub_note_id: FieldRef<"SubNoteTag", 'String'>
    readonly tag_id: FieldRef<"SubNoteTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubNoteTag findUnique
   */
  export type SubNoteTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
    /**
     * Filter, which SubNoteTag to fetch.
     */
    where: SubNoteTagWhereUniqueInput
  }

  /**
   * SubNoteTag findUniqueOrThrow
   */
  export type SubNoteTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
    /**
     * Filter, which SubNoteTag to fetch.
     */
    where: SubNoteTagWhereUniqueInput
  }

  /**
   * SubNoteTag findFirst
   */
  export type SubNoteTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
    /**
     * Filter, which SubNoteTag to fetch.
     */
    where?: SubNoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNoteTags to fetch.
     */
    orderBy?: SubNoteTagOrderByWithRelationInput | SubNoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubNoteTags.
     */
    cursor?: SubNoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubNoteTags.
     */
    distinct?: SubNoteTagScalarFieldEnum | SubNoteTagScalarFieldEnum[]
  }

  /**
   * SubNoteTag findFirstOrThrow
   */
  export type SubNoteTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
    /**
     * Filter, which SubNoteTag to fetch.
     */
    where?: SubNoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNoteTags to fetch.
     */
    orderBy?: SubNoteTagOrderByWithRelationInput | SubNoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubNoteTags.
     */
    cursor?: SubNoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubNoteTags.
     */
    distinct?: SubNoteTagScalarFieldEnum | SubNoteTagScalarFieldEnum[]
  }

  /**
   * SubNoteTag findMany
   */
  export type SubNoteTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
    /**
     * Filter, which SubNoteTags to fetch.
     */
    where?: SubNoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNoteTags to fetch.
     */
    orderBy?: SubNoteTagOrderByWithRelationInput | SubNoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubNoteTags.
     */
    cursor?: SubNoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNoteTags.
     */
    skip?: number
    distinct?: SubNoteTagScalarFieldEnum | SubNoteTagScalarFieldEnum[]
  }

  /**
   * SubNoteTag create
   */
  export type SubNoteTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
    /**
     * The data needed to create a SubNoteTag.
     */
    data: XOR<SubNoteTagCreateInput, SubNoteTagUncheckedCreateInput>
  }

  /**
   * SubNoteTag createMany
   */
  export type SubNoteTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubNoteTags.
     */
    data: SubNoteTagCreateManyInput | SubNoteTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubNoteTag createManyAndReturn
   */
  export type SubNoteTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * The data used to create many SubNoteTags.
     */
    data: SubNoteTagCreateManyInput | SubNoteTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubNoteTag update
   */
  export type SubNoteTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
    /**
     * The data needed to update a SubNoteTag.
     */
    data: XOR<SubNoteTagUpdateInput, SubNoteTagUncheckedUpdateInput>
    /**
     * Choose, which SubNoteTag to update.
     */
    where: SubNoteTagWhereUniqueInput
  }

  /**
   * SubNoteTag updateMany
   */
  export type SubNoteTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubNoteTags.
     */
    data: XOR<SubNoteTagUpdateManyMutationInput, SubNoteTagUncheckedUpdateManyInput>
    /**
     * Filter which SubNoteTags to update
     */
    where?: SubNoteTagWhereInput
    /**
     * Limit how many SubNoteTags to update.
     */
    limit?: number
  }

  /**
   * SubNoteTag updateManyAndReturn
   */
  export type SubNoteTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * The data used to update SubNoteTags.
     */
    data: XOR<SubNoteTagUpdateManyMutationInput, SubNoteTagUncheckedUpdateManyInput>
    /**
     * Filter which SubNoteTags to update
     */
    where?: SubNoteTagWhereInput
    /**
     * Limit how many SubNoteTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubNoteTag upsert
   */
  export type SubNoteTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
    /**
     * The filter to search for the SubNoteTag to update in case it exists.
     */
    where: SubNoteTagWhereUniqueInput
    /**
     * In case the SubNoteTag found by the `where` argument doesn't exist, create a new SubNoteTag with this data.
     */
    create: XOR<SubNoteTagCreateInput, SubNoteTagUncheckedCreateInput>
    /**
     * In case the SubNoteTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubNoteTagUpdateInput, SubNoteTagUncheckedUpdateInput>
  }

  /**
   * SubNoteTag delete
   */
  export type SubNoteTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
    /**
     * Filter which SubNoteTag to delete.
     */
    where: SubNoteTagWhereUniqueInput
  }

  /**
   * SubNoteTag deleteMany
   */
  export type SubNoteTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubNoteTags to delete
     */
    where?: SubNoteTagWhereInput
    /**
     * Limit how many SubNoteTags to delete.
     */
    limit?: number
  }

  /**
   * SubNoteTag without action
   */
  export type SubNoteTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteTag
     */
    select?: SubNoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteTag
     */
    omit?: SubNoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteTagInclude<ExtArgs> | null
  }


  /**
   * Model SubNoteImage
   */

  export type AggregateSubNoteImage = {
    _count: SubNoteImageCountAggregateOutputType | null
    _min: SubNoteImageMinAggregateOutputType | null
    _max: SubNoteImageMaxAggregateOutputType | null
  }

  export type SubNoteImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    alt_text: string | null
    sub_note_id: string | null
    created_at: Date | null
    public_id: string | null
  }

  export type SubNoteImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    alt_text: string | null
    sub_note_id: string | null
    created_at: Date | null
    public_id: string | null
  }

  export type SubNoteImageCountAggregateOutputType = {
    id: number
    url: number
    alt_text: number
    sub_note_id: number
    created_at: number
    public_id: number
    _all: number
  }


  export type SubNoteImageMinAggregateInputType = {
    id?: true
    url?: true
    alt_text?: true
    sub_note_id?: true
    created_at?: true
    public_id?: true
  }

  export type SubNoteImageMaxAggregateInputType = {
    id?: true
    url?: true
    alt_text?: true
    sub_note_id?: true
    created_at?: true
    public_id?: true
  }

  export type SubNoteImageCountAggregateInputType = {
    id?: true
    url?: true
    alt_text?: true
    sub_note_id?: true
    created_at?: true
    public_id?: true
    _all?: true
  }

  export type SubNoteImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubNoteImage to aggregate.
     */
    where?: SubNoteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNoteImages to fetch.
     */
    orderBy?: SubNoteImageOrderByWithRelationInput | SubNoteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubNoteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNoteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNoteImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubNoteImages
    **/
    _count?: true | SubNoteImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubNoteImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubNoteImageMaxAggregateInputType
  }

  export type GetSubNoteImageAggregateType<T extends SubNoteImageAggregateArgs> = {
        [P in keyof T & keyof AggregateSubNoteImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubNoteImage[P]>
      : GetScalarType<T[P], AggregateSubNoteImage[P]>
  }




  export type SubNoteImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubNoteImageWhereInput
    orderBy?: SubNoteImageOrderByWithAggregationInput | SubNoteImageOrderByWithAggregationInput[]
    by: SubNoteImageScalarFieldEnum[] | SubNoteImageScalarFieldEnum
    having?: SubNoteImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubNoteImageCountAggregateInputType | true
    _min?: SubNoteImageMinAggregateInputType
    _max?: SubNoteImageMaxAggregateInputType
  }

  export type SubNoteImageGroupByOutputType = {
    id: string
    url: string
    alt_text: string | null
    sub_note_id: string
    created_at: Date
    public_id: string | null
    _count: SubNoteImageCountAggregateOutputType | null
    _min: SubNoteImageMinAggregateOutputType | null
    _max: SubNoteImageMaxAggregateOutputType | null
  }

  type GetSubNoteImageGroupByPayload<T extends SubNoteImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubNoteImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubNoteImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubNoteImageGroupByOutputType[P]>
            : GetScalarType<T[P], SubNoteImageGroupByOutputType[P]>
        }
      >
    >


  export type SubNoteImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt_text?: boolean
    sub_note_id?: boolean
    created_at?: boolean
    public_id?: boolean
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subNoteImage"]>

  export type SubNoteImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt_text?: boolean
    sub_note_id?: boolean
    created_at?: boolean
    public_id?: boolean
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subNoteImage"]>

  export type SubNoteImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt_text?: boolean
    sub_note_id?: boolean
    created_at?: boolean
    public_id?: boolean
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subNoteImage"]>

  export type SubNoteImageSelectScalar = {
    id?: boolean
    url?: boolean
    alt_text?: boolean
    sub_note_id?: boolean
    created_at?: boolean
    public_id?: boolean
  }

  export type SubNoteImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "alt_text" | "sub_note_id" | "created_at" | "public_id", ExtArgs["result"]["subNoteImage"]>
  export type SubNoteImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
  }
  export type SubNoteImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
  }
  export type SubNoteImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subNote?: boolean | SubNoteDefaultArgs<ExtArgs>
  }

  export type $SubNoteImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubNoteImage"
    objects: {
      subNote: Prisma.$SubNotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      alt_text: string | null
      sub_note_id: string
      created_at: Date
      public_id: string | null
    }, ExtArgs["result"]["subNoteImage"]>
    composites: {}
  }

  type SubNoteImageGetPayload<S extends boolean | null | undefined | SubNoteImageDefaultArgs> = $Result.GetResult<Prisma.$SubNoteImagePayload, S>

  type SubNoteImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubNoteImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubNoteImageCountAggregateInputType | true
    }

  export interface SubNoteImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubNoteImage'], meta: { name: 'SubNoteImage' } }
    /**
     * Find zero or one SubNoteImage that matches the filter.
     * @param {SubNoteImageFindUniqueArgs} args - Arguments to find a SubNoteImage
     * @example
     * // Get one SubNoteImage
     * const subNoteImage = await prisma.subNoteImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubNoteImageFindUniqueArgs>(args: SelectSubset<T, SubNoteImageFindUniqueArgs<ExtArgs>>): Prisma__SubNoteImageClient<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubNoteImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubNoteImageFindUniqueOrThrowArgs} args - Arguments to find a SubNoteImage
     * @example
     * // Get one SubNoteImage
     * const subNoteImage = await prisma.subNoteImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubNoteImageFindUniqueOrThrowArgs>(args: SelectSubset<T, SubNoteImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubNoteImageClient<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubNoteImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteImageFindFirstArgs} args - Arguments to find a SubNoteImage
     * @example
     * // Get one SubNoteImage
     * const subNoteImage = await prisma.subNoteImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubNoteImageFindFirstArgs>(args?: SelectSubset<T, SubNoteImageFindFirstArgs<ExtArgs>>): Prisma__SubNoteImageClient<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubNoteImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteImageFindFirstOrThrowArgs} args - Arguments to find a SubNoteImage
     * @example
     * // Get one SubNoteImage
     * const subNoteImage = await prisma.subNoteImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubNoteImageFindFirstOrThrowArgs>(args?: SelectSubset<T, SubNoteImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubNoteImageClient<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubNoteImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubNoteImages
     * const subNoteImages = await prisma.subNoteImage.findMany()
     * 
     * // Get first 10 SubNoteImages
     * const subNoteImages = await prisma.subNoteImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subNoteImageWithIdOnly = await prisma.subNoteImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubNoteImageFindManyArgs>(args?: SelectSubset<T, SubNoteImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubNoteImage.
     * @param {SubNoteImageCreateArgs} args - Arguments to create a SubNoteImage.
     * @example
     * // Create one SubNoteImage
     * const SubNoteImage = await prisma.subNoteImage.create({
     *   data: {
     *     // ... data to create a SubNoteImage
     *   }
     * })
     * 
     */
    create<T extends SubNoteImageCreateArgs>(args: SelectSubset<T, SubNoteImageCreateArgs<ExtArgs>>): Prisma__SubNoteImageClient<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubNoteImages.
     * @param {SubNoteImageCreateManyArgs} args - Arguments to create many SubNoteImages.
     * @example
     * // Create many SubNoteImages
     * const subNoteImage = await prisma.subNoteImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubNoteImageCreateManyArgs>(args?: SelectSubset<T, SubNoteImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubNoteImages and returns the data saved in the database.
     * @param {SubNoteImageCreateManyAndReturnArgs} args - Arguments to create many SubNoteImages.
     * @example
     * // Create many SubNoteImages
     * const subNoteImage = await prisma.subNoteImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubNoteImages and only return the `id`
     * const subNoteImageWithIdOnly = await prisma.subNoteImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubNoteImageCreateManyAndReturnArgs>(args?: SelectSubset<T, SubNoteImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubNoteImage.
     * @param {SubNoteImageDeleteArgs} args - Arguments to delete one SubNoteImage.
     * @example
     * // Delete one SubNoteImage
     * const SubNoteImage = await prisma.subNoteImage.delete({
     *   where: {
     *     // ... filter to delete one SubNoteImage
     *   }
     * })
     * 
     */
    delete<T extends SubNoteImageDeleteArgs>(args: SelectSubset<T, SubNoteImageDeleteArgs<ExtArgs>>): Prisma__SubNoteImageClient<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubNoteImage.
     * @param {SubNoteImageUpdateArgs} args - Arguments to update one SubNoteImage.
     * @example
     * // Update one SubNoteImage
     * const subNoteImage = await prisma.subNoteImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubNoteImageUpdateArgs>(args: SelectSubset<T, SubNoteImageUpdateArgs<ExtArgs>>): Prisma__SubNoteImageClient<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubNoteImages.
     * @param {SubNoteImageDeleteManyArgs} args - Arguments to filter SubNoteImages to delete.
     * @example
     * // Delete a few SubNoteImages
     * const { count } = await prisma.subNoteImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubNoteImageDeleteManyArgs>(args?: SelectSubset<T, SubNoteImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubNoteImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubNoteImages
     * const subNoteImage = await prisma.subNoteImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubNoteImageUpdateManyArgs>(args: SelectSubset<T, SubNoteImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubNoteImages and returns the data updated in the database.
     * @param {SubNoteImageUpdateManyAndReturnArgs} args - Arguments to update many SubNoteImages.
     * @example
     * // Update many SubNoteImages
     * const subNoteImage = await prisma.subNoteImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubNoteImages and only return the `id`
     * const subNoteImageWithIdOnly = await prisma.subNoteImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubNoteImageUpdateManyAndReturnArgs>(args: SelectSubset<T, SubNoteImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubNoteImage.
     * @param {SubNoteImageUpsertArgs} args - Arguments to update or create a SubNoteImage.
     * @example
     * // Update or create a SubNoteImage
     * const subNoteImage = await prisma.subNoteImage.upsert({
     *   create: {
     *     // ... data to create a SubNoteImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubNoteImage we want to update
     *   }
     * })
     */
    upsert<T extends SubNoteImageUpsertArgs>(args: SelectSubset<T, SubNoteImageUpsertArgs<ExtArgs>>): Prisma__SubNoteImageClient<$Result.GetResult<Prisma.$SubNoteImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubNoteImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteImageCountArgs} args - Arguments to filter SubNoteImages to count.
     * @example
     * // Count the number of SubNoteImages
     * const count = await prisma.subNoteImage.count({
     *   where: {
     *     // ... the filter for the SubNoteImages we want to count
     *   }
     * })
    **/
    count<T extends SubNoteImageCountArgs>(
      args?: Subset<T, SubNoteImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubNoteImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubNoteImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubNoteImageAggregateArgs>(args: Subset<T, SubNoteImageAggregateArgs>): Prisma.PrismaPromise<GetSubNoteImageAggregateType<T>>

    /**
     * Group by SubNoteImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubNoteImageGroupByArgs} args - Group by arguments.
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
      T extends SubNoteImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubNoteImageGroupByArgs['orderBy'] }
        : { orderBy?: SubNoteImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubNoteImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubNoteImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubNoteImage model
   */
  readonly fields: SubNoteImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubNoteImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubNoteImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subNote<T extends SubNoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubNoteDefaultArgs<ExtArgs>>): Prisma__SubNoteClient<$Result.GetResult<Prisma.$SubNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubNoteImage model
   */
  interface SubNoteImageFieldRefs {
    readonly id: FieldRef<"SubNoteImage", 'String'>
    readonly url: FieldRef<"SubNoteImage", 'String'>
    readonly alt_text: FieldRef<"SubNoteImage", 'String'>
    readonly sub_note_id: FieldRef<"SubNoteImage", 'String'>
    readonly created_at: FieldRef<"SubNoteImage", 'DateTime'>
    readonly public_id: FieldRef<"SubNoteImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubNoteImage findUnique
   */
  export type SubNoteImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageInclude<ExtArgs> | null
    /**
     * Filter, which SubNoteImage to fetch.
     */
    where: SubNoteImageWhereUniqueInput
  }

  /**
   * SubNoteImage findUniqueOrThrow
   */
  export type SubNoteImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageInclude<ExtArgs> | null
    /**
     * Filter, which SubNoteImage to fetch.
     */
    where: SubNoteImageWhereUniqueInput
  }

  /**
   * SubNoteImage findFirst
   */
  export type SubNoteImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageInclude<ExtArgs> | null
    /**
     * Filter, which SubNoteImage to fetch.
     */
    where?: SubNoteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNoteImages to fetch.
     */
    orderBy?: SubNoteImageOrderByWithRelationInput | SubNoteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubNoteImages.
     */
    cursor?: SubNoteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNoteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNoteImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubNoteImages.
     */
    distinct?: SubNoteImageScalarFieldEnum | SubNoteImageScalarFieldEnum[]
  }

  /**
   * SubNoteImage findFirstOrThrow
   */
  export type SubNoteImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageInclude<ExtArgs> | null
    /**
     * Filter, which SubNoteImage to fetch.
     */
    where?: SubNoteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNoteImages to fetch.
     */
    orderBy?: SubNoteImageOrderByWithRelationInput | SubNoteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubNoteImages.
     */
    cursor?: SubNoteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNoteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNoteImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubNoteImages.
     */
    distinct?: SubNoteImageScalarFieldEnum | SubNoteImageScalarFieldEnum[]
  }

  /**
   * SubNoteImage findMany
   */
  export type SubNoteImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageInclude<ExtArgs> | null
    /**
     * Filter, which SubNoteImages to fetch.
     */
    where?: SubNoteImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubNoteImages to fetch.
     */
    orderBy?: SubNoteImageOrderByWithRelationInput | SubNoteImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubNoteImages.
     */
    cursor?: SubNoteImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubNoteImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubNoteImages.
     */
    skip?: number
    distinct?: SubNoteImageScalarFieldEnum | SubNoteImageScalarFieldEnum[]
  }

  /**
   * SubNoteImage create
   */
  export type SubNoteImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageInclude<ExtArgs> | null
    /**
     * The data needed to create a SubNoteImage.
     */
    data: XOR<SubNoteImageCreateInput, SubNoteImageUncheckedCreateInput>
  }

  /**
   * SubNoteImage createMany
   */
  export type SubNoteImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubNoteImages.
     */
    data: SubNoteImageCreateManyInput | SubNoteImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubNoteImage createManyAndReturn
   */
  export type SubNoteImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * The data used to create many SubNoteImages.
     */
    data: SubNoteImageCreateManyInput | SubNoteImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubNoteImage update
   */
  export type SubNoteImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageInclude<ExtArgs> | null
    /**
     * The data needed to update a SubNoteImage.
     */
    data: XOR<SubNoteImageUpdateInput, SubNoteImageUncheckedUpdateInput>
    /**
     * Choose, which SubNoteImage to update.
     */
    where: SubNoteImageWhereUniqueInput
  }

  /**
   * SubNoteImage updateMany
   */
  export type SubNoteImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubNoteImages.
     */
    data: XOR<SubNoteImageUpdateManyMutationInput, SubNoteImageUncheckedUpdateManyInput>
    /**
     * Filter which SubNoteImages to update
     */
    where?: SubNoteImageWhereInput
    /**
     * Limit how many SubNoteImages to update.
     */
    limit?: number
  }

  /**
   * SubNoteImage updateManyAndReturn
   */
  export type SubNoteImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * The data used to update SubNoteImages.
     */
    data: XOR<SubNoteImageUpdateManyMutationInput, SubNoteImageUncheckedUpdateManyInput>
    /**
     * Filter which SubNoteImages to update
     */
    where?: SubNoteImageWhereInput
    /**
     * Limit how many SubNoteImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubNoteImage upsert
   */
  export type SubNoteImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageInclude<ExtArgs> | null
    /**
     * The filter to search for the SubNoteImage to update in case it exists.
     */
    where: SubNoteImageWhereUniqueInput
    /**
     * In case the SubNoteImage found by the `where` argument doesn't exist, create a new SubNoteImage with this data.
     */
    create: XOR<SubNoteImageCreateInput, SubNoteImageUncheckedCreateInput>
    /**
     * In case the SubNoteImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubNoteImageUpdateInput, SubNoteImageUncheckedUpdateInput>
  }

  /**
   * SubNoteImage delete
   */
  export type SubNoteImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageInclude<ExtArgs> | null
    /**
     * Filter which SubNoteImage to delete.
     */
    where: SubNoteImageWhereUniqueInput
  }

  /**
   * SubNoteImage deleteMany
   */
  export type SubNoteImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubNoteImages to delete
     */
    where?: SubNoteImageWhereInput
    /**
     * Limit how many SubNoteImages to delete.
     */
    limit?: number
  }

  /**
   * SubNoteImage without action
   */
  export type SubNoteImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubNoteImage
     */
    select?: SubNoteImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubNoteImage
     */
    omit?: SubNoteImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubNoteImageInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    key: string | null
    value: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SettingMaxAggregateOutputType = {
    key: string | null
    value: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SettingCountAggregateOutputType = {
    key: number
    value: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    key?: true
    value?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type SettingMaxAggregateInputType = {
    key?: true
    value?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type SettingCountAggregateInputType = {
    key?: true
    value?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    key: string
    value: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    key?: boolean
    value?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value" | "description" | "created_at" | "updated_at", ExtArgs["result"]["setting"]>

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const settingWithKeyOnly = await prisma.setting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `key`
     * const settingWithKeyOnly = await prisma.setting.updateManyAndReturn({
     *   select: { key: true },
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
    updateManyAndReturn<T extends SettingUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
    readonly description: FieldRef<"Setting", 'String'>
    readonly created_at: FieldRef<"Setting", 'DateTime'>
    readonly updated_at: FieldRef<"Setting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting createManyAndReturn
   */
  export type SettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting updateManyAndReturn
   */
  export type SettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
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


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    emailValidated: 'emailValidated',
    is_active: 'is_active',
    image: 'image',
    created_at: 'created_at',
    role_id: 'role_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    user_id: 'user_id'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    is_archived: 'is_archived',
    is_pinned: 'is_pinned',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    category_id: 'category_id'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_id: 'user_id'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const NoteTagScalarFieldEnum: {
    note_id: 'note_id',
    tag_id: 'tag_id'
  };

  export type NoteTagScalarFieldEnum = (typeof NoteTagScalarFieldEnum)[keyof typeof NoteTagScalarFieldEnum]


  export const NoteImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    public_id: 'public_id',
    alt_text: 'alt_text',
    created_at: 'created_at',
    note_id: 'note_id'
  };

  export type NoteImageScalarFieldEnum = (typeof NoteImageScalarFieldEnum)[keyof typeof NoteImageScalarFieldEnum]


  export const SubNoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    note_id: 'note_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_archived: 'is_archived',
    is_pinned: 'is_pinned'
  };

  export type SubNoteScalarFieldEnum = (typeof SubNoteScalarFieldEnum)[keyof typeof SubNoteScalarFieldEnum]


  export const SubNoteTagScalarFieldEnum: {
    sub_note_id: 'sub_note_id',
    tag_id: 'tag_id'
  };

  export type SubNoteTagScalarFieldEnum = (typeof SubNoteTagScalarFieldEnum)[keyof typeof SubNoteTagScalarFieldEnum]


  export const SubNoteImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    alt_text: 'alt_text',
    sub_note_id: 'sub_note_id',
    created_at: 'created_at',
    public_id: 'public_id'
  };

  export type SubNoteImageScalarFieldEnum = (typeof SubNoteImageScalarFieldEnum)[keyof typeof SubNoteImageScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    emailValidated?: BoolFilter<"User"> | boolean
    is_active?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    role_id?: IntNullableFilter<"User"> | number | null
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    categories?: CategoryListRelationFilter
    notes?: NoteListRelationFilter
    tags?: TagListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    emailValidated?: SortOrder
    is_active?: SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    role_id?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    emailValidated?: BoolFilter<"User"> | boolean
    is_active?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    role_id?: IntNullableFilter<"User"> | number | null
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    categories?: CategoryListRelationFilter
    notes?: NoteListRelationFilter
    tags?: TagListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    emailValidated?: SortOrder
    is_active?: SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrder
    role_id?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    emailValidated?: BoolWithAggregatesFilter<"User"> | boolean
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role_id?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    color?: StringNullableFilter<"Category"> | string | null
    user_id?: StringNullableFilter<"Category"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notes?: NoteListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_user_id?: CategoryNameUser_idCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    color?: StringNullableFilter<"Category"> | string | null
    user_id?: StringNullableFilter<"Category"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notes?: NoteListRelationFilter
  }, "id" | "name_user_id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    color?: StringNullableWithAggregatesFilter<"Category"> | string | null
    user_id?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    title?: StringNullableFilter<"Note"> | string | null
    content?: StringNullableFilter<"Note"> | string | null
    is_archived?: BoolFilter<"Note"> | boolean
    is_pinned?: BoolFilter<"Note"> | boolean
    created_at?: DateTimeFilter<"Note"> | Date | string
    updated_at?: DateTimeFilter<"Note"> | Date | string
    user_id?: StringFilter<"Note"> | string
    category_id?: StringNullableFilter<"Note"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    tags?: NoteTagListRelationFilter
    images?: NoteImageListRelationFilter
    SubNote?: SubNoteListRelationFilter
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    is_archived?: SortOrder
    is_pinned?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    tags?: NoteTagOrderByRelationAggregateInput
    images?: NoteImageOrderByRelationAggregateInput
    SubNote?: SubNoteOrderByRelationAggregateInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title_user_id?: NoteTitleUser_idCompoundUniqueInput
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    title?: StringNullableFilter<"Note"> | string | null
    content?: StringNullableFilter<"Note"> | string | null
    is_archived?: BoolFilter<"Note"> | boolean
    is_pinned?: BoolFilter<"Note"> | boolean
    created_at?: DateTimeFilter<"Note"> | Date | string
    updated_at?: DateTimeFilter<"Note"> | Date | string
    user_id?: StringFilter<"Note"> | string
    category_id?: StringNullableFilter<"Note"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    tags?: NoteTagListRelationFilter
    images?: NoteImageListRelationFilter
    SubNote?: SubNoteListRelationFilter
  }, "id" | "title_user_id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    is_archived?: SortOrder
    is_pinned?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrderInput | SortOrder
    _count?: NoteCountOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    title?: StringNullableWithAggregatesFilter<"Note"> | string | null
    content?: StringNullableWithAggregatesFilter<"Note"> | string | null
    is_archived?: BoolWithAggregatesFilter<"Note"> | boolean
    is_pinned?: BoolWithAggregatesFilter<"Note"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    user_id?: StringWithAggregatesFilter<"Note"> | string
    category_id?: StringNullableWithAggregatesFilter<"Note"> | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    user_id?: StringNullableFilter<"Tag"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notes?: NoteTagListRelationFilter
    SubNoteTag?: SubNoteTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    notes?: NoteTagOrderByRelationAggregateInput
    SubNoteTag?: SubNoteTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_user_id?: TagNameUser_idCompoundUniqueInput
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    user_id?: StringNullableFilter<"Tag"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notes?: NoteTagListRelationFilter
    SubNoteTag?: SubNoteTagListRelationFilter
  }, "id" | "name_user_id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrderInput | SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    user_id?: StringNullableWithAggregatesFilter<"Tag"> | string | null
  }

  export type NoteTagWhereInput = {
    AND?: NoteTagWhereInput | NoteTagWhereInput[]
    OR?: NoteTagWhereInput[]
    NOT?: NoteTagWhereInput | NoteTagWhereInput[]
    note_id?: StringFilter<"NoteTag"> | string
    tag_id?: StringFilter<"NoteTag"> | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type NoteTagOrderByWithRelationInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
    note?: NoteOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type NoteTagWhereUniqueInput = Prisma.AtLeast<{
    note_id_tag_id?: NoteTagNote_idTag_idCompoundUniqueInput
    AND?: NoteTagWhereInput | NoteTagWhereInput[]
    OR?: NoteTagWhereInput[]
    NOT?: NoteTagWhereInput | NoteTagWhereInput[]
    note_id?: StringFilter<"NoteTag"> | string
    tag_id?: StringFilter<"NoteTag"> | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "note_id_tag_id">

  export type NoteTagOrderByWithAggregationInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
    _count?: NoteTagCountOrderByAggregateInput
    _max?: NoteTagMaxOrderByAggregateInput
    _min?: NoteTagMinOrderByAggregateInput
  }

  export type NoteTagScalarWhereWithAggregatesInput = {
    AND?: NoteTagScalarWhereWithAggregatesInput | NoteTagScalarWhereWithAggregatesInput[]
    OR?: NoteTagScalarWhereWithAggregatesInput[]
    NOT?: NoteTagScalarWhereWithAggregatesInput | NoteTagScalarWhereWithAggregatesInput[]
    note_id?: StringWithAggregatesFilter<"NoteTag"> | string
    tag_id?: StringWithAggregatesFilter<"NoteTag"> | string
  }

  export type NoteImageWhereInput = {
    AND?: NoteImageWhereInput | NoteImageWhereInput[]
    OR?: NoteImageWhereInput[]
    NOT?: NoteImageWhereInput | NoteImageWhereInput[]
    id?: StringFilter<"NoteImage"> | string
    url?: StringFilter<"NoteImage"> | string
    public_id?: StringNullableFilter<"NoteImage"> | string | null
    alt_text?: StringNullableFilter<"NoteImage"> | string | null
    created_at?: DateTimeFilter<"NoteImage"> | Date | string
    note_id?: StringFilter<"NoteImage"> | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
  }

  export type NoteImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    public_id?: SortOrderInput | SortOrder
    alt_text?: SortOrderInput | SortOrder
    created_at?: SortOrder
    note_id?: SortOrder
    note?: NoteOrderByWithRelationInput
  }

  export type NoteImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoteImageWhereInput | NoteImageWhereInput[]
    OR?: NoteImageWhereInput[]
    NOT?: NoteImageWhereInput | NoteImageWhereInput[]
    url?: StringFilter<"NoteImage"> | string
    public_id?: StringNullableFilter<"NoteImage"> | string | null
    alt_text?: StringNullableFilter<"NoteImage"> | string | null
    created_at?: DateTimeFilter<"NoteImage"> | Date | string
    note_id?: StringFilter<"NoteImage"> | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
  }, "id">

  export type NoteImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    public_id?: SortOrderInput | SortOrder
    alt_text?: SortOrderInput | SortOrder
    created_at?: SortOrder
    note_id?: SortOrder
    _count?: NoteImageCountOrderByAggregateInput
    _max?: NoteImageMaxOrderByAggregateInput
    _min?: NoteImageMinOrderByAggregateInput
  }

  export type NoteImageScalarWhereWithAggregatesInput = {
    AND?: NoteImageScalarWhereWithAggregatesInput | NoteImageScalarWhereWithAggregatesInput[]
    OR?: NoteImageScalarWhereWithAggregatesInput[]
    NOT?: NoteImageScalarWhereWithAggregatesInput | NoteImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NoteImage"> | string
    url?: StringWithAggregatesFilter<"NoteImage"> | string
    public_id?: StringNullableWithAggregatesFilter<"NoteImage"> | string | null
    alt_text?: StringNullableWithAggregatesFilter<"NoteImage"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"NoteImage"> | Date | string
    note_id?: StringWithAggregatesFilter<"NoteImage"> | string
  }

  export type SubNoteWhereInput = {
    AND?: SubNoteWhereInput | SubNoteWhereInput[]
    OR?: SubNoteWhereInput[]
    NOT?: SubNoteWhereInput | SubNoteWhereInput[]
    id?: StringFilter<"SubNote"> | string
    title?: StringFilter<"SubNote"> | string
    description?: StringNullableFilter<"SubNote"> | string | null
    note_id?: StringFilter<"SubNote"> | string
    created_at?: DateTimeFilter<"SubNote"> | Date | string
    updated_at?: DateTimeFilter<"SubNote"> | Date | string
    is_archived?: BoolFilter<"SubNote"> | boolean
    is_pinned?: BoolFilter<"SubNote"> | boolean
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    tags?: SubNoteTagListRelationFilter
    images?: SubNoteImageListRelationFilter
  }

  export type SubNoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    note_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_archived?: SortOrder
    is_pinned?: SortOrder
    note?: NoteOrderByWithRelationInput
    tags?: SubNoteTagOrderByRelationAggregateInput
    images?: SubNoteImageOrderByRelationAggregateInput
  }

  export type SubNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title_note_id?: SubNoteTitleNote_idCompoundUniqueInput
    AND?: SubNoteWhereInput | SubNoteWhereInput[]
    OR?: SubNoteWhereInput[]
    NOT?: SubNoteWhereInput | SubNoteWhereInput[]
    title?: StringFilter<"SubNote"> | string
    description?: StringNullableFilter<"SubNote"> | string | null
    note_id?: StringFilter<"SubNote"> | string
    created_at?: DateTimeFilter<"SubNote"> | Date | string
    updated_at?: DateTimeFilter<"SubNote"> | Date | string
    is_archived?: BoolFilter<"SubNote"> | boolean
    is_pinned?: BoolFilter<"SubNote"> | boolean
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    tags?: SubNoteTagListRelationFilter
    images?: SubNoteImageListRelationFilter
  }, "id" | "title_note_id">

  export type SubNoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    note_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_archived?: SortOrder
    is_pinned?: SortOrder
    _count?: SubNoteCountOrderByAggregateInput
    _max?: SubNoteMaxOrderByAggregateInput
    _min?: SubNoteMinOrderByAggregateInput
  }

  export type SubNoteScalarWhereWithAggregatesInput = {
    AND?: SubNoteScalarWhereWithAggregatesInput | SubNoteScalarWhereWithAggregatesInput[]
    OR?: SubNoteScalarWhereWithAggregatesInput[]
    NOT?: SubNoteScalarWhereWithAggregatesInput | SubNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubNote"> | string
    title?: StringWithAggregatesFilter<"SubNote"> | string
    description?: StringNullableWithAggregatesFilter<"SubNote"> | string | null
    note_id?: StringWithAggregatesFilter<"SubNote"> | string
    created_at?: DateTimeWithAggregatesFilter<"SubNote"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SubNote"> | Date | string
    is_archived?: BoolWithAggregatesFilter<"SubNote"> | boolean
    is_pinned?: BoolWithAggregatesFilter<"SubNote"> | boolean
  }

  export type SubNoteTagWhereInput = {
    AND?: SubNoteTagWhereInput | SubNoteTagWhereInput[]
    OR?: SubNoteTagWhereInput[]
    NOT?: SubNoteTagWhereInput | SubNoteTagWhereInput[]
    sub_note_id?: StringFilter<"SubNoteTag"> | string
    tag_id?: StringFilter<"SubNoteTag"> | string
    subNote?: XOR<SubNoteScalarRelationFilter, SubNoteWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type SubNoteTagOrderByWithRelationInput = {
    sub_note_id?: SortOrder
    tag_id?: SortOrder
    subNote?: SubNoteOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type SubNoteTagWhereUniqueInput = Prisma.AtLeast<{
    sub_note_id_tag_id?: SubNoteTagSub_note_idTag_idCompoundUniqueInput
    AND?: SubNoteTagWhereInput | SubNoteTagWhereInput[]
    OR?: SubNoteTagWhereInput[]
    NOT?: SubNoteTagWhereInput | SubNoteTagWhereInput[]
    sub_note_id?: StringFilter<"SubNoteTag"> | string
    tag_id?: StringFilter<"SubNoteTag"> | string
    subNote?: XOR<SubNoteScalarRelationFilter, SubNoteWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "sub_note_id_tag_id">

  export type SubNoteTagOrderByWithAggregationInput = {
    sub_note_id?: SortOrder
    tag_id?: SortOrder
    _count?: SubNoteTagCountOrderByAggregateInput
    _max?: SubNoteTagMaxOrderByAggregateInput
    _min?: SubNoteTagMinOrderByAggregateInput
  }

  export type SubNoteTagScalarWhereWithAggregatesInput = {
    AND?: SubNoteTagScalarWhereWithAggregatesInput | SubNoteTagScalarWhereWithAggregatesInput[]
    OR?: SubNoteTagScalarWhereWithAggregatesInput[]
    NOT?: SubNoteTagScalarWhereWithAggregatesInput | SubNoteTagScalarWhereWithAggregatesInput[]
    sub_note_id?: StringWithAggregatesFilter<"SubNoteTag"> | string
    tag_id?: StringWithAggregatesFilter<"SubNoteTag"> | string
  }

  export type SubNoteImageWhereInput = {
    AND?: SubNoteImageWhereInput | SubNoteImageWhereInput[]
    OR?: SubNoteImageWhereInput[]
    NOT?: SubNoteImageWhereInput | SubNoteImageWhereInput[]
    id?: StringFilter<"SubNoteImage"> | string
    url?: StringFilter<"SubNoteImage"> | string
    alt_text?: StringNullableFilter<"SubNoteImage"> | string | null
    sub_note_id?: StringFilter<"SubNoteImage"> | string
    created_at?: DateTimeFilter<"SubNoteImage"> | Date | string
    public_id?: StringNullableFilter<"SubNoteImage"> | string | null
    subNote?: XOR<SubNoteScalarRelationFilter, SubNoteWhereInput>
  }

  export type SubNoteImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrderInput | SortOrder
    sub_note_id?: SortOrder
    created_at?: SortOrder
    public_id?: SortOrderInput | SortOrder
    subNote?: SubNoteOrderByWithRelationInput
  }

  export type SubNoteImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubNoteImageWhereInput | SubNoteImageWhereInput[]
    OR?: SubNoteImageWhereInput[]
    NOT?: SubNoteImageWhereInput | SubNoteImageWhereInput[]
    url?: StringFilter<"SubNoteImage"> | string
    alt_text?: StringNullableFilter<"SubNoteImage"> | string | null
    sub_note_id?: StringFilter<"SubNoteImage"> | string
    created_at?: DateTimeFilter<"SubNoteImage"> | Date | string
    public_id?: StringNullableFilter<"SubNoteImage"> | string | null
    subNote?: XOR<SubNoteScalarRelationFilter, SubNoteWhereInput>
  }, "id">

  export type SubNoteImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrderInput | SortOrder
    sub_note_id?: SortOrder
    created_at?: SortOrder
    public_id?: SortOrderInput | SortOrder
    _count?: SubNoteImageCountOrderByAggregateInput
    _max?: SubNoteImageMaxOrderByAggregateInput
    _min?: SubNoteImageMinOrderByAggregateInput
  }

  export type SubNoteImageScalarWhereWithAggregatesInput = {
    AND?: SubNoteImageScalarWhereWithAggregatesInput | SubNoteImageScalarWhereWithAggregatesInput[]
    OR?: SubNoteImageScalarWhereWithAggregatesInput[]
    NOT?: SubNoteImageScalarWhereWithAggregatesInput | SubNoteImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubNoteImage"> | string
    url?: StringWithAggregatesFilter<"SubNoteImage"> | string
    alt_text?: StringNullableWithAggregatesFilter<"SubNoteImage"> | string | null
    sub_note_id?: StringWithAggregatesFilter<"SubNoteImage"> | string
    created_at?: DateTimeWithAggregatesFilter<"SubNoteImage"> | Date | string
    public_id?: StringNullableWithAggregatesFilter<"SubNoteImage"> | string | null
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    description?: StringNullableFilter<"Setting"> | string | null
    created_at?: DateTimeFilter<"Setting"> | Date | string
    updated_at?: DateTimeFilter<"Setting"> | Date | string
  }

  export type SettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    value?: StringFilter<"Setting"> | string
    description?: StringNullableFilter<"Setting"> | string | null
    created_at?: DateTimeFilter<"Setting"> | Date | string
    updated_at?: DateTimeFilter<"Setting"> | Date | string
  }, "key">

  export type SettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
    description?: StringNullableWithAggregatesFilter<"Setting"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
  }

  export type RoleCreateInput = {
    name: string
    description?: string | null
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
    role_id?: number | null
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
    role_id?: number | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    color?: string | null
    user?: UserCreateNestedOneWithoutCategoriesInput
    notes?: NoteCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    color?: string | null
    user_id?: string | null
    notes?: NoteUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutCategoriesNestedInput
    notes?: NoteUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NoteUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    color?: string | null
    user_id?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoteCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
    category?: CategoryCreateNestedOneWithoutNotesInput
    tags?: NoteTagCreateNestedManyWithoutNoteInput
    images?: NoteImageCreateNestedManyWithoutNoteInput
    SubNote?: SubNoteCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    category_id?: string | null
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    images?: NoteImageUncheckedCreateNestedManyWithoutNoteInput
    SubNote?: SubNoteUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
    category?: CategoryUpdateOneWithoutNotesNestedInput
    tags?: NoteTagUpdateManyWithoutNoteNestedInput
    images?: NoteImageUpdateManyWithoutNoteNestedInput
    SubNote?: SubNoteUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    images?: NoteImageUncheckedUpdateManyWithoutNoteNestedInput
    SubNote?: SubNoteUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteCreateManyInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    category_id?: string | null
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateInput = {
    id?: string
    name: string
    user?: UserCreateNestedOneWithoutTagsInput
    notes?: NoteTagCreateNestedManyWithoutTagInput
    SubNoteTag?: SubNoteTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    user_id?: string | null
    notes?: NoteTagUncheckedCreateNestedManyWithoutTagInput
    SubNoteTag?: SubNoteTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutTagsNestedInput
    notes?: NoteTagUpdateManyWithoutTagNestedInput
    SubNoteTag?: SubNoteTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NoteTagUncheckedUpdateManyWithoutTagNestedInput
    SubNoteTag?: SubNoteTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    user_id?: string | null
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoteTagCreateInput = {
    note: NoteCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutNotesInput
  }

  export type NoteTagUncheckedCreateInput = {
    note_id: string
    tag_id: string
  }

  export type NoteTagUpdateInput = {
    note?: NoteUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteTagUncheckedUpdateInput = {
    note_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type NoteTagCreateManyInput = {
    note_id: string
    tag_id: string
  }

  export type NoteTagUpdateManyMutationInput = {

  }

  export type NoteTagUncheckedUpdateManyInput = {
    note_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type NoteImageCreateInput = {
    id?: string
    url: string
    public_id?: string | null
    alt_text?: string | null
    created_at?: Date | string
    note: NoteCreateNestedOneWithoutImagesInput
  }

  export type NoteImageUncheckedCreateInput = {
    id?: string
    url: string
    public_id?: string | null
    alt_text?: string | null
    created_at?: Date | string
    note_id: string
  }

  export type NoteImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutImagesNestedInput
  }

  export type NoteImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    note_id?: StringFieldUpdateOperationsInput | string
  }

  export type NoteImageCreateManyInput = {
    id?: string
    url: string
    public_id?: string | null
    alt_text?: string | null
    created_at?: Date | string
    note_id: string
  }

  export type NoteImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    note_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubNoteCreateInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_archived?: boolean
    is_pinned?: boolean
    note: NoteCreateNestedOneWithoutSubNoteInput
    tags?: SubNoteTagCreateNestedManyWithoutSubNoteInput
    images?: SubNoteImageCreateNestedManyWithoutSubNoteInput
  }

  export type SubNoteUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    note_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_archived?: boolean
    is_pinned?: boolean
    tags?: SubNoteTagUncheckedCreateNestedManyWithoutSubNoteInput
    images?: SubNoteImageUncheckedCreateNestedManyWithoutSubNoteInput
  }

  export type SubNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    note?: NoteUpdateOneRequiredWithoutSubNoteNestedInput
    tags?: SubNoteTagUpdateManyWithoutSubNoteNestedInput
    images?: SubNoteImageUpdateManyWithoutSubNoteNestedInput
  }

  export type SubNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    tags?: SubNoteTagUncheckedUpdateManyWithoutSubNoteNestedInput
    images?: SubNoteImageUncheckedUpdateManyWithoutSubNoteNestedInput
  }

  export type SubNoteCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    note_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_archived?: boolean
    is_pinned?: boolean
  }

  export type SubNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubNoteTagCreateInput = {
    subNote: SubNoteCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutSubNoteTagInput
  }

  export type SubNoteTagUncheckedCreateInput = {
    sub_note_id: string
    tag_id: string
  }

  export type SubNoteTagUpdateInput = {
    subNote?: SubNoteUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutSubNoteTagNestedInput
  }

  export type SubNoteTagUncheckedUpdateInput = {
    sub_note_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubNoteTagCreateManyInput = {
    sub_note_id: string
    tag_id: string
  }

  export type SubNoteTagUpdateManyMutationInput = {

  }

  export type SubNoteTagUncheckedUpdateManyInput = {
    sub_note_id?: StringFieldUpdateOperationsInput | string
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubNoteImageCreateInput = {
    id?: string
    url: string
    alt_text?: string | null
    created_at?: Date | string
    public_id?: string | null
    subNote: SubNoteCreateNestedOneWithoutImagesInput
  }

  export type SubNoteImageUncheckedCreateInput = {
    id?: string
    url: string
    alt_text?: string | null
    sub_note_id: string
    created_at?: Date | string
    public_id?: string | null
  }

  export type SubNoteImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    subNote?: SubNoteUpdateOneRequiredWithoutImagesNestedInput
  }

  export type SubNoteImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    sub_note_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubNoteImageCreateManyInput = {
    id?: string
    url: string
    alt_text?: string | null
    sub_note_id: string
    created_at?: Date | string
    public_id?: string | null
  }

  export type SubNoteImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubNoteImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    sub_note_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingCreateInput = {
    key: string
    value: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SettingUncheckedCreateInput = {
    key: string
    value: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateManyInput = {
    key: string
    value: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type RoleNullableScalarRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    emailValidated?: SortOrder
    is_active?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    role_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    emailValidated?: SortOrder
    is_active?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    role_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    emailValidated?: SortOrder
    is_active?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
    role_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CategoryNameUser_idCompoundUniqueInput = {
    name: string
    user_id: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    user_id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    user_id?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    user_id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type NoteTagListRelationFilter = {
    every?: NoteTagWhereInput
    some?: NoteTagWhereInput
    none?: NoteTagWhereInput
  }

  export type NoteImageListRelationFilter = {
    every?: NoteImageWhereInput
    some?: NoteImageWhereInput
    none?: NoteImageWhereInput
  }

  export type SubNoteListRelationFilter = {
    every?: SubNoteWhereInput
    some?: SubNoteWhereInput
    none?: SubNoteWhereInput
  }

  export type NoteTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteTitleUser_idCompoundUniqueInput = {
    title: string
    user_id: string
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    is_archived?: SortOrder
    is_pinned?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    is_archived?: SortOrder
    is_pinned?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    is_archived?: SortOrder
    is_pinned?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
  }

  export type SubNoteTagListRelationFilter = {
    every?: SubNoteTagWhereInput
    some?: SubNoteTagWhereInput
    none?: SubNoteTagWhereInput
  }

  export type SubNoteTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagNameUser_idCompoundUniqueInput = {
    name: string
    user_id: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
  }

  export type NoteScalarRelationFilter = {
    is?: NoteWhereInput
    isNot?: NoteWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type NoteTagNote_idTag_idCompoundUniqueInput = {
    note_id: string
    tag_id: string
  }

  export type NoteTagCountOrderByAggregateInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
  }

  export type NoteTagMaxOrderByAggregateInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
  }

  export type NoteTagMinOrderByAggregateInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
  }

  export type NoteImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    public_id?: SortOrder
    alt_text?: SortOrder
    created_at?: SortOrder
    note_id?: SortOrder
  }

  export type NoteImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    public_id?: SortOrder
    alt_text?: SortOrder
    created_at?: SortOrder
    note_id?: SortOrder
  }

  export type NoteImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    public_id?: SortOrder
    alt_text?: SortOrder
    created_at?: SortOrder
    note_id?: SortOrder
  }

  export type SubNoteImageListRelationFilter = {
    every?: SubNoteImageWhereInput
    some?: SubNoteImageWhereInput
    none?: SubNoteImageWhereInput
  }

  export type SubNoteImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubNoteTitleNote_idCompoundUniqueInput = {
    title: string
    note_id: string
  }

  export type SubNoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    note_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_archived?: SortOrder
    is_pinned?: SortOrder
  }

  export type SubNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    note_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_archived?: SortOrder
    is_pinned?: SortOrder
  }

  export type SubNoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    note_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_archived?: SortOrder
    is_pinned?: SortOrder
  }

  export type SubNoteScalarRelationFilter = {
    is?: SubNoteWhereInput
    isNot?: SubNoteWhereInput
  }

  export type SubNoteTagSub_note_idTag_idCompoundUniqueInput = {
    sub_note_id: string
    tag_id: string
  }

  export type SubNoteTagCountOrderByAggregateInput = {
    sub_note_id?: SortOrder
    tag_id?: SortOrder
  }

  export type SubNoteTagMaxOrderByAggregateInput = {
    sub_note_id?: SortOrder
    tag_id?: SortOrder
  }

  export type SubNoteTagMinOrderByAggregateInput = {
    sub_note_id?: SortOrder
    tag_id?: SortOrder
  }

  export type SubNoteImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    sub_note_id?: SortOrder
    created_at?: SortOrder
    public_id?: SortOrder
  }

  export type SubNoteImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    sub_note_id?: SortOrder
    created_at?: SortOrder
    public_id?: SortOrder
  }

  export type SubNoteImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    sub_note_id?: SortOrder
    created_at?: SortOrder
    public_id?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type TagUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput> | TagCreateWithoutUserInput[] | TagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TagCreateOrConnectWithoutUserInput | TagCreateOrConnectWithoutUserInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutUserInput | TagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TagCreateManyUserInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutUserInput | TagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TagUpdateManyWithWhereWithoutUserInput | TagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type NoteCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NoteCreateWithoutCategoryInput, NoteUncheckedCreateWithoutCategoryInput> | NoteCreateWithoutCategoryInput[] | NoteUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCategoryInput | NoteCreateOrConnectWithoutCategoryInput[]
    createMany?: NoteCreateManyCategoryInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NoteCreateWithoutCategoryInput, NoteUncheckedCreateWithoutCategoryInput> | NoteCreateWithoutCategoryInput[] | NoteUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCategoryInput | NoteCreateOrConnectWithoutCategoryInput[]
    createMany?: NoteCreateManyCategoryInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type NoteUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NoteCreateWithoutCategoryInput, NoteUncheckedCreateWithoutCategoryInput> | NoteCreateWithoutCategoryInput[] | NoteUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCategoryInput | NoteCreateOrConnectWithoutCategoryInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutCategoryInput | NoteUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NoteCreateManyCategoryInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutCategoryInput | NoteUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutCategoryInput | NoteUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NoteCreateWithoutCategoryInput, NoteUncheckedCreateWithoutCategoryInput> | NoteCreateWithoutCategoryInput[] | NoteUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutCategoryInput | NoteCreateOrConnectWithoutCategoryInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutCategoryInput | NoteUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NoteCreateManyCategoryInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutCategoryInput | NoteUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutCategoryInput | NoteUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutNotesInput = {
    create?: XOR<CategoryCreateWithoutNotesInput, CategoryUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutNotesInput
    connect?: CategoryWhereUniqueInput
  }

  export type NoteTagCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type NoteImageCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteImageCreateWithoutNoteInput, NoteImageUncheckedCreateWithoutNoteInput> | NoteImageCreateWithoutNoteInput[] | NoteImageUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteImageCreateOrConnectWithoutNoteInput | NoteImageCreateOrConnectWithoutNoteInput[]
    createMany?: NoteImageCreateManyNoteInputEnvelope
    connect?: NoteImageWhereUniqueInput | NoteImageWhereUniqueInput[]
  }

  export type SubNoteCreateNestedManyWithoutNoteInput = {
    create?: XOR<SubNoteCreateWithoutNoteInput, SubNoteUncheckedCreateWithoutNoteInput> | SubNoteCreateWithoutNoteInput[] | SubNoteUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: SubNoteCreateOrConnectWithoutNoteInput | SubNoteCreateOrConnectWithoutNoteInput[]
    createMany?: SubNoteCreateManyNoteInputEnvelope
    connect?: SubNoteWhereUniqueInput | SubNoteWhereUniqueInput[]
  }

  export type NoteTagUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type NoteImageUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteImageCreateWithoutNoteInput, NoteImageUncheckedCreateWithoutNoteInput> | NoteImageCreateWithoutNoteInput[] | NoteImageUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteImageCreateOrConnectWithoutNoteInput | NoteImageCreateOrConnectWithoutNoteInput[]
    createMany?: NoteImageCreateManyNoteInputEnvelope
    connect?: NoteImageWhereUniqueInput | NoteImageWhereUniqueInput[]
  }

  export type SubNoteUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<SubNoteCreateWithoutNoteInput, SubNoteUncheckedCreateWithoutNoteInput> | SubNoteCreateWithoutNoteInput[] | SubNoteUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: SubNoteCreateOrConnectWithoutNoteInput | SubNoteCreateOrConnectWithoutNoteInput[]
    createMany?: SubNoteCreateManyNoteInputEnvelope
    connect?: SubNoteWhereUniqueInput | SubNoteWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type CategoryUpdateOneWithoutNotesNestedInput = {
    create?: XOR<CategoryCreateWithoutNotesInput, CategoryUncheckedCreateWithoutNotesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutNotesInput
    upsert?: CategoryUpsertWithoutNotesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutNotesInput, CategoryUpdateWithoutNotesInput>, CategoryUncheckedUpdateWithoutNotesInput>
  }

  export type NoteTagUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutNoteInput | NoteTagUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutNoteInput | NoteTagUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutNoteInput | NoteTagUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type NoteImageUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteImageCreateWithoutNoteInput, NoteImageUncheckedCreateWithoutNoteInput> | NoteImageCreateWithoutNoteInput[] | NoteImageUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteImageCreateOrConnectWithoutNoteInput | NoteImageCreateOrConnectWithoutNoteInput[]
    upsert?: NoteImageUpsertWithWhereUniqueWithoutNoteInput | NoteImageUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteImageCreateManyNoteInputEnvelope
    set?: NoteImageWhereUniqueInput | NoteImageWhereUniqueInput[]
    disconnect?: NoteImageWhereUniqueInput | NoteImageWhereUniqueInput[]
    delete?: NoteImageWhereUniqueInput | NoteImageWhereUniqueInput[]
    connect?: NoteImageWhereUniqueInput | NoteImageWhereUniqueInput[]
    update?: NoteImageUpdateWithWhereUniqueWithoutNoteInput | NoteImageUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteImageUpdateManyWithWhereWithoutNoteInput | NoteImageUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteImageScalarWhereInput | NoteImageScalarWhereInput[]
  }

  export type SubNoteUpdateManyWithoutNoteNestedInput = {
    create?: XOR<SubNoteCreateWithoutNoteInput, SubNoteUncheckedCreateWithoutNoteInput> | SubNoteCreateWithoutNoteInput[] | SubNoteUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: SubNoteCreateOrConnectWithoutNoteInput | SubNoteCreateOrConnectWithoutNoteInput[]
    upsert?: SubNoteUpsertWithWhereUniqueWithoutNoteInput | SubNoteUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: SubNoteCreateManyNoteInputEnvelope
    set?: SubNoteWhereUniqueInput | SubNoteWhereUniqueInput[]
    disconnect?: SubNoteWhereUniqueInput | SubNoteWhereUniqueInput[]
    delete?: SubNoteWhereUniqueInput | SubNoteWhereUniqueInput[]
    connect?: SubNoteWhereUniqueInput | SubNoteWhereUniqueInput[]
    update?: SubNoteUpdateWithWhereUniqueWithoutNoteInput | SubNoteUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: SubNoteUpdateManyWithWhereWithoutNoteInput | SubNoteUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: SubNoteScalarWhereInput | SubNoteScalarWhereInput[]
  }

  export type NoteTagUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutNoteInput | NoteTagUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutNoteInput | NoteTagUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutNoteInput | NoteTagUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type NoteImageUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteImageCreateWithoutNoteInput, NoteImageUncheckedCreateWithoutNoteInput> | NoteImageCreateWithoutNoteInput[] | NoteImageUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteImageCreateOrConnectWithoutNoteInput | NoteImageCreateOrConnectWithoutNoteInput[]
    upsert?: NoteImageUpsertWithWhereUniqueWithoutNoteInput | NoteImageUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteImageCreateManyNoteInputEnvelope
    set?: NoteImageWhereUniqueInput | NoteImageWhereUniqueInput[]
    disconnect?: NoteImageWhereUniqueInput | NoteImageWhereUniqueInput[]
    delete?: NoteImageWhereUniqueInput | NoteImageWhereUniqueInput[]
    connect?: NoteImageWhereUniqueInput | NoteImageWhereUniqueInput[]
    update?: NoteImageUpdateWithWhereUniqueWithoutNoteInput | NoteImageUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteImageUpdateManyWithWhereWithoutNoteInput | NoteImageUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteImageScalarWhereInput | NoteImageScalarWhereInput[]
  }

  export type SubNoteUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<SubNoteCreateWithoutNoteInput, SubNoteUncheckedCreateWithoutNoteInput> | SubNoteCreateWithoutNoteInput[] | SubNoteUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: SubNoteCreateOrConnectWithoutNoteInput | SubNoteCreateOrConnectWithoutNoteInput[]
    upsert?: SubNoteUpsertWithWhereUniqueWithoutNoteInput | SubNoteUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: SubNoteCreateManyNoteInputEnvelope
    set?: SubNoteWhereUniqueInput | SubNoteWhereUniqueInput[]
    disconnect?: SubNoteWhereUniqueInput | SubNoteWhereUniqueInput[]
    delete?: SubNoteWhereUniqueInput | SubNoteWhereUniqueInput[]
    connect?: SubNoteWhereUniqueInput | SubNoteWhereUniqueInput[]
    update?: SubNoteUpdateWithWhereUniqueWithoutNoteInput | SubNoteUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: SubNoteUpdateManyWithWhereWithoutNoteInput | SubNoteUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: SubNoteScalarWhereInput | SubNoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTagsInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    connect?: UserWhereUniqueInput
  }

  export type NoteTagCreateNestedManyWithoutTagInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type SubNoteTagCreateNestedManyWithoutTagInput = {
    create?: XOR<SubNoteTagCreateWithoutTagInput, SubNoteTagUncheckedCreateWithoutTagInput> | SubNoteTagCreateWithoutTagInput[] | SubNoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SubNoteTagCreateOrConnectWithoutTagInput | SubNoteTagCreateOrConnectWithoutTagInput[]
    createMany?: SubNoteTagCreateManyTagInputEnvelope
    connect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
  }

  export type NoteTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type SubNoteTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<SubNoteTagCreateWithoutTagInput, SubNoteTagUncheckedCreateWithoutTagInput> | SubNoteTagCreateWithoutTagInput[] | SubNoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SubNoteTagCreateOrConnectWithoutTagInput | SubNoteTagCreateOrConnectWithoutTagInput[]
    createMany?: SubNoteTagCreateManyTagInputEnvelope
    connect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutTagsNestedInput = {
    create?: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTagsInput
    upsert?: UserUpsertWithoutTagsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTagsInput, UserUpdateWithoutTagsInput>, UserUncheckedUpdateWithoutTagsInput>
  }

  export type NoteTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutTagInput | NoteTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutTagInput | NoteTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutTagInput | NoteTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type SubNoteTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<SubNoteTagCreateWithoutTagInput, SubNoteTagUncheckedCreateWithoutTagInput> | SubNoteTagCreateWithoutTagInput[] | SubNoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SubNoteTagCreateOrConnectWithoutTagInput | SubNoteTagCreateOrConnectWithoutTagInput[]
    upsert?: SubNoteTagUpsertWithWhereUniqueWithoutTagInput | SubNoteTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: SubNoteTagCreateManyTagInputEnvelope
    set?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    disconnect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    delete?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    connect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    update?: SubNoteTagUpdateWithWhereUniqueWithoutTagInput | SubNoteTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: SubNoteTagUpdateManyWithWhereWithoutTagInput | SubNoteTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: SubNoteTagScalarWhereInput | SubNoteTagScalarWhereInput[]
  }

  export type NoteTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutTagInput | NoteTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutTagInput | NoteTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutTagInput | NoteTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type SubNoteTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<SubNoteTagCreateWithoutTagInput, SubNoteTagUncheckedCreateWithoutTagInput> | SubNoteTagCreateWithoutTagInput[] | SubNoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: SubNoteTagCreateOrConnectWithoutTagInput | SubNoteTagCreateOrConnectWithoutTagInput[]
    upsert?: SubNoteTagUpsertWithWhereUniqueWithoutTagInput | SubNoteTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: SubNoteTagCreateManyTagInputEnvelope
    set?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    disconnect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    delete?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    connect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    update?: SubNoteTagUpdateWithWhereUniqueWithoutTagInput | SubNoteTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: SubNoteTagUpdateManyWithWhereWithoutTagInput | SubNoteTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: SubNoteTagScalarWhereInput | SubNoteTagScalarWhereInput[]
  }

  export type NoteCreateNestedOneWithoutTagsInput = {
    create?: XOR<NoteCreateWithoutTagsInput, NoteUncheckedCreateWithoutTagsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutTagsInput
    connect?: NoteWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutNotesInput = {
    create?: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TagCreateOrConnectWithoutNotesInput
    connect?: TagWhereUniqueInput
  }

  export type NoteUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<NoteCreateWithoutTagsInput, NoteUncheckedCreateWithoutTagsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutTagsInput
    upsert?: NoteUpsertWithoutTagsInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutTagsInput, NoteUpdateWithoutTagsInput>, NoteUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TagCreateOrConnectWithoutNotesInput
    upsert?: TagUpsertWithoutNotesInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutNotesInput, TagUpdateWithoutNotesInput>, TagUncheckedUpdateWithoutNotesInput>
  }

  export type NoteCreateNestedOneWithoutImagesInput = {
    create?: XOR<NoteCreateWithoutImagesInput, NoteUncheckedCreateWithoutImagesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutImagesInput
    connect?: NoteWhereUniqueInput
  }

  export type NoteUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<NoteCreateWithoutImagesInput, NoteUncheckedCreateWithoutImagesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutImagesInput
    upsert?: NoteUpsertWithoutImagesInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutImagesInput, NoteUpdateWithoutImagesInput>, NoteUncheckedUpdateWithoutImagesInput>
  }

  export type NoteCreateNestedOneWithoutSubNoteInput = {
    create?: XOR<NoteCreateWithoutSubNoteInput, NoteUncheckedCreateWithoutSubNoteInput>
    connectOrCreate?: NoteCreateOrConnectWithoutSubNoteInput
    connect?: NoteWhereUniqueInput
  }

  export type SubNoteTagCreateNestedManyWithoutSubNoteInput = {
    create?: XOR<SubNoteTagCreateWithoutSubNoteInput, SubNoteTagUncheckedCreateWithoutSubNoteInput> | SubNoteTagCreateWithoutSubNoteInput[] | SubNoteTagUncheckedCreateWithoutSubNoteInput[]
    connectOrCreate?: SubNoteTagCreateOrConnectWithoutSubNoteInput | SubNoteTagCreateOrConnectWithoutSubNoteInput[]
    createMany?: SubNoteTagCreateManySubNoteInputEnvelope
    connect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
  }

  export type SubNoteImageCreateNestedManyWithoutSubNoteInput = {
    create?: XOR<SubNoteImageCreateWithoutSubNoteInput, SubNoteImageUncheckedCreateWithoutSubNoteInput> | SubNoteImageCreateWithoutSubNoteInput[] | SubNoteImageUncheckedCreateWithoutSubNoteInput[]
    connectOrCreate?: SubNoteImageCreateOrConnectWithoutSubNoteInput | SubNoteImageCreateOrConnectWithoutSubNoteInput[]
    createMany?: SubNoteImageCreateManySubNoteInputEnvelope
    connect?: SubNoteImageWhereUniqueInput | SubNoteImageWhereUniqueInput[]
  }

  export type SubNoteTagUncheckedCreateNestedManyWithoutSubNoteInput = {
    create?: XOR<SubNoteTagCreateWithoutSubNoteInput, SubNoteTagUncheckedCreateWithoutSubNoteInput> | SubNoteTagCreateWithoutSubNoteInput[] | SubNoteTagUncheckedCreateWithoutSubNoteInput[]
    connectOrCreate?: SubNoteTagCreateOrConnectWithoutSubNoteInput | SubNoteTagCreateOrConnectWithoutSubNoteInput[]
    createMany?: SubNoteTagCreateManySubNoteInputEnvelope
    connect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
  }

  export type SubNoteImageUncheckedCreateNestedManyWithoutSubNoteInput = {
    create?: XOR<SubNoteImageCreateWithoutSubNoteInput, SubNoteImageUncheckedCreateWithoutSubNoteInput> | SubNoteImageCreateWithoutSubNoteInput[] | SubNoteImageUncheckedCreateWithoutSubNoteInput[]
    connectOrCreate?: SubNoteImageCreateOrConnectWithoutSubNoteInput | SubNoteImageCreateOrConnectWithoutSubNoteInput[]
    createMany?: SubNoteImageCreateManySubNoteInputEnvelope
    connect?: SubNoteImageWhereUniqueInput | SubNoteImageWhereUniqueInput[]
  }

  export type NoteUpdateOneRequiredWithoutSubNoteNestedInput = {
    create?: XOR<NoteCreateWithoutSubNoteInput, NoteUncheckedCreateWithoutSubNoteInput>
    connectOrCreate?: NoteCreateOrConnectWithoutSubNoteInput
    upsert?: NoteUpsertWithoutSubNoteInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutSubNoteInput, NoteUpdateWithoutSubNoteInput>, NoteUncheckedUpdateWithoutSubNoteInput>
  }

  export type SubNoteTagUpdateManyWithoutSubNoteNestedInput = {
    create?: XOR<SubNoteTagCreateWithoutSubNoteInput, SubNoteTagUncheckedCreateWithoutSubNoteInput> | SubNoteTagCreateWithoutSubNoteInput[] | SubNoteTagUncheckedCreateWithoutSubNoteInput[]
    connectOrCreate?: SubNoteTagCreateOrConnectWithoutSubNoteInput | SubNoteTagCreateOrConnectWithoutSubNoteInput[]
    upsert?: SubNoteTagUpsertWithWhereUniqueWithoutSubNoteInput | SubNoteTagUpsertWithWhereUniqueWithoutSubNoteInput[]
    createMany?: SubNoteTagCreateManySubNoteInputEnvelope
    set?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    disconnect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    delete?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    connect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    update?: SubNoteTagUpdateWithWhereUniqueWithoutSubNoteInput | SubNoteTagUpdateWithWhereUniqueWithoutSubNoteInput[]
    updateMany?: SubNoteTagUpdateManyWithWhereWithoutSubNoteInput | SubNoteTagUpdateManyWithWhereWithoutSubNoteInput[]
    deleteMany?: SubNoteTagScalarWhereInput | SubNoteTagScalarWhereInput[]
  }

  export type SubNoteImageUpdateManyWithoutSubNoteNestedInput = {
    create?: XOR<SubNoteImageCreateWithoutSubNoteInput, SubNoteImageUncheckedCreateWithoutSubNoteInput> | SubNoteImageCreateWithoutSubNoteInput[] | SubNoteImageUncheckedCreateWithoutSubNoteInput[]
    connectOrCreate?: SubNoteImageCreateOrConnectWithoutSubNoteInput | SubNoteImageCreateOrConnectWithoutSubNoteInput[]
    upsert?: SubNoteImageUpsertWithWhereUniqueWithoutSubNoteInput | SubNoteImageUpsertWithWhereUniqueWithoutSubNoteInput[]
    createMany?: SubNoteImageCreateManySubNoteInputEnvelope
    set?: SubNoteImageWhereUniqueInput | SubNoteImageWhereUniqueInput[]
    disconnect?: SubNoteImageWhereUniqueInput | SubNoteImageWhereUniqueInput[]
    delete?: SubNoteImageWhereUniqueInput | SubNoteImageWhereUniqueInput[]
    connect?: SubNoteImageWhereUniqueInput | SubNoteImageWhereUniqueInput[]
    update?: SubNoteImageUpdateWithWhereUniqueWithoutSubNoteInput | SubNoteImageUpdateWithWhereUniqueWithoutSubNoteInput[]
    updateMany?: SubNoteImageUpdateManyWithWhereWithoutSubNoteInput | SubNoteImageUpdateManyWithWhereWithoutSubNoteInput[]
    deleteMany?: SubNoteImageScalarWhereInput | SubNoteImageScalarWhereInput[]
  }

  export type SubNoteTagUncheckedUpdateManyWithoutSubNoteNestedInput = {
    create?: XOR<SubNoteTagCreateWithoutSubNoteInput, SubNoteTagUncheckedCreateWithoutSubNoteInput> | SubNoteTagCreateWithoutSubNoteInput[] | SubNoteTagUncheckedCreateWithoutSubNoteInput[]
    connectOrCreate?: SubNoteTagCreateOrConnectWithoutSubNoteInput | SubNoteTagCreateOrConnectWithoutSubNoteInput[]
    upsert?: SubNoteTagUpsertWithWhereUniqueWithoutSubNoteInput | SubNoteTagUpsertWithWhereUniqueWithoutSubNoteInput[]
    createMany?: SubNoteTagCreateManySubNoteInputEnvelope
    set?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    disconnect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    delete?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    connect?: SubNoteTagWhereUniqueInput | SubNoteTagWhereUniqueInput[]
    update?: SubNoteTagUpdateWithWhereUniqueWithoutSubNoteInput | SubNoteTagUpdateWithWhereUniqueWithoutSubNoteInput[]
    updateMany?: SubNoteTagUpdateManyWithWhereWithoutSubNoteInput | SubNoteTagUpdateManyWithWhereWithoutSubNoteInput[]
    deleteMany?: SubNoteTagScalarWhereInput | SubNoteTagScalarWhereInput[]
  }

  export type SubNoteImageUncheckedUpdateManyWithoutSubNoteNestedInput = {
    create?: XOR<SubNoteImageCreateWithoutSubNoteInput, SubNoteImageUncheckedCreateWithoutSubNoteInput> | SubNoteImageCreateWithoutSubNoteInput[] | SubNoteImageUncheckedCreateWithoutSubNoteInput[]
    connectOrCreate?: SubNoteImageCreateOrConnectWithoutSubNoteInput | SubNoteImageCreateOrConnectWithoutSubNoteInput[]
    upsert?: SubNoteImageUpsertWithWhereUniqueWithoutSubNoteInput | SubNoteImageUpsertWithWhereUniqueWithoutSubNoteInput[]
    createMany?: SubNoteImageCreateManySubNoteInputEnvelope
    set?: SubNoteImageWhereUniqueInput | SubNoteImageWhereUniqueInput[]
    disconnect?: SubNoteImageWhereUniqueInput | SubNoteImageWhereUniqueInput[]
    delete?: SubNoteImageWhereUniqueInput | SubNoteImageWhereUniqueInput[]
    connect?: SubNoteImageWhereUniqueInput | SubNoteImageWhereUniqueInput[]
    update?: SubNoteImageUpdateWithWhereUniqueWithoutSubNoteInput | SubNoteImageUpdateWithWhereUniqueWithoutSubNoteInput[]
    updateMany?: SubNoteImageUpdateManyWithWhereWithoutSubNoteInput | SubNoteImageUpdateManyWithWhereWithoutSubNoteInput[]
    deleteMany?: SubNoteImageScalarWhereInput | SubNoteImageScalarWhereInput[]
  }

  export type SubNoteCreateNestedOneWithoutTagsInput = {
    create?: XOR<SubNoteCreateWithoutTagsInput, SubNoteUncheckedCreateWithoutTagsInput>
    connectOrCreate?: SubNoteCreateOrConnectWithoutTagsInput
    connect?: SubNoteWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutSubNoteTagInput = {
    create?: XOR<TagCreateWithoutSubNoteTagInput, TagUncheckedCreateWithoutSubNoteTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutSubNoteTagInput
    connect?: TagWhereUniqueInput
  }

  export type SubNoteUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<SubNoteCreateWithoutTagsInput, SubNoteUncheckedCreateWithoutTagsInput>
    connectOrCreate?: SubNoteCreateOrConnectWithoutTagsInput
    upsert?: SubNoteUpsertWithoutTagsInput
    connect?: SubNoteWhereUniqueInput
    update?: XOR<XOR<SubNoteUpdateToOneWithWhereWithoutTagsInput, SubNoteUpdateWithoutTagsInput>, SubNoteUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutSubNoteTagNestedInput = {
    create?: XOR<TagCreateWithoutSubNoteTagInput, TagUncheckedCreateWithoutSubNoteTagInput>
    connectOrCreate?: TagCreateOrConnectWithoutSubNoteTagInput
    upsert?: TagUpsertWithoutSubNoteTagInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutSubNoteTagInput, TagUpdateWithoutSubNoteTagInput>, TagUncheckedUpdateWithoutSubNoteTagInput>
  }

  export type SubNoteCreateNestedOneWithoutImagesInput = {
    create?: XOR<SubNoteCreateWithoutImagesInput, SubNoteUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SubNoteCreateOrConnectWithoutImagesInput
    connect?: SubNoteWhereUniqueInput
  }

  export type SubNoteUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<SubNoteCreateWithoutImagesInput, SubNoteUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SubNoteCreateOrConnectWithoutImagesInput
    upsert?: SubNoteUpsertWithoutImagesInput
    connect?: SubNoteWhereUniqueInput
    update?: XOR<XOR<SubNoteUpdateToOneWithWhereWithoutImagesInput, SubNoteUpdateWithoutImagesInput>, SubNoteUncheckedUpdateWithoutImagesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
    categories?: CategoryCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    emailValidated?: BoolFilter<"User"> | boolean
    is_active?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    role_id?: IntNullableFilter<"User"> | number | null
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    description?: string | null
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type CategoryCreateWithoutUserInput = {
    id?: string
    name: string
    color?: string | null
    notes?: NoteCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    color?: string | null
    notes?: NoteUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutUserInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    category?: CategoryCreateNestedOneWithoutNotesInput
    tags?: NoteTagCreateNestedManyWithoutNoteInput
    images?: NoteImageCreateNestedManyWithoutNoteInput
    SubNote?: SubNoteCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutUserInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    category_id?: string | null
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    images?: NoteImageUncheckedCreateNestedManyWithoutNoteInput
    SubNote?: SubNoteUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutUserInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteCreateManyUserInputEnvelope = {
    data: NoteCreateManyUserInput | NoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutUserInput = {
    id?: string
    name: string
    notes?: NoteTagCreateNestedManyWithoutTagInput
    SubNoteTag?: SubNoteTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    notes?: NoteTagUncheckedCreateNestedManyWithoutTagInput
    SubNoteTag?: SubNoteTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutUserInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagCreateManyUserInputEnvelope = {
    data: TagCreateManyUserInput | TagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    color?: StringNullableFilter<"Category"> | string | null
    user_id?: StringNullableFilter<"Category"> | string | null
  }

  export type NoteUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
  }

  export type NoteUpdateManyWithWhereWithoutUserInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutUserInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: StringFilter<"Note"> | string
    title?: StringNullableFilter<"Note"> | string | null
    content?: StringNullableFilter<"Note"> | string | null
    is_archived?: BoolFilter<"Note"> | boolean
    is_pinned?: BoolFilter<"Note"> | boolean
    created_at?: DateTimeFilter<"Note"> | Date | string
    updated_at?: DateTimeFilter<"Note"> | Date | string
    user_id?: StringFilter<"Note"> | string
    category_id?: StringNullableFilter<"Note"> | string | null
  }

  export type TagUpsertWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
    create: XOR<TagCreateWithoutUserInput, TagUncheckedCreateWithoutUserInput>
  }

  export type TagUpdateWithWhereUniqueWithoutUserInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutUserInput, TagUncheckedUpdateWithoutUserInput>
  }

  export type TagUpdateManyWithWhereWithoutUserInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutUserInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    user_id?: StringNullableFilter<"Tag"> | string | null
  }

  export type UserCreateWithoutCategoriesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    notes?: NoteCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
    role_id?: number | null
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type NoteCreateWithoutCategoryInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
    tags?: NoteTagCreateNestedManyWithoutNoteInput
    images?: NoteImageCreateNestedManyWithoutNoteInput
    SubNote?: SubNoteCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutCategoryInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    images?: NoteImageUncheckedCreateNestedManyWithoutNoteInput
    SubNote?: SubNoteUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutCategoryInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutCategoryInput, NoteUncheckedCreateWithoutCategoryInput>
  }

  export type NoteCreateManyCategoryInputEnvelope = {
    data: NoteCreateManyCategoryInput | NoteCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NoteUpsertWithWhereUniqueWithoutCategoryInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutCategoryInput, NoteUncheckedUpdateWithoutCategoryInput>
    create: XOR<NoteCreateWithoutCategoryInput, NoteUncheckedCreateWithoutCategoryInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutCategoryInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutCategoryInput, NoteUncheckedUpdateWithoutCategoryInput>
  }

  export type NoteUpdateManyWithWhereWithoutCategoryInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutNotesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    tags?: TagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
    role_id?: number | null
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    tags?: TagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type CategoryCreateWithoutNotesInput = {
    id?: string
    name: string
    color?: string | null
    user?: UserCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutNotesInput = {
    id?: string
    name: string
    color?: string | null
    user_id?: string | null
  }

  export type CategoryCreateOrConnectWithoutNotesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutNotesInput, CategoryUncheckedCreateWithoutNotesInput>
  }

  export type NoteTagCreateWithoutNoteInput = {
    tag: TagCreateNestedOneWithoutNotesInput
  }

  export type NoteTagUncheckedCreateWithoutNoteInput = {
    tag_id: string
  }

  export type NoteTagCreateOrConnectWithoutNoteInput = {
    where: NoteTagWhereUniqueInput
    create: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput>
  }

  export type NoteTagCreateManyNoteInputEnvelope = {
    data: NoteTagCreateManyNoteInput | NoteTagCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type NoteImageCreateWithoutNoteInput = {
    id?: string
    url: string
    public_id?: string | null
    alt_text?: string | null
    created_at?: Date | string
  }

  export type NoteImageUncheckedCreateWithoutNoteInput = {
    id?: string
    url: string
    public_id?: string | null
    alt_text?: string | null
    created_at?: Date | string
  }

  export type NoteImageCreateOrConnectWithoutNoteInput = {
    where: NoteImageWhereUniqueInput
    create: XOR<NoteImageCreateWithoutNoteInput, NoteImageUncheckedCreateWithoutNoteInput>
  }

  export type NoteImageCreateManyNoteInputEnvelope = {
    data: NoteImageCreateManyNoteInput | NoteImageCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type SubNoteCreateWithoutNoteInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_archived?: boolean
    is_pinned?: boolean
    tags?: SubNoteTagCreateNestedManyWithoutSubNoteInput
    images?: SubNoteImageCreateNestedManyWithoutSubNoteInput
  }

  export type SubNoteUncheckedCreateWithoutNoteInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_archived?: boolean
    is_pinned?: boolean
    tags?: SubNoteTagUncheckedCreateNestedManyWithoutSubNoteInput
    images?: SubNoteImageUncheckedCreateNestedManyWithoutSubNoteInput
  }

  export type SubNoteCreateOrConnectWithoutNoteInput = {
    where: SubNoteWhereUniqueInput
    create: XOR<SubNoteCreateWithoutNoteInput, SubNoteUncheckedCreateWithoutNoteInput>
  }

  export type SubNoteCreateManyNoteInputEnvelope = {
    data: SubNoteCreateManyNoteInput | SubNoteCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutNotesInput = {
    update: XOR<CategoryUpdateWithoutNotesInput, CategoryUncheckedUpdateWithoutNotesInput>
    create: XOR<CategoryCreateWithoutNotesInput, CategoryUncheckedCreateWithoutNotesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutNotesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutNotesInput, CategoryUncheckedUpdateWithoutNotesInput>
  }

  export type CategoryUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoteTagUpsertWithWhereUniqueWithoutNoteInput = {
    where: NoteTagWhereUniqueInput
    update: XOR<NoteTagUpdateWithoutNoteInput, NoteTagUncheckedUpdateWithoutNoteInput>
    create: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput>
  }

  export type NoteTagUpdateWithWhereUniqueWithoutNoteInput = {
    where: NoteTagWhereUniqueInput
    data: XOR<NoteTagUpdateWithoutNoteInput, NoteTagUncheckedUpdateWithoutNoteInput>
  }

  export type NoteTagUpdateManyWithWhereWithoutNoteInput = {
    where: NoteTagScalarWhereInput
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyWithoutNoteInput>
  }

  export type NoteTagScalarWhereInput = {
    AND?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
    OR?: NoteTagScalarWhereInput[]
    NOT?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
    note_id?: StringFilter<"NoteTag"> | string
    tag_id?: StringFilter<"NoteTag"> | string
  }

  export type NoteImageUpsertWithWhereUniqueWithoutNoteInput = {
    where: NoteImageWhereUniqueInput
    update: XOR<NoteImageUpdateWithoutNoteInput, NoteImageUncheckedUpdateWithoutNoteInput>
    create: XOR<NoteImageCreateWithoutNoteInput, NoteImageUncheckedCreateWithoutNoteInput>
  }

  export type NoteImageUpdateWithWhereUniqueWithoutNoteInput = {
    where: NoteImageWhereUniqueInput
    data: XOR<NoteImageUpdateWithoutNoteInput, NoteImageUncheckedUpdateWithoutNoteInput>
  }

  export type NoteImageUpdateManyWithWhereWithoutNoteInput = {
    where: NoteImageScalarWhereInput
    data: XOR<NoteImageUpdateManyMutationInput, NoteImageUncheckedUpdateManyWithoutNoteInput>
  }

  export type NoteImageScalarWhereInput = {
    AND?: NoteImageScalarWhereInput | NoteImageScalarWhereInput[]
    OR?: NoteImageScalarWhereInput[]
    NOT?: NoteImageScalarWhereInput | NoteImageScalarWhereInput[]
    id?: StringFilter<"NoteImage"> | string
    url?: StringFilter<"NoteImage"> | string
    public_id?: StringNullableFilter<"NoteImage"> | string | null
    alt_text?: StringNullableFilter<"NoteImage"> | string | null
    created_at?: DateTimeFilter<"NoteImage"> | Date | string
    note_id?: StringFilter<"NoteImage"> | string
  }

  export type SubNoteUpsertWithWhereUniqueWithoutNoteInput = {
    where: SubNoteWhereUniqueInput
    update: XOR<SubNoteUpdateWithoutNoteInput, SubNoteUncheckedUpdateWithoutNoteInput>
    create: XOR<SubNoteCreateWithoutNoteInput, SubNoteUncheckedCreateWithoutNoteInput>
  }

  export type SubNoteUpdateWithWhereUniqueWithoutNoteInput = {
    where: SubNoteWhereUniqueInput
    data: XOR<SubNoteUpdateWithoutNoteInput, SubNoteUncheckedUpdateWithoutNoteInput>
  }

  export type SubNoteUpdateManyWithWhereWithoutNoteInput = {
    where: SubNoteScalarWhereInput
    data: XOR<SubNoteUpdateManyMutationInput, SubNoteUncheckedUpdateManyWithoutNoteInput>
  }

  export type SubNoteScalarWhereInput = {
    AND?: SubNoteScalarWhereInput | SubNoteScalarWhereInput[]
    OR?: SubNoteScalarWhereInput[]
    NOT?: SubNoteScalarWhereInput | SubNoteScalarWhereInput[]
    id?: StringFilter<"SubNote"> | string
    title?: StringFilter<"SubNote"> | string
    description?: StringNullableFilter<"SubNote"> | string | null
    note_id?: StringFilter<"SubNote"> | string
    created_at?: DateTimeFilter<"SubNote"> | Date | string
    updated_at?: DateTimeFilter<"SubNote"> | Date | string
    is_archived?: BoolFilter<"SubNote"> | boolean
    is_pinned?: BoolFilter<"SubNote"> | boolean
  }

  export type UserCreateWithoutTagsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
    role_id?: number | null
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
  }

  export type NoteTagCreateWithoutTagInput = {
    note: NoteCreateNestedOneWithoutTagsInput
  }

  export type NoteTagUncheckedCreateWithoutTagInput = {
    note_id: string
  }

  export type NoteTagCreateOrConnectWithoutTagInput = {
    where: NoteTagWhereUniqueInput
    create: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput>
  }

  export type NoteTagCreateManyTagInputEnvelope = {
    data: NoteTagCreateManyTagInput | NoteTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type SubNoteTagCreateWithoutTagInput = {
    subNote: SubNoteCreateNestedOneWithoutTagsInput
  }

  export type SubNoteTagUncheckedCreateWithoutTagInput = {
    sub_note_id: string
  }

  export type SubNoteTagCreateOrConnectWithoutTagInput = {
    where: SubNoteTagWhereUniqueInput
    create: XOR<SubNoteTagCreateWithoutTagInput, SubNoteTagUncheckedCreateWithoutTagInput>
  }

  export type SubNoteTagCreateManyTagInputEnvelope = {
    data: SubNoteTagCreateManyTagInput | SubNoteTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTagsInput = {
    update: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
    create: XOR<UserCreateWithoutTagsInput, UserUncheckedCreateWithoutTagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTagsInput, UserUncheckedUpdateWithoutTagsInput>
  }

  export type UserUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneWithoutUsersNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NoteTagUpsertWithWhereUniqueWithoutTagInput = {
    where: NoteTagWhereUniqueInput
    update: XOR<NoteTagUpdateWithoutTagInput, NoteTagUncheckedUpdateWithoutTagInput>
    create: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput>
  }

  export type NoteTagUpdateWithWhereUniqueWithoutTagInput = {
    where: NoteTagWhereUniqueInput
    data: XOR<NoteTagUpdateWithoutTagInput, NoteTagUncheckedUpdateWithoutTagInput>
  }

  export type NoteTagUpdateManyWithWhereWithoutTagInput = {
    where: NoteTagScalarWhereInput
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyWithoutTagInput>
  }

  export type SubNoteTagUpsertWithWhereUniqueWithoutTagInput = {
    where: SubNoteTagWhereUniqueInput
    update: XOR<SubNoteTagUpdateWithoutTagInput, SubNoteTagUncheckedUpdateWithoutTagInput>
    create: XOR<SubNoteTagCreateWithoutTagInput, SubNoteTagUncheckedCreateWithoutTagInput>
  }

  export type SubNoteTagUpdateWithWhereUniqueWithoutTagInput = {
    where: SubNoteTagWhereUniqueInput
    data: XOR<SubNoteTagUpdateWithoutTagInput, SubNoteTagUncheckedUpdateWithoutTagInput>
  }

  export type SubNoteTagUpdateManyWithWhereWithoutTagInput = {
    where: SubNoteTagScalarWhereInput
    data: XOR<SubNoteTagUpdateManyMutationInput, SubNoteTagUncheckedUpdateManyWithoutTagInput>
  }

  export type SubNoteTagScalarWhereInput = {
    AND?: SubNoteTagScalarWhereInput | SubNoteTagScalarWhereInput[]
    OR?: SubNoteTagScalarWhereInput[]
    NOT?: SubNoteTagScalarWhereInput | SubNoteTagScalarWhereInput[]
    sub_note_id?: StringFilter<"SubNoteTag"> | string
    tag_id?: StringFilter<"SubNoteTag"> | string
  }

  export type NoteCreateWithoutTagsInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
    category?: CategoryCreateNestedOneWithoutNotesInput
    images?: NoteImageCreateNestedManyWithoutNoteInput
    SubNote?: SubNoteCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutTagsInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    category_id?: string | null
    images?: NoteImageUncheckedCreateNestedManyWithoutNoteInput
    SubNote?: SubNoteUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutTagsInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutTagsInput, NoteUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutNotesInput = {
    id?: string
    name: string
    user?: UserCreateNestedOneWithoutTagsInput
    SubNoteTag?: SubNoteTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutNotesInput = {
    id?: string
    name: string
    user_id?: string | null
    SubNoteTag?: SubNoteTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutNotesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput>
  }

  export type NoteUpsertWithoutTagsInput = {
    update: XOR<NoteUpdateWithoutTagsInput, NoteUncheckedUpdateWithoutTagsInput>
    create: XOR<NoteCreateWithoutTagsInput, NoteUncheckedCreateWithoutTagsInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutTagsInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutTagsInput, NoteUncheckedUpdateWithoutTagsInput>
  }

  export type NoteUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
    category?: CategoryUpdateOneWithoutNotesNestedInput
    images?: NoteImageUpdateManyWithoutNoteNestedInput
    SubNote?: SubNoteUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NoteImageUncheckedUpdateManyWithoutNoteNestedInput
    SubNote?: SubNoteUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type TagUpsertWithoutNotesInput = {
    update: XOR<TagUpdateWithoutNotesInput, TagUncheckedUpdateWithoutNotesInput>
    create: XOR<TagCreateWithoutNotesInput, TagUncheckedCreateWithoutNotesInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutNotesInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutNotesInput, TagUncheckedUpdateWithoutNotesInput>
  }

  export type TagUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutTagsNestedInput
    SubNoteTag?: SubNoteTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    SubNoteTag?: SubNoteTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type NoteCreateWithoutImagesInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
    category?: CategoryCreateNestedOneWithoutNotesInput
    tags?: NoteTagCreateNestedManyWithoutNoteInput
    SubNote?: SubNoteCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutImagesInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    category_id?: string | null
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    SubNote?: SubNoteUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutImagesInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutImagesInput, NoteUncheckedCreateWithoutImagesInput>
  }

  export type NoteUpsertWithoutImagesInput = {
    update: XOR<NoteUpdateWithoutImagesInput, NoteUncheckedUpdateWithoutImagesInput>
    create: XOR<NoteCreateWithoutImagesInput, NoteUncheckedCreateWithoutImagesInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutImagesInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutImagesInput, NoteUncheckedUpdateWithoutImagesInput>
  }

  export type NoteUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
    category?: CategoryUpdateOneWithoutNotesNestedInput
    tags?: NoteTagUpdateManyWithoutNoteNestedInput
    SubNote?: SubNoteUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    SubNote?: SubNoteUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteCreateWithoutSubNoteInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
    category?: CategoryCreateNestedOneWithoutNotesInput
    tags?: NoteTagCreateNestedManyWithoutNoteInput
    images?: NoteImageCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutSubNoteInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    category_id?: string | null
    tags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    images?: NoteImageUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutSubNoteInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutSubNoteInput, NoteUncheckedCreateWithoutSubNoteInput>
  }

  export type SubNoteTagCreateWithoutSubNoteInput = {
    tag: TagCreateNestedOneWithoutSubNoteTagInput
  }

  export type SubNoteTagUncheckedCreateWithoutSubNoteInput = {
    tag_id: string
  }

  export type SubNoteTagCreateOrConnectWithoutSubNoteInput = {
    where: SubNoteTagWhereUniqueInput
    create: XOR<SubNoteTagCreateWithoutSubNoteInput, SubNoteTagUncheckedCreateWithoutSubNoteInput>
  }

  export type SubNoteTagCreateManySubNoteInputEnvelope = {
    data: SubNoteTagCreateManySubNoteInput | SubNoteTagCreateManySubNoteInput[]
    skipDuplicates?: boolean
  }

  export type SubNoteImageCreateWithoutSubNoteInput = {
    id?: string
    url: string
    alt_text?: string | null
    created_at?: Date | string
    public_id?: string | null
  }

  export type SubNoteImageUncheckedCreateWithoutSubNoteInput = {
    id?: string
    url: string
    alt_text?: string | null
    created_at?: Date | string
    public_id?: string | null
  }

  export type SubNoteImageCreateOrConnectWithoutSubNoteInput = {
    where: SubNoteImageWhereUniqueInput
    create: XOR<SubNoteImageCreateWithoutSubNoteInput, SubNoteImageUncheckedCreateWithoutSubNoteInput>
  }

  export type SubNoteImageCreateManySubNoteInputEnvelope = {
    data: SubNoteImageCreateManySubNoteInput | SubNoteImageCreateManySubNoteInput[]
    skipDuplicates?: boolean
  }

  export type NoteUpsertWithoutSubNoteInput = {
    update: XOR<NoteUpdateWithoutSubNoteInput, NoteUncheckedUpdateWithoutSubNoteInput>
    create: XOR<NoteCreateWithoutSubNoteInput, NoteUncheckedCreateWithoutSubNoteInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutSubNoteInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutSubNoteInput, NoteUncheckedUpdateWithoutSubNoteInput>
  }

  export type NoteUpdateWithoutSubNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
    category?: CategoryUpdateOneWithoutNotesNestedInput
    tags?: NoteTagUpdateManyWithoutNoteNestedInput
    images?: NoteImageUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutSubNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    images?: NoteImageUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type SubNoteTagUpsertWithWhereUniqueWithoutSubNoteInput = {
    where: SubNoteTagWhereUniqueInput
    update: XOR<SubNoteTagUpdateWithoutSubNoteInput, SubNoteTagUncheckedUpdateWithoutSubNoteInput>
    create: XOR<SubNoteTagCreateWithoutSubNoteInput, SubNoteTagUncheckedCreateWithoutSubNoteInput>
  }

  export type SubNoteTagUpdateWithWhereUniqueWithoutSubNoteInput = {
    where: SubNoteTagWhereUniqueInput
    data: XOR<SubNoteTagUpdateWithoutSubNoteInput, SubNoteTagUncheckedUpdateWithoutSubNoteInput>
  }

  export type SubNoteTagUpdateManyWithWhereWithoutSubNoteInput = {
    where: SubNoteTagScalarWhereInput
    data: XOR<SubNoteTagUpdateManyMutationInput, SubNoteTagUncheckedUpdateManyWithoutSubNoteInput>
  }

  export type SubNoteImageUpsertWithWhereUniqueWithoutSubNoteInput = {
    where: SubNoteImageWhereUniqueInput
    update: XOR<SubNoteImageUpdateWithoutSubNoteInput, SubNoteImageUncheckedUpdateWithoutSubNoteInput>
    create: XOR<SubNoteImageCreateWithoutSubNoteInput, SubNoteImageUncheckedCreateWithoutSubNoteInput>
  }

  export type SubNoteImageUpdateWithWhereUniqueWithoutSubNoteInput = {
    where: SubNoteImageWhereUniqueInput
    data: XOR<SubNoteImageUpdateWithoutSubNoteInput, SubNoteImageUncheckedUpdateWithoutSubNoteInput>
  }

  export type SubNoteImageUpdateManyWithWhereWithoutSubNoteInput = {
    where: SubNoteImageScalarWhereInput
    data: XOR<SubNoteImageUpdateManyMutationInput, SubNoteImageUncheckedUpdateManyWithoutSubNoteInput>
  }

  export type SubNoteImageScalarWhereInput = {
    AND?: SubNoteImageScalarWhereInput | SubNoteImageScalarWhereInput[]
    OR?: SubNoteImageScalarWhereInput[]
    NOT?: SubNoteImageScalarWhereInput | SubNoteImageScalarWhereInput[]
    id?: StringFilter<"SubNoteImage"> | string
    url?: StringFilter<"SubNoteImage"> | string
    alt_text?: StringNullableFilter<"SubNoteImage"> | string | null
    sub_note_id?: StringFilter<"SubNoteImage"> | string
    created_at?: DateTimeFilter<"SubNoteImage"> | Date | string
    public_id?: StringNullableFilter<"SubNoteImage"> | string | null
  }

  export type SubNoteCreateWithoutTagsInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_archived?: boolean
    is_pinned?: boolean
    note: NoteCreateNestedOneWithoutSubNoteInput
    images?: SubNoteImageCreateNestedManyWithoutSubNoteInput
  }

  export type SubNoteUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    description?: string | null
    note_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_archived?: boolean
    is_pinned?: boolean
    images?: SubNoteImageUncheckedCreateNestedManyWithoutSubNoteInput
  }

  export type SubNoteCreateOrConnectWithoutTagsInput = {
    where: SubNoteWhereUniqueInput
    create: XOR<SubNoteCreateWithoutTagsInput, SubNoteUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutSubNoteTagInput = {
    id?: string
    name: string
    user?: UserCreateNestedOneWithoutTagsInput
    notes?: NoteTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutSubNoteTagInput = {
    id?: string
    name: string
    user_id?: string | null
    notes?: NoteTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutSubNoteTagInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutSubNoteTagInput, TagUncheckedCreateWithoutSubNoteTagInput>
  }

  export type SubNoteUpsertWithoutTagsInput = {
    update: XOR<SubNoteUpdateWithoutTagsInput, SubNoteUncheckedUpdateWithoutTagsInput>
    create: XOR<SubNoteCreateWithoutTagsInput, SubNoteUncheckedCreateWithoutTagsInput>
    where?: SubNoteWhereInput
  }

  export type SubNoteUpdateToOneWithWhereWithoutTagsInput = {
    where?: SubNoteWhereInput
    data: XOR<SubNoteUpdateWithoutTagsInput, SubNoteUncheckedUpdateWithoutTagsInput>
  }

  export type SubNoteUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    note?: NoteUpdateOneRequiredWithoutSubNoteNestedInput
    images?: SubNoteImageUpdateManyWithoutSubNoteNestedInput
  }

  export type SubNoteUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    images?: SubNoteImageUncheckedUpdateManyWithoutSubNoteNestedInput
  }

  export type TagUpsertWithoutSubNoteTagInput = {
    update: XOR<TagUpdateWithoutSubNoteTagInput, TagUncheckedUpdateWithoutSubNoteTagInput>
    create: XOR<TagCreateWithoutSubNoteTagInput, TagUncheckedCreateWithoutSubNoteTagInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutSubNoteTagInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutSubNoteTagInput, TagUncheckedUpdateWithoutSubNoteTagInput>
  }

  export type TagUpdateWithoutSubNoteTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutTagsNestedInput
    notes?: NoteTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutSubNoteTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NoteTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type SubNoteCreateWithoutImagesInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_archived?: boolean
    is_pinned?: boolean
    note: NoteCreateNestedOneWithoutSubNoteInput
    tags?: SubNoteTagCreateNestedManyWithoutSubNoteInput
  }

  export type SubNoteUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    description?: string | null
    note_id: string
    created_at?: Date | string
    updated_at?: Date | string
    is_archived?: boolean
    is_pinned?: boolean
    tags?: SubNoteTagUncheckedCreateNestedManyWithoutSubNoteInput
  }

  export type SubNoteCreateOrConnectWithoutImagesInput = {
    where: SubNoteWhereUniqueInput
    create: XOR<SubNoteCreateWithoutImagesInput, SubNoteUncheckedCreateWithoutImagesInput>
  }

  export type SubNoteUpsertWithoutImagesInput = {
    update: XOR<SubNoteUpdateWithoutImagesInput, SubNoteUncheckedUpdateWithoutImagesInput>
    create: XOR<SubNoteCreateWithoutImagesInput, SubNoteUncheckedCreateWithoutImagesInput>
    where?: SubNoteWhereInput
  }

  export type SubNoteUpdateToOneWithWhereWithoutImagesInput = {
    where?: SubNoteWhereInput
    data: XOR<SubNoteUpdateWithoutImagesInput, SubNoteUncheckedUpdateWithoutImagesInput>
  }

  export type SubNoteUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    note?: NoteUpdateOneRequiredWithoutSubNoteNestedInput
    tags?: SubNoteTagUpdateManyWithoutSubNoteNestedInput
  }

  export type SubNoteUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    tags?: SubNoteTagUncheckedUpdateManyWithoutSubNoteNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: string
    name: string
    email: string
    password_hash: string
    emailValidated?: boolean
    is_active?: boolean
    image?: string | null
    created_at?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    tags?: TagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    tags?: TagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyUserInput = {
    id?: string
    name: string
    color?: string | null
  }

  export type NoteCreateManyUserInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    category_id?: string | null
  }

  export type TagCreateManyUserInput = {
    id?: string
    name: string
  }

  export type CategoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NoteUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NoteUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutNotesNestedInput
    tags?: NoteTagUpdateManyWithoutNoteNestedInput
    images?: NoteImageUpdateManyWithoutNoteNestedInput
    SubNote?: SubNoteUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    images?: NoteImageUncheckedUpdateManyWithoutNoteNestedInput
    SubNote?: SubNoteUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: NoteTagUpdateManyWithoutTagNestedInput
    SubNoteTag?: SubNoteTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    notes?: NoteTagUncheckedUpdateManyWithoutTagNestedInput
    SubNoteTag?: SubNoteTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateManyCategoryInput = {
    id?: string
    title?: string | null
    content?: string | null
    is_archived?: boolean
    is_pinned?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
  }

  export type NoteUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
    tags?: NoteTagUpdateManyWithoutNoteNestedInput
    images?: NoteImageUpdateManyWithoutNoteNestedInput
    SubNote?: SubNoteUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    tags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    images?: NoteImageUncheckedUpdateManyWithoutNoteNestedInput
    SubNote?: SubNoteUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type NoteTagCreateManyNoteInput = {
    tag_id: string
  }

  export type NoteImageCreateManyNoteInput = {
    id?: string
    url: string
    public_id?: string | null
    alt_text?: string | null
    created_at?: Date | string
  }

  export type SubNoteCreateManyNoteInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    is_archived?: boolean
    is_pinned?: boolean
  }

  export type NoteTagUpdateWithoutNoteInput = {
    tag?: TagUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteTagUncheckedUpdateWithoutNoteInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type NoteTagUncheckedUpdateManyWithoutNoteInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type NoteImageUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteImageUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteImageUncheckedUpdateManyWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubNoteUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    tags?: SubNoteTagUpdateManyWithoutSubNoteNestedInput
    images?: SubNoteImageUpdateManyWithoutSubNoteNestedInput
  }

  export type SubNoteUncheckedUpdateWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    tags?: SubNoteTagUncheckedUpdateManyWithoutSubNoteNestedInput
    images?: SubNoteImageUncheckedUpdateManyWithoutSubNoteNestedInput
  }

  export type SubNoteUncheckedUpdateManyWithoutNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_archived?: BoolFieldUpdateOperationsInput | boolean
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoteTagCreateManyTagInput = {
    note_id: string
  }

  export type SubNoteTagCreateManyTagInput = {
    sub_note_id: string
  }

  export type NoteTagUpdateWithoutTagInput = {
    note?: NoteUpdateOneRequiredWithoutTagsNestedInput
  }

  export type NoteTagUncheckedUpdateWithoutTagInput = {
    note_id?: StringFieldUpdateOperationsInput | string
  }

  export type NoteTagUncheckedUpdateManyWithoutTagInput = {
    note_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubNoteTagUpdateWithoutTagInput = {
    subNote?: SubNoteUpdateOneRequiredWithoutTagsNestedInput
  }

  export type SubNoteTagUncheckedUpdateWithoutTagInput = {
    sub_note_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubNoteTagUncheckedUpdateManyWithoutTagInput = {
    sub_note_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubNoteTagCreateManySubNoteInput = {
    tag_id: string
  }

  export type SubNoteImageCreateManySubNoteInput = {
    id?: string
    url: string
    alt_text?: string | null
    created_at?: Date | string
    public_id?: string | null
  }

  export type SubNoteTagUpdateWithoutSubNoteInput = {
    tag?: TagUpdateOneRequiredWithoutSubNoteTagNestedInput
  }

  export type SubNoteTagUncheckedUpdateWithoutSubNoteInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubNoteTagUncheckedUpdateManyWithoutSubNoteInput = {
    tag_id?: StringFieldUpdateOperationsInput | string
  }

  export type SubNoteImageUpdateWithoutSubNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubNoteImageUncheckedUpdateWithoutSubNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubNoteImageUncheckedUpdateManyWithoutSubNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
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